import * as React from 'react';
import * as Scrivito from 'scrivito';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';


Scrivito.provideComponent('EuropeanaBrowserWidget', ({ widget }) => {
    if (!widget.get('image')) {
        return (
          <>
        <InPlaceEditingPlaceholder>
          Select an image from Europeana in the widget properties.
        </InPlaceEditingPlaceholder>
        <Scrivito.ContentTag className='div' content={widget} attribute='entries' />
        <Scrivito.ContentTag className='div' content={widget} attribute='keyword' />
        </>
        )
      }

  return (
        <div>

        <img src={widget.get('image')} />
        <h2 className="h3">{widget.get('title')}</h2>
        {widget.get('country')}<br/>
        {widget.get('provider')}<br/>
        {widget.get('creator')}<p>
        {widget.get('description')}
        </p>
        </div>
    )
  })


