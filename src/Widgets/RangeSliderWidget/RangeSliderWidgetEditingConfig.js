import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('RangeSliderWidget', {
  title: 'Range values',
  attributes: {
    headline: {
      title: 'Title'
    },
    min: {
      title: 'Minimum'
    },

    max: {
      title: 'Maximum'
    },
    baseEntity: {
      title: 'Base Entity'
    },
    targetEntity: {
      title: 'Target Entity'
    },
    factor: {
      title: 'Factor'
    }

  },
  properties: [
    'headline',
    'min',
    'max',
    'baseEntity',
    'targetEntity',
    'factor'
  ]

})
