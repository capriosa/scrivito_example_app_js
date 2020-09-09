import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('FlexboxWidget', {
  title: 'Flexbox',
  attributes: {
    direction: {
      title: 'Direction of items in a flexbox',
      description:
        'Display the flex items horizontally (side by side) or vertically (on top of each other). Reverse will change the order.',
      values: [
        { value: 'horizontal', title: 'Horizontal' },
        { value: 'vertical', title: 'Vertical' },
        { value: 'horizontal-reverse', title: 'Horizontal reverse' },
        { value: 'vertical-reverse', title: 'Vertical reverse' }
      ]
    },
    wrap: {
      title: 'Wrap items',
      description: 'Control how flex items wrap in a flex container.',
      values: [
        { value: 'wrap', title: 'Wrap' },
        { value: 'reverse', title: 'Reverse wrap' },
        { value: 'no-wrap', title: 'No wrap' }
      ]
    },
    justifyContent: {
      title: 'Justify content',
      description:
        'Control the alignment of flex items.',
      values: [
        { value: 'start', title: 'Start' },
        { value: 'end', title: 'End' },
        { value: 'center', title: 'Center' },
        { value: 'between', title: 'Between' },
        { value: 'around', title: 'Around' }

      ]
    },
    alignContent: {
      title: 'Vertical alignment',
      description:
        'Control the vertical alignment of gathered flex items. This has no effect on single rows of flex items.',
      values: [
        { value: 'start', title: 'Start' },
        { value: 'end', title: 'End' },
        { value: 'center', title: 'Center' },
        { value: 'around', title: 'Around' },
        { value: 'stretch', title: 'Stretch' }

      ]
    },
    alignItems: {
      title: 'Vertical alignment (single row)',
      description:
        'Control the vertical alignment of single rows of flex items.',
      values: [
        { value: 'start', title: 'Start' },
        { value: 'end', title: 'End' },
        { value: 'center', title: 'Center' },
        { value: 'baseline', title: 'Baseline' },
        { value: 'stretch', title: 'Stretch' }

      ]
    }

  },
  properties: ['direction', 'wrap', 'justifyContent', 'alignItems', 'alignContent']
})
