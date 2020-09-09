import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('LineChartItemWidget', {
  title: 'Line values',
  attributes: {

    name: {
      title: 'Name'
    },

    value1: {
      title: 'Value for label 1'
    },
    value2: {
      title: 'Value for label 2'
    }

  },
  properties: [
    'name',
    'value1',
    'value2'

  ]

})
