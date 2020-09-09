import * as Scrivito from 'scrivito'

const CountdownWidget = Scrivito.provideWidgetClass('CountdownWidget', {
  attributes: {
    date: 'date'
  }
})

export default CountdownWidget
