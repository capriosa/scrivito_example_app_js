import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('BarChartItemWidget', {
  title: 'Bar values',
  attributes: {

    name: {
      title: 'Name'
    },

    value1: {
      title: 'Value for label 1'
    },
    value2: {
      title: 'Value for label 2'
    },
    value3: {
      title: 'Value for label 3'
    }

  },
  properties: [
    'name',
    'value1',
    'value2',
    'value3'

  ]

})
