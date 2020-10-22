import * as Scrivito from 'scrivito'

const RangeSliderGroupWidget = Scrivito.provideWidgetClass('RangeSliderGroupWidget', {
  attributes: {
    items: ['widgetlist', { only: 'RangeSliderWidget' }]

  }
})

export default RangeSliderGroupWidget
