import * as React from 'react'
import * as Scrivito from 'scrivito'
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'
import Masonry from 'react-masonry-css'

Scrivito.provideComponent('MasonryContainerWidget', ({ widget }) => {
  const columns = 16; //widget.get('columns')

  if (!columns.length) {
    return (
      <InPlaceEditingPlaceholder center>
        Define columns in the widget properties.
      </InPlaceEditingPlaceholder>
    )
  }

  const content = columns.map((masonryWidget, index) => {
    const colSize = columnWidget.get('colSize') || 1
    return (
      <div key={index} >
        <Scrivito.ContentTag
          content={masonryWidget}
          attribute='content'

        />
      </div>
    )
  })

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };


  return <Masonry
    breakpointCols={breakpointColumnsObj}

    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column"
  >{content}</Masonry>
})
