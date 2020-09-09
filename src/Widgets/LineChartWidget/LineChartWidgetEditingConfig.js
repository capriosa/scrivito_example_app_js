import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('LineChartWidget', {
  title: 'Line Chart',

  attributes: {

    type: {
      title: 'Line Chart Type',
      description: 'Default: Simple Line Chart',
      values: [
        { value: 'dashed', title: 'Dashed Lines' },
        { value: 'withRefLines', title: 'With Reference Line' },
        { value: 'vertical', title: 'Vertical' }

      ]
    },
    label1: {
      title: 'Value for label 1'
    },
    label2: {
      title: 'Value for label 2'
    },
    items: {
      title: 'Line Values'
    }
  },
  properties: [
    'type',
    'label1',
    'label2',
    'items'
  ]
})
