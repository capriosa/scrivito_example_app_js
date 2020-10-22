import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('ContentTeaserListWidget', {
  title: 'Content teaser list (aggregated)',
  attributes: {
    count: {
      title: 'Number of records',
      description: 'Default: 6'
    },
    pageType: {
      title: 'Page Type',
      description: 'Default: Blog-Post',
      values: [
        { value: 'BlogPost', title: 'Blog' },
        { value: 'Event', title: 'Event' },
        { value: 'Job', title: 'Job' }

      ]
    }

  },
  properties: [
    'pageType',
    'count'
  ],
  initialContent: {
    count: 6,
    pageType: 'BlogPost'
  }
})
