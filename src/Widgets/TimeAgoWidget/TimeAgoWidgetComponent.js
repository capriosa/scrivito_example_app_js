import * as React from 'react'
import * as Scrivito from 'scrivito'
import TimeAgo from 'react-timeago'
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'

Scrivito.provideComponent('TimeAgoWidget', ({ widget }) => {
  const date = widget.get('date')

  if (!date.length) {
    return (
      <InPlaceEditingPlaceholder center>
        Add a date in widget properties.
      </InPlaceEditingPlaceholder>
    )
  }

  return (
    <TimeAgo date={date} />
  )
})
