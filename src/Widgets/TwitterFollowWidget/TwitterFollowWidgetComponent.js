import * as React from 'react'
import * as Scrivito from 'scrivito'
import { TwitterFollowButton } from 'react-twitter-embed'

Scrivito.provideComponent('TwitterFollowWidget', ({ widget }) => {
  const twitter = widget.get('twitter')

  /* if (!twitter.length) {
    return (
      <InPlaceEditingPlaceholder center={ true }>
        Create Twitter follow button in widget properties.
      </InPlaceEditingPlaceholder>
    );
  } */

  return (
    <TwitterFollowButton
      screenName={twitter}
    />
  )
})
