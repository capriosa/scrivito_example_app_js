import * as React from 'react'
import * as Scrivito from 'scrivito'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'

Scrivito.provideComponent('TwitterComponentsWidget', ({ widget }) => {
  const twitter = widget.get('twitter')

  if (!twitter.length) {
    return (
      <InPlaceEditingPlaceholder center>
        Create Twitter timeline in widget properties.
      </InPlaceEditingPlaceholder>
    )
  }

  return (
    <TwitterTimelineEmbed
      sourceType='profile'
      screenName={twitter}
      options={{ height: 400 }}
    />
  )
})
