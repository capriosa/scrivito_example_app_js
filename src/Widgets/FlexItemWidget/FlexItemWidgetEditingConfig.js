import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('FlexItemWidget', {
  title: 'FlexItem',
  attributes: {
    flexRel: {
      title: 'Width of item',
      description:
        'With of item in relation to the other items. 1 (Default) means all items will have the same with. 2 means this item is twice as large as items with Flex 1.'

    },
    width: {
      title: 'Width eg. Flex Basis',
      description:
        'The basis width of items. (e.g. 30%)'

    },
    order: {
      title: 'Order',
      description:
        'Input: Number of order.'

    },
    alignSelf: {
      title: 'Align Self',
      description:
        'Control the vertical alignment of this item.',
      values: [
        { value: 'flex-start', title: 'Start' },
        { value: 'flex-end', title: 'End' },
        { value: 'center', title: 'Center' },
        { value: 'baseline', title: 'Baseline' },
        { value: 'stretch', title: 'Stretch' }

      ]

    }

  },
  properties: ['flexRel', 'width', 'order', 'alignSelf']
})
