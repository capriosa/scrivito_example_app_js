import * as React from 'react'
import * as Scrivito from 'scrivito'
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'
import { Bar, BarChart, CartesianGrid, Legend, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

Scrivito.provideComponent('BarChartWidget', ({ widget }) => {
  const items = widget.get('items')
  const type = widget.get('type')
  const label1 = widget.get('label1')
  const label2 = widget.get('label2')
  const label3 = widget.get('label3')

  const data = items.map((item) => {
    const obj = ({ name: item.get('name'), [label1]: item.get('value1'), [label2]: item.get('value2'), [label3]: item.get('value3') })
    return obj
  })

  if (!items.length) {
    return (
      <InPlaceEditingPlaceholder center>
          Set bar chart values in the widget properties.
      </InPlaceEditingPlaceholder>
    )
  }

  return (
    type === 'stacked'
      ? <ResponsiveContainer width='100%' height={400}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke='#f00' />
          <Bar dataKey={label1} stackId='a' fill='#ffc658' />
          <Bar dataKey={label2} stackId='a' fill='#c6ff58' />
          <Bar dataKey={label3} stackId='a' fill='#3367d6' />

        </BarChart>
        </ResponsiveContainer>
      : type === 'mixed'
        ? <ResponsiveContainer width='100%' height={400}>
          <BarChart
            data={data}
            margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
          >
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke='#f00' />
            <Bar dataKey={label1} stackId='a' fill='#ffc658' />
            <Bar dataKey={label2} stackId='a' fill='#c6ff58' />
            <Bar dataKey={label3} stackId='a' fill='#3367d6' />
          </BarChart>
          </ResponsiveContainer>
        : type === 'biaxial'
          ? <ResponsiveContainer width='100%' height={400}>
            <BarChart
              data={data}
              margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
            >
              <XAxis dataKey='name' />
              <YAxis yAxisId='left' orientation='left' stroke='#03275b' />
              <YAxis yAxisId='right' orientation='right' stroke='#ffc658' />
              <CartesianGrid strokeDasharray='3 3' />
              <Tooltip />
              <Legend />

              <Bar yAxisId='left' dataKey={label1} fill='#ffc658' />
              <Bar yAxisId='right' dataKey={label2} fill='#c6ff58' />
            </BarChart>
            </ResponsiveContainer>
          : <ResponsiveContainer width='100%' height={400}>
            <BarChart
              data={data}
              margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
            >
              <XAxis dataKey='name' />
              <YAxis />
              <CartesianGrid strokeDasharray='3 3' />
              <Tooltip />
              <Legend />
              <ReferenceLine y={0} stroke='#f00' />
              <Bar dataKey={label1} fill='#ffc658' />
              <Bar dataKey={label2} fill='#c6ff58' />
              <Bar dataKey={label3} fill='#3367d6' />
            </BarChart>
            </ResponsiveContainer>

  )
}
)
