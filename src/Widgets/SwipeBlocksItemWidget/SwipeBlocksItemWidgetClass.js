import * as Scrivito from 'scrivito'

const SwipeBlocksItemWidget = Scrivito.provideWidgetClass('SwipeBlocksItemWidget', {
  onlyInside: 'SwipeBlocksWidget',
  attributes: {
    content: 'widgetlist'
  }
})

export default SwipeBlocksItemWidget
