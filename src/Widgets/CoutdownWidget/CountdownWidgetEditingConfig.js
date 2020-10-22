import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('CountdownWidget', {
  title: 'Countdown',
  attributes: {

    date: {
      title: 'Date'

    }
  },
  properties: [
    'date'
  ]

})
