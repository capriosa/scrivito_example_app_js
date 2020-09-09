import * as Scrivito from 'scrivito'

const ReferencesWidget = Scrivito.provideWidgetClass('ReferencesWidget', {

  attributes: {
    headline: 'string',
    pageType: ['enum', { values: ['Page', 'Event', 'BlogPost'] }]
  }
})

export default ReferencesWidget
