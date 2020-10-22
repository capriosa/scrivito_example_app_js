import * as React from 'react'
import * as Scrivito from 'scrivito'
import { createBrowserHistory } from 'history'

// Create shared history and pass it to Scrivito
const history = createBrowserHistory()
Scrivito.useHistory(history)

class OverlayWidgetComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showOverlay: false
    }

    this.showOverlay = this.showOverlay.bind(this)
    this.closeOverlay = this.closeOverlay.bind(this)
    this.evaluateKeyDown = this.evaluateKeyDown.bind(this)
  }

  showOverlay () {
    const body = window.document.body
    body.classList.add('modal-open')

    const navbar = document.querySelector('section.navbar-fixed .navbar')
    navbar.addEventListener('click', this.closeOverlay)
    window.addEventListener('hashchange', this.closeOverlay)
    document.addEventListener('keydown', this.evaluateKeyDown)

    this.setState({ showOverlay: true })

    history.push(`${window.location.pathname}#overlay`)
  }

  closeOverlay () {
    const body = window.document.body
    body.classList.remove('modal-open')

    const navbar = document.querySelector('section.navbar-fixed .navbar')
    navbar.removeEventListener('click', this.closeOverlay)
    window.removeEventListener('hashchange', this.closeOverlay)
    document.removeEventListener('keydown', this.evaluateKeyDown)

    this.setState({ showOverlay: false })

    history.push(window.location.pathname)
  }

  evaluateKeyDown (event) {
    if (event.keyCode === 27) {
      this.preventEvent(event)
      this.closeOverlay()
    }
  }

  preventEvent (event) {
    event.preventDefault()
    event.stopPropagation()
  }

  render () {
    const label = this.props.widget.get('label') || 'Show overlay'

    const classNames = ['btn']
    classNames.push(this.props.widget.get('style') || 'btn-primary')

    return (
      <div>
        <button className={classNames.join(' ')} onClick={this.showOverlay} type='button'>{label}</button>
        <Modal widget={this.props.widget} state={this.state} OverlayWidget={this} />
      </div>
    )
  }
}

const Modal = Scrivito.connect(({ widget, state, OverlayWidget }) => {
  if (!state.showOverlay) {
    return null
  }

  return (
    <div className='modal fade show d-block' tabIndex='-1' role='dialog' onClick={OverlayWidget.closeOverlay}>
      <div className='modal-dialog modal-simple' role='document' onClick={OverlayWidget.preventEvent}>
        <div className='modal-header'>
          <a className='modal-close' onClick={OverlayWidget.closeOverlay} />
        </div>
        <Scrivito.ContentTag className='modal-body' content={widget} attribute='content' />
      </div>
    </div>
  )
})

Scrivito.provideComponent('OverlayWidget', OverlayWidgetComponent)
