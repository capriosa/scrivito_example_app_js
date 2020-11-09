import * as React from 'react'
import * as Scrivito from 'scrivito'
import Scrollchor from 'react-scrollchor'

Scrivito.provideComponent('SlideSectionWidget', ({ widget }) => {
  const sectionClassNames = ['special-section', 'd-flex']
  const firstImage = widget.get('firstImage')
  const midImage = widget.get('midImage')
  const lastImage = widget.get('lastImage')
  const firstTitle = widget.get('firstTitle')
  const midTitle = widget.get('midTitle')
  const lastTitle = widget.get('lastTitle')
  const info = widget.get('text')
  const bg = widget.get('backgroundColor')

  if (widget.get('useFullHeight') === 'yes') {
    sectionClassNames.push('full-height')
  }

  return (
    <div style={{ backgroundColor: bg }} className={sectionClassNames.join(' ')}>

      <SlideSectionComponent link={firstTitle} active='inactive' imageTitle={firstTitle} imageSrc={firstImage} />
      <SlideSectionComponent link={midTitle} active='active' imageTitle={midTitle} imageSrc={midImage} />
      <SlideSectionComponent link={lastTitle} active='inactive' imageTitle={lastTitle} imageSrc={lastImage} />

    </div>
  )
})

class SlideSectionComponent extends React.Component {
  constructor(props) {
    super(props)

    this.handleMouseHover = this.handleMouseHover.bind(this)
    this.state = {
      isHovering: false,
      firstTime: 'init'
    }
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState)
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
      firstTime: 'after-init'
    }
  }

  render() {
    return (

      <Scrollchor
        to={this.props.link.url()} className={`special-image-wrapper  ${this.props.active} ${this.state.firstTime}`}
        onMouseEnter={this.handleMouseHover.bind(this)}
        onMouseLeave={this.handleMouseHover.bind(this)}
      >
        <Scrivito.BackgroundImageTag
          style={{ background: { image: this.props.imageSrc } }}
          className='special-image'
        >
        </Scrivito.BackgroundImageTag>
        {this.state.isHovering && <h1 className='h2 p-2 bg-secondary'>{this.props.imageTitle.title()}</h1>}
        {this.props.active === 'active' & this.state.firstTime === 'init' ? <h1 className='h2 p-2 bg-secondary'>{this.props.imageTitle.title()}</h1> : null}

      </Scrollchor>

    )
  }
}
