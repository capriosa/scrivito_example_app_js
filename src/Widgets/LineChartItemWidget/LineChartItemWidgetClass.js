import * as Scrivito from 'scrivito'

const LineChartItemWidget = Scrivito.provideWidgetClass('LineChartItemWidget', {
  onlyInside: 'LineChartWidget',
  attributes: {
    name: 'string',
    value1: 'string',
    value2: 'string'

  }
})

export default LineChartItemWidget
