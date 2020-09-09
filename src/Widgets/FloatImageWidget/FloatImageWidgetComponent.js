import * as React from 'react'
import * as Scrivito from 'scrivito'
import AnimateOnReveal from '../../Components/AnimateOnReveal'
import IntersectionVisible from 'react-intersection-visible';



Scrivito.provideComponent('FloatImageWidget', ({ widget }) => {

  return (

    <div>
      <LazyLoad widget={widget}></LazyLoad>

    </div>


  )
})

class LazyLoadImage extends React.Component {
  constructor(props) {
    super(props)
    this.widget = this.props.widget
    this.state = {
      image: null
    }
  }

  onShow(entries) {


    this.setState(
      { image: this.widget }


    )


  }

  render() {


    return (

      <IntersectionVisible onShow={e => this.onShow(e)}>
        <AnimateOnReveal animation={this.widget.get('animation')}>
          <Scrivito.LinkTag to={this.widget.get('link')}>

            <Scrivito.ImageTag
              content={this.state.image}
              attribute='image'
              alt={alternativeText(this.widget)}
              className={this.widget.get('float')}
            />
          </Scrivito.LinkTag>
        </AnimateOnReveal>
        <Scrivito.ContentTag
          content={this.widget}
          attribute='text'
          alt={alternativeText(this.widget)}
          className={`text-${this.widget.get('alignment')}`}

        />
      </IntersectionVisible>
    )

  }
}

const LazyLoad = Scrivito.connect(LazyLoadImage)

function alternativeText(widget) {
  const widgetAlternativeText = widget.get('alternativeText')
  if (widgetAlternativeText) {
    return widgetAlternativeText
  }
  const image = widget.get('image')
  if (image) {
    return image.get('alternativeText')
  }
  return ''
}
