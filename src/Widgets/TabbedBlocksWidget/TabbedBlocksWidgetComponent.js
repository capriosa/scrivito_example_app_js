import * as React from 'react'
import * as Scrivito from 'scrivito'
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder'
import ButtonTagList from '../../Components/ButtonTagList'

class TabbedBlocksComponent extends React.Component {
  constructor (props) {
    super(props)
    const widget = this.props.widget
    const items = widget.get('items')
    const tags = allTags(items)
    this.state = {
      currentTag: tags[0]
    }

    this.setTag = this.setTag.bind(this)
  }

  setTag (tag) {
    this.setState({
      currentTag: tag
    })
  }

  render () {
    const widget = this.props.widget
    const items = widget.get('items')

    if (!items.length) {
      return (
        <InPlaceEditingPlaceholder center>
          Add blocks in the widget properties.
        </InPlaceEditingPlaceholder>
      )
    }

    return (
      <div>
        <ButtonTagList
          showTags
          tags={allTags(items)}
          currentTag={this.state.currentTag}
          setTag={this.setTag}
        />
        <div>
          <div className='row'>
            {
              items.map((item) =>
                <TabbedBlock
                  key={item.id()}
                  widget={item}

                  currentTag={this.state.currentTag}
                />)
            }
          </div>

        </div>
      </div>
    )
  }
}

Scrivito.provideComponent('TabbedBlocksWidget', TabbedBlocksComponent)

const TabbedBlock = Scrivito.connect(({ widget, currentTag }) => {
  const teaser = widget.get('teaser')
  const text = widget.get('text')
  const title = widget.get('title')
  const image = widget.get('image')
  const tags = widget.get('tags')

  const classNames = ['col-lg-4', 'text-center', 'squeezed']
  if (currentTag && tags.includes(currentTag)) { classNames.pop('squeezed') }

  return (
    <div className={classNames.join(' ')}>

      <Scrivito.ImageTag content={image} width='300' className='img-top' />
      <Scrivito.ImageTag content={teaser} attribute='titleImage' width='300' className='img-top' />
      <div className='card-body'>
        <h2 className='card-title h3'>{title}</h2>

        <div className='card-text'>{text}</div>
        <Scrivito.ContentTag tag='h3' className='card-title' content={teaser} attribute='title' />
        <Scrivito.ContentTag tag='h4' content={teaser} attribute='subtitle' />

      </div>

    </div>
  )
})

function allTags (items) {
  const tagsArray = items.map(item => item.get('tags'))

  // flatten tags
  const tags = tagsArray.reduce((a, b) => a.concat(b), [])

  // unique tags
  const uniqueTags = [...new Set(tags)]

  // sort tags
  return uniqueTags.sort()
}
