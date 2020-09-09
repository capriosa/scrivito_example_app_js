import * as React from 'react'
import * as Scrivito from 'scrivito'
import ReactMomentCountDown from 'react-moment-countdown'
import moment from 'moment'
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'

Scrivito.provideComponent('CountdownWidget', ({ widget }) => {
  const dateInFuture = moment(widget.get('date'), 'YYYY-MM-DD')

  if (!dateInFuture.length) {
    return (
      <InPlaceEditingPlaceholder center>
        Create Accordion Items in widget properties.
      </InPlaceEditingPlaceholder>
    )
  }

  return (
    <ReactMomentCountDown toDate={dateInFuture} targetFormatMask='DD:HH:mm:ss' />
  )
})
