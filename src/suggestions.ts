import algolisearch from "algoliasearch/lite";
import { Handler } from "aws-lambda";

type NetlifyEvent = {
  path: string;
  httpMethod: string;
  headers: Headers;
  queryStringParameters: Record<string, string>;
  body: string;
  isBase64Encoded: boolean;
};

type QuerySuggestionsRecord = {
  query: string;
  objectID: string;
  popularity: number;
  nb_words: number;
};

export const handler: Handler<NetlifyEvent> = async (event) => {
  const {
    appId,
    apiKey,
    indexName,
    query,
    ...params
  } = event.queryStringParameters;
  const searchClient = algolisearch(appId, apiKey);

  try {
    const response = await searchClient.search<QuerySuggestionsRecord>([
      {
        indexName,
        query,
        params,
      },
    ]);
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
