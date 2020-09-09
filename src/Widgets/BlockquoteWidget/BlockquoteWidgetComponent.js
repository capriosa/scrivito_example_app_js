import * as React from 'react'
import { Card, CardBody } from 'reactstrap'
import * as Scrivito from 'scrivito'

Scrivito.provideComponent('BlockquoteWidget', ({ widget }) => {
  const classNames = []
  if (widget.get('alignment')) {
    classNames.push(`text-${widget.get('alignment')}`)
    classNames.push(`border-${widget.get('alignment')}`)
    classNames.push(`padding-${widget.get('alignment')}`)
  }

  return (

    <Card>
      <CardBody>
        <blockquote className={classNames.join(' ') + ' blockquote mb-0'}>
          <Scrivito.ContentTag
            tag='p'
            className='mb-2'
            content={widget}
            attribute='quote'
          />
          <Scrivito.ContentTag
            tag='footer'
            className='blockquote-footer'
            content={widget}
            attribute='author'
          />
        </blockquote>
      </CardBody>
    </Card>
  )
})
