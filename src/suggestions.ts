import algoliasearch from 'algoliasearch/lite';
import { Handler } from 'aws-lambda';

import { NetlifyEvent } from './types';

type QuerySuggestionsRecord = {
  query: string;
  objectID: string;
  popularity: number;
  nb_words: number;
};

type SuggestionsResponse = {
  statusCode: number;
  body: string;
};

export const handler: Handler<NetlifyEvent, SuggestionsResponse> = async (
  event
) => {
  const {
    appId,
    apiKey,
    indexName,
    query,
    ...params
  } = event.queryStringParameters;
  const searchClient = algoliasearch(appId, apiKey);

  try {
    const response = await searchClient.search<QuerySuggestionsRecord>([
      {
        indexName,
        query,
        params,
      },
    ]);

    if (response.results.length === 0) {
      return {
        statusCode: 200,
        body: JSON.stringify([]),
      };
    }

    const [result] = response.results;
    const suggestions = [result.query, result.hits.map((hit) => hit.query)];

    return {
      statusCode: 200,
      body: JSON.stringify(suggestions),
    };
  } catch (error) {
    return {
      statusCode: error.status || 500,
      body: JSON.stringify(error),
    };
  }
};
