import * as Scrivito from 'scrivito'

const FloatImageWidget = Scrivito.provideWidgetClass('FloatImageWidget', {
  attributes: {
    image: ['reference', { only: 'Image' }],
    text: 'html',
    alignment: ['enum', { values: ['left', 'center', 'right'] }],
    float: ['enum', { values: ['none', 'left', 'right'] }],
    alternativeText: 'string',
    link: 'link',
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
    ],
    form: [
      'enum',
      {
        values: [
          'triangle',
          'trapezoid',
          'parallelogram',
          'rhombus',
          'pentagon',
          'hexagon',
          'heptagon',
          'octagon',
          'nonagon',
          'decagon',
          'bevel',
          'rabbet',
          'left-arrow',
          'right-arrow',
          'left-point',
          'right-point',
          'left-chevron',
          'right-chevron',
          'star',
          'cross',
          'message',
          'close',
          'frame'
        ]
      }
    ]
  }
})

export default FloatImageWidget
