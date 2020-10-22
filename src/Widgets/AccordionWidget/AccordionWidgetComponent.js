import * as React from 'react'
import * as Scrivito from 'scrivito'
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion'

Scrivito.provideComponent('AccordionWidget', ({ widget }) => {
  const items = widget.get('items')
  const data = items.map((item) => {
    const obj = ({ name: item.get('text')})
    return obj
  })

  if (!items.length) {
    return (
      <InPlaceEditingPlaceholder center>
        Create Accordion Items in widget properties.
      </InPlaceEditingPlaceholder>
    )
  }

  const list = items.map((item, index) =>
    <AccordionItem key={index}>
      <AccordionItemTitle>
        <h3>{item.get('title')}</h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        {item.map((e,index) => <p>{e.item.get('text')}</p>)}
      </AccordionItemBody>
    </AccordionItem>
  )

  return (
    <Accordion>
      {list}
    </Accordion>
  )
}
)
