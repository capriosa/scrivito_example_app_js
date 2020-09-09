import * as Scrivito from 'scrivito'

const BlockquoteWidget = Scrivito.provideWidgetClass('BlockquoteWidget', {
  attributes: {
    quote: 'html',
    author: 'string',
    alignment: ['enum', { values: ['left', 'right'] }]
  }
})

export default BlockquoteWidget
