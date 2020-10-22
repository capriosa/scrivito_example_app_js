import * as Scrivito from 'scrivito'

const BarChartWidget = Scrivito.provideWidgetClass('BarChartWidget', {
  attributes: {
    items: ['widgetlist', { only: 'BarChartItemWidget' }],
    label1: 'string',
    label2: 'string',
    label3: 'string',
    type: ['enum', {
      values: ['stacked',
        'mixed',
        'biaxial'

      ]
    }]

  }
})

export default BarChartWidget
