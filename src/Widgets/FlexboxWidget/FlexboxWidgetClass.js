import * as Scrivito from 'scrivito'

const FlexboxWidget = Scrivito.provideWidgetClass('FlexboxWidget', {
  attributes: {
    body: 'widgetlist',
    direction: ['enum', { values: ['horizontal', 'vertical', 'horizontal-reverse', 'vertical-reverse'] }],
    wrap: ['enum', { values: ['wrap', 'reverse', 'no-wrap'] }],
    justifyContent: ['enum', { values: ['start', 'end', 'center', 'between', 'around'] }],
    alignContent: ['enum', { values: ['start', 'end', 'center', 'around', 'stretch'] }],
    alignItems: ['enum', { values: ['start', 'end', 'center', 'baseline', 'stretch'] }]

  }
})

export default FlexboxWidget
