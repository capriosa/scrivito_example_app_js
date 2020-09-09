import * as Scrivito from 'scrivito'

const MasonryWidget = Scrivito.provideWidgetClass('MasonryWidget', {
  onlyInside: 'MasonryContainerWidget',
  attributes: {
    colSize: 'integer',
    content: 'widgetlist'
  }
})

export default MasonryWidget
