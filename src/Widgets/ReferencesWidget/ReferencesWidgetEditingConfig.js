import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('ReferencesWidget', {
  title: 'Seitenliste',
  attributes: {

    pageType: {
      title: 'Page Type',
      description: 'Default: Page',
      values: [
        { value: 'Page', title: 'Page' },
        { value: 'BlogPost', title: 'Blog-Post' },
        { value: 'Event', title: 'Event' }

      ]
    }

  },
  properties: [
    'pageType'

  ],
  initialContent: {
    headline: 'Lorem Ipsum',
    pageType: 'Page'
  }
})
