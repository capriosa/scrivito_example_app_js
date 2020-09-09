import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('ArticleHeaderWidget', {
  title: 'Arcticle Header',

  attributes: {
    alignment: {
      title: 'Alignment',
      description: 'Default: Left',
      values: [
        { value: 'left', title: 'Left' },
        { value: 'center', title: 'Center' },
        { value: 'right', title: 'Right' }
      ]
    }
  },
  properties: [
    'alignment'
  ],
  initialContent: {
    alignment: 'left'
  }
})
