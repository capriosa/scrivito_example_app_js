import * as React from 'react'
import * as Scrivito from 'scrivito'
import Slider from 'react-slick'
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'

Scrivito.provideComponent('SwipeBlocksWidget', ({ widget }) => {
  const items = widget.get('items')
  const settings = sliderSettings(items)

  if (!items.length) {
    return (
      <InPlaceEditingPlaceholder center>
          Select blocks in the widget properties.
      </InPlaceEditingPlaceholder>
    )
  }

  return (
    <div>

      <div className='slick-gallary-fluid'>

        <Slider {...settings} className='slickslide'>
          {
            items.map((item, index) =>
              <SwipeContent
                widget={item}
                key={`${item.id()}${index}`}

              />)
          }
        </Slider>

      </div>
    </div>
  )
}
)

const SwipeContent = Scrivito.connect(({ widget }) => {
  return (
    <div className='swipe-content'>

      <Scrivito.ContentTag content={widget} attribute='content' />

    </div>
  )
})

function sliderSettings (items) {
  return {
    arrows: false,
    autoplay: false,
    autoplaySpeed: 7000,
    centerMode: true,
    centerPadding: '0px',
    cssEase: 'linear',
    dots: true,
    fade: false,
    infinite: true,
    lazyLoad: true,
    slide: 'div',
    slidesToShow: 1,
    speed: 500,
    variableWidth: false,
    responsive: [{
      breakpoint: 800,
      settings: {
        centerMode: false
      }
    }]

  }
}
