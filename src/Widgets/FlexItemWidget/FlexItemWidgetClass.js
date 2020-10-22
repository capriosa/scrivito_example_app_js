import * as Scrivito from 'scrivito'

const FlexItemWidget = Scrivito.provideWidgetClass('FlexItemWidget', {
  attributes: {
    body: 'widgetlist',
    flexRel: 'string',
    width: 'string',
    order: 'string',
    alignSelf: ['enum', { values: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'] }]
  }
})

export default FlexItemWidget
