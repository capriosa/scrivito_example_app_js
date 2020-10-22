import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('AccordionItemWidget', {
  title: 'Accordion Item',
  attributes: {

    title: {
      title: 'Title'
    },
    text: {
      title: 'Text'
    }

  },
  properties: [
    'title',
    'text'
  ]

})
