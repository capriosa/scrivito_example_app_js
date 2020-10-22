import * as React from 'react'
import * as Scrivito from 'scrivito'
import AnimateOnReveal from '../../Components/AnimateOnReveal'
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'
import IntersectionVisible from 'react-intersection-visible';

class FactCounterComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { seconds: 0 }
    this.widget = this.props.widget
    this.speed = this.widget.get('speed')
    this.val = this.widget.get('value')
  }



  tick () {
    if (this.state.seconds < this.val) {
      this.setState(prevState => ({

        seconds: prevState.seconds + 1

      }))
    }
  }

  onShow( entries ) {

  this.interval = setInterval(() => this.tick(), parseInt(this.speed))
  }

  onHide (entries) {
    this.setState({seconds: 0,
    prevState: 0})
    clearInterval(this.interval)


  }



  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    if (!this.speed.length) {
      return (
        <InPlaceEditingPlaceholder center>
          Add content in widget properties.
        </InPlaceEditingPlaceholder>
      )
    }

    return (
      <IntersectionVisible onShow={ e => this.onShow( e ) } onHide={ e => this.onHide( e ) }>
      <FactContent
        widget={this.widget}
        sec={this.state.seconds}
      />
      </IntersectionVisible>


    )
  }
}

const FactContent = Scrivito.connect(({ widget, sec }) => {
  const key = widget.get('key')
  const value = sec
  const postfix = widget.get('postfix')

  return (


    <AnimateOnReveal animation={widget.get('animation')}>
      <div className='fact'>

        <span className='value'>{value}  {postfix}</span>
        <span className='key'> {key}</span>

      </div>
    </AnimateOnReveal>

  )
})

Scrivito.provideComponent('FactCounterWidget', FactCounterComponent)
