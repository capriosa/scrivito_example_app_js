import * as Scrivito from 'scrivito'

const AreaChartItemWidget = Scrivito.provideWidgetClass('AreaChartItemWidget', {
  onlyInside: 'AreaChartWidget',
  attributes: {
    name: 'string',
    value1: 'string',
    value2: 'string'

  }
})

export default AreaChartItemWidget
