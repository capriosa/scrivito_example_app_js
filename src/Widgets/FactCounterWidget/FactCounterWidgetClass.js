import * as Scrivito from 'scrivito'

const FactCounterWidget = Scrivito.provideWidgetClass('FactCounterWidget', {
  attributes: {
    key: 'string',
    value: 'string',
    postfix: 'string',
    speed: ['enum', { values: ['150', '200', '100'] }],
    animation: [
      'enum',
      {
        values: [
          'none',
          'fadeInLeft',
          'fadeInRight',
          'fadeInDown',
          'fadeInUp',
          'zoomIn'
        ]
      }
    ]
  }
})

export default FactCounterWidget
