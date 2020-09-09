import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('OverlayWidget', {
  title: 'Overlay',
  attributes: {
    label: {
      title: 'Button label',
      description: 'Default: "Show overlay"'
    },
    style: {
      title: 'Button background color',
      description: 'Default: Primary color',
      values: [
        { value: 'btn-primary', title: 'Primary color' },
        { value: 'btn-secondary', title: 'Secondary color' },
        { value: 'btn-info', title: 'White color' }
      ]
    }
  },
  properties: [
    'label',
    'style'
  ],
  initialContent: {
    label: 'Show overlay',
    style: 'btn-primary'
  }
})
