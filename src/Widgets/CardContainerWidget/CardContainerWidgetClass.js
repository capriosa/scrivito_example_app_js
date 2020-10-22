import * as Scrivito from 'scrivito'

const CardContainerWidget = Scrivito.provideWidgetClass('CardContainerWidget', {
  attributes: {
    content: 'widgetlist',
    containerType: ['enum', { values: ['deck', 'group'] }]

  }
})

export default CardContainerWidget
