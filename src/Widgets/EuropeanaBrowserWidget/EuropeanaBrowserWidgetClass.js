import * as Scrivito from 'scrivito'
import { string } from 'prop-types'

const EuropeanaBrowserWidget = Scrivito.provideWidgetClass('EuropeanaBrowserWidget', {
  attributes: {
    image: 'string',
    title: 'string',
    country: 'string',
    provider: 'string',
    creator: 'string',
    keyword: 'string',
    description: 'string',

  }
})

export default EuropeanaBrowserWidget
