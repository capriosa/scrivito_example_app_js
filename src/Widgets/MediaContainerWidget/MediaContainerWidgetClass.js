import * as Scrivito from 'scrivito'

const MediaContainerWidget = Scrivito.provideWidgetClass('MediaContainerWidget', {
  attributes: {
    content: 'widgetlist',
    alignImage: ['enum', { values: ['top', 'middle', 'bottom'] }],
    mediaImage: 'reference',
    link: 'link'
  }
})

export default MediaContainerWidget
