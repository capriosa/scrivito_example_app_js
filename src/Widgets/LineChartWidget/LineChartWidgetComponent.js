import * as React from 'react'
import * as Scrivito from 'scrivito'
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'
import { CartesianGrid, Legend, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

Scrivito.provideComponent('LineChartWidget', ({ widget }) => {
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
          Set Line chart values in the widget properties.
      </InPlaceEditingPlaceholder>
    )
  }

  return (
    type === 'dashed'
      ? <ResponsiveContainer width='100%' height={400}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey={label1} stroke='#3367d6' strokeDasharray='5 5' />
          <Line type='monotone' dataKey={label2} stroke='#ffc658' strokeDasharray='3 4 5 2' />
        </LineChart>
        </ResponsiveContainer>
      : type === 'withRefLines'
        ? <ResponsiveContainer width='100%' height={400}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
          >
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Legend />
            <ReferenceLine x='2. Quartal' stroke='red' label='Max PV Value' />
            <ReferenceLine y={300} label='Max' stroke='red' />
            <Line type='monotone' dataKey={label1} stroke='#3367d6' />
            <Line type='monotone' dataKey={label2} stroke='#ffc658' />
          </LineChart>
          </ResponsiveContainer>
        : type === 'vertical'
          ? <ResponsiveContainer width='100%' height={400}>
            <LineChart
              layout='vertical' data={data}
              margin={{ top: 10, right: 0, left: -13, bottom: 0 }}
            >
              <XAxis type='number' />
              <YAxis dataKey='name' type='category' />
              <CartesianGrid strokeDasharray='3 3' />
              <Tooltip />
              <Legend />
              <Line dataKey={label1} stroke='#3367d6' />
              <Line dataKey={label2} stroke='#ffc658' />
            </LineChart>
            </ResponsiveContainer>
          : <ResponsiveContainer width='100%' height={400}>
            <LineChart
              data={data}
              margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
            >
              <XAxis dataKey='name' />
              <YAxis />
              <CartesianGrid strokeDasharray='3 3' />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey={label1} stroke='#3367d6' activeDot={{ r: 8 }} />
              <Line type='monotone' dataKey={label2} stroke='#ffc658' />
            </LineChart>
            </ResponsiveContainer>

  )
}
)
