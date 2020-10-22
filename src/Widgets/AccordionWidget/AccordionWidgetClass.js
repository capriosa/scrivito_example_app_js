import * as Scrivito from 'scrivito'

const AccordionWidget = Scrivito.provideWidgetClass('AccordionWidget', {
  attributes: {
    items: ['widgetlist', { only: 'AccordionItemWidget' }]

  }
})

export default AccordionWidget
