import algoliasearch from 'algoliasearch/lite';
import { MultipleQueriesResponse } from '@algolia/client-search';
import { createApiError } from '@algolia/transporter';

import { handler } from '../suggestions';
import { NetlifyEvent } from '../types';
import { noop } from './utils';
import { createHandlerContext, createHandlerEvent } from './mocks';
import { searchResponse } from './fixtures';

jest.mock('algoliasearch/lite', () => {
  return jest.fn();
});

const algoliasearchMock = (algoliasearch as unknown) as jest.Mock<
  Partial<ReturnType<typeof algoliasearch>>
>;

describe('suggestions', () => {
  beforeEach(() => {
    algoliasearchMock.mockReset();
    algoliasearchMock.mockImplementation(
      jest.fn(() => ({
        search: jest.fn(() => Promise.resolve({ results: [] })),
      }))
    );
  });
  test('forwards Algolia credentials to the client', async () => {
    await handler(
      createHandlerEvent<NetlifyEvent>({
        queryStringParameters: {
          appId: 'appId',
          apiKey: 'apiKey',
          indexName: 'indexName',
          query: 'query',
        },
      }),
      createHandlerContext(),
      noop
    );

    expect(algoliasearchMock).toHaveBeenCalledTimes(1);
    expect(algoliasearchMock).toHaveBeenCalledWith('appId', 'apiKey');
  });

  test('calls the search client with the query parameters', async () => {
    await handler(
      createHandlerEvent<NetlifyEvent>({
        queryStringParameters: {
          appId: 'appId',
          apiKey: 'apiKey',
          indexName: 'indexName',
          query: 'query',
          hitsPerPage: '10',
        },
      }),
      createHandlerContext(),
      noop
    );

    const search = algoliasearchMock.mock.results[0].value.search;

    expect(search).toHaveBeenCalledTimes(1);
    expect(search).toHaveBeenCalledWith([
      {
        indexName: 'indexName',
        query: 'query',
        params: {
          hitsPerPage: '10',
        },
      },
    ]);
  });

  test('returns the query and the suggestions', async () => {
    algoliasearchMock.mockImplementationOnce(() => ({
      search: jest.fn(() =>
        Promise.resolve<MultipleQueriesResponse<any>>(searchResponse)
      ),
    }));

    const suggestions = await handler(
      createHandlerEvent({
        queryStringParameters: {
          appId: 'appId',
          apiKey: 'apiKey',
          indexName: 'indexName',
          query: 'query',
        },
      }),
      createHandlerContext(),
      noop
    );

    expect(suggestions).toEqual({
      body: JSON.stringify([
        'query',
        ['amazon', 'cooktop', 'macbook', 'google'],
      ]),
      statusCode: 200,
    });
  });

  test('returns the API error when the client throws', async () => {
    algoliasearchMock.mockImplementationOnce(() => ({
      search: jest.fn(() => Promise.reject(createApiError('Error', 400, []))),
    }));

    const suggestions = await handler(
      createHandlerEvent({
        queryStringParameters: {
          appId: 'appId',
          apiKey: 'apiKey',
          indexName: 'indexName',
          query: 'query',
        },
      }),
      createHandlerContext(),
      noop
    );

    expect(suggestions).toEqual({
      body: JSON.stringify({
        name: 'ApiError',
        message: 'Error',
        status: 400,
        transporterStackTrace: [],
      }),
      statusCode: 400,
    });
  });

  test('returns a server error when service fails for unknown reason', async () => {
    algoliasearchMock.mockImplementationOnce(() => ({
      search: jest.fn(() => Promise.reject(new Error())),
    }));

    const suggestions = await handler(
      createHandlerEvent({
        queryStringParameters: {
          appId: 'appId',
          apiKey: 'apiKey',
          indexName: 'indexName',
          query: 'query',
        },
      }),
      createHandlerContext(),
      noop
    );

    expect(suggestions).toEqual({
      body: JSON.stringify({}),
      statusCode: 500,
    });
  });
});
