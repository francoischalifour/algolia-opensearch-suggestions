# algolia-opensearch-suggestions

Service to convert [Algolia Query Suggestions](https://www.algolia.com/doc/guides/getting-insights-and-analytics/leveraging-analytics-data/query-suggestions/) search results to [OpenSearch Suggestions](https://github.com/dewitt/opensearch/blob/c9ed38a524c53b61d582634b28e5e83af9f8f8ae/mediawiki/Specifications/OpenSearch/Extensions/Suggestions/1.1/Draft%201.wiki).

## Usage

### Endpoint

```
https://algolia-opensearch-suggestions.netlify.app/.netlify/functions/suggestions
```

### Query parameters

- [`appId`](https://www.algolia.com/api-keys/)
- [`apiKey`](https://www.algolia.com/api-keys/)
- [`indexName`](https://www.algolia.com/explorer/)
- [`query`](https://www.algolia.com/doc/api-reference/api-parameters/query/)
- ...any [Algolia Search Parameters](https://www.algolia.com/doc/api-reference/search-api-parameters/)

###### Example

https://algolia-opensearch-suggestions.netlify.app/.netlify/functions/suggestions?query=iphone&appId=latency&apiKey=6be0576ff61c053d5f9a3225e2a90f76&indexName=instant_search_demo_query_suggestions&hitsPerPage=3

### Add OpenSearch to your website

```xml
<OpenSearchDescription
  xmlns="http://a9.com/-/spec/opensearch/1.1/"
  xmlns:moz="http://www.mozilla.org/2006/browser/search/"
>
  <!-- ... -->
  <!-- Replace the query parameters with your Algolia credentials -->
  <Url
    type="application/x-suggestions+json"
    template="https://algolia-opensearch-suggestions.netlify.app/.netlify/functions/suggestions?query={searchTerms}&amp;&appId=latency&amp;apiKey=6be0576ff61c053d5f9a3225e2a90f76&amp;indexName=instant_search_demo_query_suggestions&amp;hitsPerPage=10"
  />
</OpenSearchDescription>
```

<div align="center">

###### `opensearch.xml`

</div>

```html
<html>
  <head>
    <link
      rel="search"
      type="application/opensearchdescription+xml"
      href="opensearch.xml"
      title="Search app"
    />
    <!-- ... -->
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

<div align="center">

###### `index.html`

</div>

## Note

This app is hosted on a Netlify plan that offers 125K function endpoint requests per month or 100 hours of function run time per month. I recommend forking this project and hosting it on your own lambda/server to not overuse this service.

## Resources

- [OpenSearch Description Format](https://developer.mozilla.org/en-US/docs/Web/OpenSearch)
- [OpenSearch Suggestions](https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Supporting_search_suggestions_in_search_plugins)
- [OpenSearch Specs](https://github.com/dewitt/opensearch/blob/c9ed38a524c53b61d582634b28e5e83af9f8f8ae/opensearch-1-1-draft-6.md)

## License

[MIT](LICENSE)
