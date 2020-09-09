import * as React from 'react'
import * as Scrivito from 'scrivito'
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'

Scrivito.provideComponent('TeaserReferenceWidget', ({ widget }) => {
  const teaser = widget.get('page')

  if (!teaser) {
    return (

      <InPlaceEditingPlaceholder>
          Provide a reference to a page in the widget properties.
      </InPlaceEditingPlaceholder>

    )
  }

  return (
    <div className='text-center teaser-ref'>
      <Scrivito.LinkTag to={teaser}>
        <Scrivito.ImageTag content={teaser} attribute='titleImage' className='img-fluid' alt='Bild von einer zum Thema passenden Seite'/>
        <div>
          <Scrivito.ContentTag tag='h3' className='h4 m-0 p-0' content={teaser} attribute='title' />
          <Scrivito.ContentTag tag='h4' className='h5 m-0 p-0' content={teaser} attribute='subtitle' />
        </div>
      </Scrivito.LinkTag>
    </div>
  )
})
