import * as Scrivito from 'scrivito'

const BarChartItemWidget = Scrivito.provideWidgetClass('BarChartItemWidget', {
  onlyInside: 'BarChartWidget',
  attributes: {
    name: 'string',
    value1: 'string',
    value2: 'string',
    value3: 'string'

  }
})

export default BarChartItemWidget
