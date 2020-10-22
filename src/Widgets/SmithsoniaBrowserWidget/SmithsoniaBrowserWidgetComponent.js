import * as React from 'react';
import * as Scrivito from 'scrivito';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';


Scrivito.provideComponent('SmithsoniaBrowserWidget', ({ widget }) => {
  if (!widget.get('image')) {
    return (
      <>
        <InPlaceEditingPlaceholder>
          Select an image from Smithsonia in the widget properties.
        </InPlaceEditingPlaceholder>

        <Scrivito.ContentTag className='div' content={widget} attribute='keyword' />
      </>
    )
  }

  return (
    <div>

      <img src={widget.get('image')}
        style={{
          filter: `${widget.get('filter')}(${widget.get('percent')}%)`
        }}
      />


    </div>
  )
})


/*Title: {widget.get('title') && <h2 className="h3">{widget.get('title')}</h2>}
        Source: {widget.get('source') && widget.get('source')}<br/>
        Name: {widget.get('name') && widget.get('name')}<br/>
        Notes: {widget.get('notes') && widget.get('notes')}<br/>
        Country: {widget.get('country') && widget.get('country')}<br/>
        Provider: {widget.get('provider') && widget.get('provider')}<br/>
        <p>
        {widget.get('description') && widget.get('description')}
        </p>*/