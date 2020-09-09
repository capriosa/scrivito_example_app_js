import * as React from 'react'
import * as Scrivito from 'scrivito'

Scrivito.provideComponent('FlexboxWidget', ({ widget }) => {
  const direction = widget.get('direction')
  const wrap = widget.get('wrap')
  const justifyContent = widget.get('justifyContent')
  const alignContent = widget.get('alignContent')
  const alignItems = widget.get('alignItems')
  const classNames = ['d-flex flex-container']

  if (direction === 'horizontal') {
    classNames.push('flex-row')
  } else if (direction === 'horizontal-reverse') {
    classNames.push('flex-row-reverse')
  } else if (direction === 'vertical') {
    classNames.push('flex-column')
  } else if (direction === 'vertical-reverse') {
    classNames.push('flex-column-reverse')
  }

  if (wrap === 'wrap') {
    classNames.push('flex-wrap')
  } else if (wrap === 'wrap-reverse') {
    classNames.push('flex-wrap-reverse')
  } else if (wrap === 'no-wrap') {
    classNames.push('flex-nowrap')
  }

  if (justifyContent === 'start') {
    classNames.push('justify-content-start')
  } else if (justifyContent === 'end') {
    classNames.push('justify-content-end')
  } else if (justifyContent === 'center') {
    classNames.push('justify-content-center')
  } else if (justifyContent === 'between') {
    classNames.push('justify-content-between')
  } else if (justifyContent === 'around') {
    classNames.push('justify-content-around')
  }

  if (alignContent === 'start') {
    classNames.push('align-content-start')
  } else if (alignContent === 'end') {
    classNames.push('align-content-end')
  } else if (alignContent === 'center') {
    classNames.push('align-content-center')
  } else if (alignContent === 'around') {
    classNames.push('align-content-around')
  } else if (alignContent === 'stretch') {
    classNames.push('align-content-stretch')
  }

  if (alignItems === 'start') {
    classNames.push('align-items-start')
  } else if (alignItems === 'end') {
    classNames.push('align-items-end')
  } else if (alignItems === 'center') {
    classNames.push('align-items-center')
  } else if (alignItems === 'baseline') {
    classNames.push('align-items-baseline')
  } else if (alignItems === 'stretch') {
    classNames.push('align-items-stretch')
  }

  return (

    <Scrivito.ContentTag content={widget} attribute='body' className={classNames.join(' ')} />

  )
})
