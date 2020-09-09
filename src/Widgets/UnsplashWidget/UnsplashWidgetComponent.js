import * as React from 'react';
import * as Scrivito from 'scrivito';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';


Scrivito.provideComponent('UnsplashWidget', ({ widget }) => {
    if (!widget.get('image')) {
        return (
        <InPlaceEditingPlaceholder>
          <>
          Select an image from Unsplash in the widget properties.
          <Scrivito.ContentTag className='div' content={widget} attribute='keyword' />
          </>
        </InPlaceEditingPlaceholder>
        )
      }

  return (
        <div>
        <img src={widget.get('image')} />
        </div>
    )
  })

