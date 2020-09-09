import * as Scrivito from 'scrivito'

const RangeSliderWidget = Scrivito.provideWidgetClass('RangeSliderWidget', {
  onlyInside: 'RangeSliderGroupWidget',
  attributes: {
    headline: 'string',
    min: 'float',
    max: 'integer',
    baseEntity: 'string',
    targetEntity: 'string',
    factor: 'string'
  }
})

export default RangeSliderWidget
