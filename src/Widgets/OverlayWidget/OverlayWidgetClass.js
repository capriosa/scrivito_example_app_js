import * as Scrivito from 'scrivito'

const OverlayWidget = Scrivito.provideWidgetClass('OverlayWidget', {
  attributes: {
    content: 'widgetlist',
    label: 'string',
    style: ['enum', { values: ['btn-primary', 'btn-secondary', 'btn-info'] }]
  }
})

export default OverlayWidget
