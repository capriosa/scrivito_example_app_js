import * as Scrivito from 'scrivito'
import { string } from 'prop-types'

const AreaChartWidget = Scrivito.provideWidgetClass('AreaChartWidget', {
  attributes: {
    items: ['widgetlist', { only: 'AreaChartItemWidget' }],
    type: ['enum', {
      values: ['simple',
        'stacked'

      ]
    }],
    label1: 'string',
    label2: 'string'

  }
})

export default AreaChartWidget
