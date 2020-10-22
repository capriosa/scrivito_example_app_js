import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('BlockquoteWidget', {
  title: 'Blockquote',

  attributes: {
    alignment: {
      title: 'Alignment',
      description: 'Default: Left',
      values: [
        { value: 'left', title: 'Left' },
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
