import * as Scrivito from 'scrivito'

const ContentTeaserListWidget = Scrivito.provideWidgetClass('ContentTeaserListWidget', {

  attributes: {

    pageType: ['enum', { values: ['BlogPost', 'Event', 'Job'] }],
    count: 'integer'
  }
})

export default ContentTeaserListWidget
