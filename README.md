# algolia-opensearch-suggestions

Endpoint to convert [Algolia Query Suggestions](https://www.algolia.com/doc/guides/getting-insights-and-analytics/leveraging-analytics-data/query-suggestions/) search results to [OpenSearch Suggestions convention](https://github.com/dewitt/opensearch/blob/c9ed38a524c53b61d582634b28e5e83af9f8f8ae/mediawiki/Specifications/OpenSearch/Extensions/Suggestions/1.1/Draft%201.wiki)

## Usage

Go to:

```
https://algolia-opensearch-suggestions.netlify.app/.netlify/functions/suggestions?query={QUERY}&appId={APP_ID}&apiKey={API_KEY}&indexName={INDEX_NAME}
```

[Search parameters](https://www.algolia.com/doc/api-reference/search-api-parameters/) added to the URL are forwarded to the Algolia request.

###### Example

https://algolia-opensearch-suggestions.netlify.app/.netlify/functions/suggestions?query=iphone&appId=latency&apiKey=6be0576ff61c053d5f9a3225e2a90f76&indexName=instant_search_demo_query_suggestions&hitsPerPage=3

## License

[MIT](LICENSE)
