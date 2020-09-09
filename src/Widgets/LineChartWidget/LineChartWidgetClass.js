import * as Scrivito from 'scrivito'

const LineChartWidget = Scrivito.provideWidgetClass('LineChartWidget', {
  attributes: {
    items: ['widgetlist', { only: 'LineChartItemWidget' }],
    type: ['enum', {
      values: ['dashed',
        'withRefLines',
        'vertical'

      ]
    }],
    label1: 'string',
    label2: 'string'

  }
})

export default LineChartWidget
