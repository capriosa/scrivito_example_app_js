import * as React from 'react'
import Slider from 'react-slick'
import * as Scrivito from 'scrivito'
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'

Scrivito.provideComponent('SwipeContentWidget', ({ widget }) => {
  const items = widget.get('items')
  const settings = sliderSettings(items)

  if (!items.length) {
    return (
      <InPlaceEditingPlaceholder center>
        Add content in the widget properties.
      </InPlaceEditingPlaceholder>
    )
  }

  return (
    <div>

      <div>

        {
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
        }
      </div>

    </div>
  )
}
)

const SwipeContent = Scrivito.connect(({ widget }) => {
  const text = widget.get('text')
  const title = widget.get('title')

  return (
    <div className='swipe-content'>

      <h2 className='title h3'>{title}</h2>
      <Scrivito.ContentTag
        tag="div"
        className={classNames.join(" ")}
        content={widget}
        attribute="text"
      />

    </div>
  )
})

function sliderSettings(images) {
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
