import * as React from 'react'
import * as Scrivito from 'scrivito'
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

function updateState (value) {
  this.setState({ value })
}

class RangeSliderGroupComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: 1
    }
    this.updateState = updateState.bind(this)
  }

  render () {
    const widget = this.props.widget
    const items = widget.get('items')

    if (!items.length) {
      return (
        <InPlaceEditingPlaceholder center>
          Create range slider in the widget properties.
        </InPlaceEditingPlaceholder>
      )
    }

    return (

      <div>

        {items.map((item, index) =>
          <div key={index}>
            <div className='row'>
              <div className='col col-sm-3'>&nbsp;</div>
              <div className='col col-sm-9'><h3>{item.get('headline')}</h3></div>
            </div>
            <div className='mb-3 row'>
              <div className='col col-sm-3'>{item.get('targetEntity')}: {(this.state.value * item.get('factor')).toFixed(2)}</div>
              <div className='col col-sm-9'>
                <InputRange
                  key={index}

                  maxValue={item.get('max')}
                  minValue={0}
                  value={this.state.value}
                  onChange={value => this.setState({ value })}
                />
                <div className='mt-3'>{item.get('baseEntity')}</div>
              </div>
            </div>
          </div>
        )}

      </div>

    )
  }
}

Scrivito.provideComponent('RangeSliderGroupWidget', RangeSliderGroupComponent)
