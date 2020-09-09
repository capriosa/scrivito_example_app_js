import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('FactCounterWidget', {
  title: 'Fact Counter',
  attributes: {
    key: {
      title: 'Key'
    },
    value: {
      title: 'Value'
    },
    postfix: {
      title: 'Postfix'
    },
    speed: {
      title: 'Speed',
      values: [
        { value: '150', title: 'Normal' },
        { value: '200', title: 'Slow' },
        { value: '100', title: 'Fast' }
      ]
    },
    animation: {
      title: 'Animation',
      description: 'The animation to perform as this image becomes visible. Default: None',
      values: [
        { value: 'none', title: 'None' },
        { value: 'fadeInLeft', title: 'Left to center' },
        { value: 'fadeInRight', title: 'Right to center' },
        { value: 'fadeInDown', title: 'Top to center' },
        { value: 'fadeInUp', title: 'Bottom to center' },
        { value: 'zoomIn', title: 'Zoom in' }
      ]
    }

  },

  properties: [
    'key',
    'value',
    'postfix',
    'speed',
    'animation'
  ],

  initialContent: {
    key: 'Lorem ipsum',
    value: '12',
    postfix: 'Jahre',
    animation: 'none'
  }
})
