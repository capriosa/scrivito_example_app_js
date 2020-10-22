import * as Scrivito from 'scrivito'

const CardWidget = Scrivito.provideWidgetClass('CardWidget', {
  attributes: {
    body: 'widgetlist',
    useOffset: ['enum', { values: ['yes', 'no'] }],
    useGradient: ['enum', { values: ['yes', 'no'] }],
    shadow: ['enum', { values: ['no', 'small', 'large'] }],
    border: ['enum', { values: ['yes', 'no'] }],
    backgroundColor: [
      'enum',
      {
        values: [
          'white',
          'greywhite',
          'greylight',
          'greymiddle',
          'greydark',
          'primary',
          'secondary',
          'accent',
          'dark-color',
          'light-color',
          'transparent'

        ]
      }
    ]
  }
})

export default CardWidget
