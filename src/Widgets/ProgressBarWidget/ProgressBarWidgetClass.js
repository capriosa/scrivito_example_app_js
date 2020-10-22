import * as Scrivito from 'scrivito'

const ProgressBarWidget = Scrivito.provideWidgetClass('ProgressBarWidget', {
  attributes: {
    percent: 'integer',
    type: ['enum', { values: ['bar', 'circle'] }],
    status: ['enum', { values: ['success', 'active', 'error'] }]

  }
})

export default ProgressBarWidget
