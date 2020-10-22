import * as Scrivito from 'scrivito'

const ArticleHeaderWidget = Scrivito.provideWidgetClass('ArticleHeaderWidget', {
  attributes: {
    headline: 'string',
    text: 'html',
    alignment: ['enum', { values: ['left', 'center', 'right'] }]
  }
})

export default ArticleHeaderWidget
