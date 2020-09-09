import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('EuropeanaWidget', {
  title: 'Europeana',
  attributes: {
    keyword: {
      title: 'Keyword'
    },
    entries: {
      title: 'Entries'
    },
    start: {
      title: 'Start at'
    },

    category: {
      title: 'Category',
      values: [
        { value: 'photography', title: 'Photography' },
        { value: 'art', title: 'Art' },
        { value: 'drawing', title: 'Drawings' },
        { value: 'painting', title: 'Paintings' }

      ]
    }

  },

  properties: [
    'keyword',
    'entries',
    'category',
    'start'
  ],

  initialContent: {
    category: 'photography',
    entries: '5',
    start: '1'
  }
})
