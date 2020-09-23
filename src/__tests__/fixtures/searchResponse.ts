export const searchResponse = {
  results: [
    {
      hits: [
        {
          instant_search: {
            exact_nb_hits: 79,
            facets: {
              exact_matches: {
                categories: [
                  {
                    value: 'Computers & Tablets',
                    count: 52,
                  },
                  {
                    value: 'Tablets',
                    count: 23,
                  },
                ],
                'hierarchicalCategories.lvl0': [
                  {
                    value: 'Computers & Tablets',
                    count: 52,
                  },
                ],
                'hierarchicalCategories.lvl1': [
                  {
                    value: 'Computers & Tablets > Tablets',
                    count: 23,
                  },
                ],
                'hierarchicalCategories.lvl2': [
                  {
                    value: 'Computers & Tablets > Tablets > All Tablets',
                    count: 22,
                  },
                ],
              },
              analytics: {
                categories: [],
                'hierarchicalCategories.lvl0': [],
                'hierarchicalCategories.lvl1': [],
                'hierarchicalCategories.lvl2': [],
              },
            },
          },
          nb_words: 1,
          popularity: 389,
          query: 'amazon',
          objectID: 'amazon',
          _highlightResult: {
            query: {
              value: 'amazon',
              matchLevel: 'none',
              matchedWords: [],
            },
          },
        },
        {
          instant_search: {
            exact_nb_hits: 260,
            facets: {
              exact_matches: {
                categories: [
                  {
                    value: 'Appliances',
                    count: 252,
                  },
                  {
                    value: 'Ranges, Cooktops & Ovens',
                    count: 229,
                  },
                ],
                'hierarchicalCategories.lvl0': [
                  {
                    value: 'Appliances',
                    count: 252,
                  },
                ],
                'hierarchicalCategories.lvl1': [
                  {
                    value: 'Appliances > Ranges, Cooktops & Ovens',
                    count: 229,
                  },
                ],
                'hierarchicalCategories.lvl2': [
                  {
                    value: 'Appliances > Ranges, Cooktops & Ovens > Cooktops',
                    count: 137,
                  },
                ],
              },
              analytics: {
                categories: [],
                'hierarchicalCategories.lvl0': [],
                'hierarchicalCategories.lvl1': [
                  {
                    attribute: 'hierarchicalCategories.lvl1',
                    operator: ':',
                    value: 'Appliances > Ranges, Cooktops & Ovens',
                    count: 417,
                  },
                ],
                'hierarchicalCategories.lvl2': [],
              },
            },
          },
          nb_words: 1,
          popularity: 275,
          query: 'cooktop',
          objectID: 'cooktop',
          _highlightResult: {
            query: {
              value: 'cooktop',
              matchLevel: 'none',
              matchedWords: [],
            },
          },
        },
        {
          instant_search: {
            exact_nb_hits: 151,
            facets: {
              exact_matches: {
                categories: [
                  {
                    value: 'Computers & Tablets',
                    count: 142,
                  },
                  {
                    value: 'Laptop Accessories',
                    count: 106,
                  },
                ],
                'hierarchicalCategories.lvl0': [
                  {
                    value: 'Computers & Tablets',
                    count: 142,
                  },
                ],
                'hierarchicalCategories.lvl1': [
                  {
                    value: 'Computers & Tablets > Laptop Accessories',
                    count: 106,
                  },
                ],
                'hierarchicalCategories.lvl2': [
                  {
                    value:
                      'Computers & Tablets > Laptop Accessories > Laptop Bags & Cases',
                    count: 88,
                  },
                ],
              },
              analytics: {
                categories: [],
                'hierarchicalCategories.lvl0': [],
                'hierarchicalCategories.lvl1': [],
                'hierarchicalCategories.lvl2': [],
              },
            },
          },
          nb_words: 1,
          popularity: 173,
          query: 'macbook',
          objectID: 'macbook',
          _highlightResult: {
            query: {
              value: 'macbook',
              matchLevel: 'none',
              matchedWords: [],
            },
          },
        },
        {
          instant_search: {
            exact_nb_hits: 116,
            facets: {
              exact_matches: {
                categories: [
                  {
                    value: 'Cell Phones',
                    count: 54,
                  },
                  {
                    value: 'Cell Phone Accessories',
                    count: 41,
                  },
                ],
                'hierarchicalCategories.lvl0': [
                  {
                    value: 'Cell Phones',
                    count: 54,
                  },
                ],
                'hierarchicalCategories.lvl1': [
                  {
                    value: 'Cell Phones > Cell Phone Accessories',
                    count: 41,
                  },
                ],
                'hierarchicalCategories.lvl2': [
                  {
                    value:
                      'Cell Phones > Cell Phone Accessories > Cell Phone Cases & Clips',
                    count: 29,
                  },
                ],
              },
              analytics: {
                categories: [],
                'hierarchicalCategories.lvl0': [
                  {
                    attribute: 'hierarchicalCategories.lvl0',
                    operator: ':',
                    value: 'Cell Phones',
                    count: 1,
                  },
                ],
                'hierarchicalCategories.lvl1': [],
                'hierarchicalCategories.lvl2': [],
              },
            },
          },
          nb_words: 1,
          popularity: 150,
          query: 'google',
          objectID: 'google',
          _highlightResult: {
            query: {
              value: 'google',
              matchLevel: 'none',
              matchedWords: [],
            },
          },
        },
      ],
      nbHits: 1921,
      page: 0,
      nbPages: 250,
      hitsPerPage: 4,
      exhaustiveNbHits: true,
      query: 'query',
      params:
        'query=query&hitsPerPage=4&highlightPreTag=%3Cmark%3E&highlightPostTag=%3C%2Fmark%3E',
      index: 'instant_search_demo_query_suggestions',
      processingTimeMS: 1,
    },
  ],
};
