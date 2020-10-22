import * as Scrivito from 'scrivito'

const EuropeanaWidget = Scrivito.provideWidgetClass('EuropeanaWidget', {
  attributes: {
    keyword: 'string',
    entries: 'string',
    start: 'string',
    category: ['enum', { values: ['photography', 'art', 'drawing', 'painting'] }]
  }
})

export default EuropeanaWidget
