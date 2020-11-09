import * as Scrivito from 'scrivito'

const SlideSectionWidget = Scrivito.provideWidgetClass('SlideSectionWidget', {
  attributes: {
    firstImage: ['reference', { only: ['Image'] }],
    firstTitle: 'link',
    midImage: ['reference', { only: ['Image'] }],
    midTitle: 'link',
    lastImage: ['reference', { only: ['Image'] }],
    lastTitle: 'link',
    text: 'html',
    backgroundColor: [
      'enum',
      {
        values: [
          'aqua',
          'brown',
          'beige',
          'crimson',
          'deeppink',
          'deepskyblue',
          'darkviolet',
          'green',
          'ghostwhite',
          'hotpink',
          'indigo',
          'khaki',
          'lawngreen',
          'magenta',
          'maroon',
          'navy',
          'olive',
          'purple',
          'red',
          'royalblue',
          'saddlebrown',
          'slateblue',
          'violet',
          'yellow'
        ]
      }
    ]
  }
})

export default SlideSectionWidget
