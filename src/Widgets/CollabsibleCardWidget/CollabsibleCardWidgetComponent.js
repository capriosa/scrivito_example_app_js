import * as React from 'react'
import * as Scrivito from 'scrivito'

class CollabsibleCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: true,
      buttonText: 'Expand',
      class: 'collapsed',
      height: 100
    }
    this.toggleCollapse = this.toggleCollapse.bind(this)
  }

  toggleCollapse (e) {
    const contentHeight = 200
    const contentPadding = 20
    const newHeight = 'auto'

    this.setState({
      collapsed: !this.state.collapsed,
      buttonText: this.state.collapsed ? 'Collapse' : 'Expand',
      class: this.state.collapsed ? '' : 'collapsed',
      height: this.state.collapsed ? newHeight : 100
    })
  }

  render () {
    return (
      <div className='ui card'>
        <div className='content header-content text-left row'>

          <Scrivito.ImageTag className='img-responsive card-icon' content={this.props.widget} attribute='icon' alt='Icon' />

          <Scrivito.ContentTag tag='h2' className='header h3' content={this.props.widget} attribute='headline' />
          <Scrivito.ContentTag tag='div' className='description mt-3 pl-3 pr-3' content={this.props.widget} attribute='teaser' />

        </div>
        <div className={'content collapsible ' + this.state.class} style={{ height: this.state.height }}>
          <div className='content-wrapper'>
            <Scrivito.ContentTag tag='div' content={this.props.widget} attribute='body' />
          </div>
        </div>
        <div className='card-button' onClick={this.toggleCollapse}>
          {this.state.collapsed
            ? <i className={'fa fa-chevron-down fa-1x' + (this.state.collapsed ? 'down' : 'up')} />
            : <i className={'fa fa-chevron-up fa-1x' + (this.state.collapsed ? 'down' : 'up')} />}

        </div>
      </div>
    )
  }
}

Scrivito.provideComponent('CollabsibleCardWidget', CollabsibleCard)
