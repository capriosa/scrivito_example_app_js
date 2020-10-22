import * as React from 'react'
import * as Scrivito from 'scrivito'


Scrivito.provideComponent('AlertWidget', ({ widget }) => (
  <Scrivito.WidgetTag tag='div' className={`alert ${widget.get('color' || 'alert-primary')}`}>

    <Scrivito.ContentTag tag='h4' className='alert-heading h3' content={widget} attribute='title' />
    <Scrivito.ContentTag tag='p' content={widget} attribute='text' />
    {widget.get('additionalText') && <hr />}
    <Scrivito.ContentTag tag='p' className='mb-0' content={widget} attribute='additionalText' />

  </Scrivito.WidgetTag>
))
