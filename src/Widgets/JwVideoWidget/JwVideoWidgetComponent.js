import * as React from 'react'
import * as Scrivito from 'scrivito'
import JWPlayer from 'react-jwplayer'
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'

Scrivito.provideComponent('JwVideoWidget', ({ widget }) => {
  const videoId = widget.get('src')
  // const video = 'https://content.jwplatform.com/players/' + videoId + '.js';

  if (!videoId.length) {
    return (
      <InPlaceEditingPlaceholder center>
        Enter JW-Video ID in the widget properties.
      </InPlaceEditingPlaceholder>
    )
  }

  return (
    <div>
      <JWPlayer videoId={`${videoId}`} />

    </div>
  )
})
