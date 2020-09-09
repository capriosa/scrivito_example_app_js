import * as Scrivito from 'scrivito'

const CollabsibleCardWidget = Scrivito.provideWidgetClass('CollabsibleCardWidget', {
  attributes: {
    icon: 'reference',
    headline: 'string',
    teaser: 'html',
    body: 'widgetlist'
  }
})

export default CollabsibleCardWidget
