import * as React from 'react'
import * as Scrivito from 'scrivito'
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

Scrivito.provideComponent('AreaChartWidget', ({ widget }) => {
  const items = widget.get('items')
  const type = widget.get('type')
  const label1 = widget.get('label1')
  const label2 = widget.get('label2')

  const data = items.map((item) => {
    const obj = ({ name: item.get('name'), [label1]: item.get('value1'), [label2]: item.get('value2') })
    return obj
  })

  if (!items.length) {
    return (
      <InPlaceEditingPlaceholder center>
          Set Area chart values in the widget properties.
      </InPlaceEditingPlaceholder>
    )
  }

  return (
    type === 'stacked'
      ? <ResponsiveContainer width='100%' height={400}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Area type='monotone' dataKey={label1} stackId='1' stroke='#3367d6' fill='#3367d6' />
          <Area type='monotone' dataKey={label2} stackId='1' stroke='#59AA2B' fill='#59AA2B' />

        </AreaChart>
        </ResponsiveContainer>
      : <ResponsiveContainer width='100%' height={200}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Area type='monotone' dataKey={label1} stroke='#3367d6' fill='#3367d6' />
          <Area type='monotone' dataKey={label2} stackId='1' stroke='#59AA2B' fill='#59AA2B' />
        </AreaChart>
        </ResponsiveContainer>

  )
}
)
