import * as React from 'react'
import * as Scrivito from 'scrivito'

Scrivito.provideComponent('FlexItemWidget', ({ widget }) => {
  const flexRel = widget.get('flexRel')
  const width = widget.get('width')
  const order = widget.get('order')
  const alignSelf = widget.get('alignSelf')

  return (
    <Scrivito.WidgetTag style={{ flex: flexRel, flexBasis: width, order: order, alignSelf: alignSelf, marginRight: '1px' }}>
      <Scrivito.ContentTag content={widget} className='flex-item' attribute='body' />
    </Scrivito.WidgetTag>
  )
})
