import * as React from 'react'
import * as Scrivito from 'scrivito'
import { Progress } from 'react-sweet-progress'

Scrivito.provideComponent('ProgressBarWidget', ({ widget }) => {
  const type = widget.get('type')
  const percent = widget.get('percent')
  const status = widget.get('status')

  return (
    <div>
      <Progress type={type} percent={percent} status={status} />
    </div>
  )
})
