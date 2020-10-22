import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('AreaChartWidget', {
  title: 'Area Chart',

  attributes: {

    type: {
      title: 'Area Chart Type',
      description: 'Default: Simple Area Chart',
      values: [
        { value: 'simple', title: 'Simple Areas' },
        { value: 'stacked', title: 'Stacked Areas' }

      ]
    },
    label1: {
      title: 'Value for label 1'
    },
    label2: {
      title: 'Value for label 2'
    },
    items: {
      title: 'Area Values'
    }
  },
  properties: [
    'type',
    'label1',
    'label2',
    'items'
  ]
})
