import * as React from 'react'
import * as Scrivito from 'scrivito'
import axios from 'axios'

class EuropeanaComponent extends React.Component {
  constructor (props) {
    super(props)

    this.widget = this.props.widget
    this.state = {
      article: []
    }
  }

  componentWillMount () {
    const keyword = this.widget.get('keyword')
    const entries = this.widget.get('entries')
    const category = this.widget.get('category')
    const start = this.widget.get('start')
    axios.get(`https://www.europeana.eu/api/v2/search.json?wskey=xEPjKXVci&query=${keyword}&start=${start}&rows=${entries}&profile=rich`)
      .then(res => {
        const response = res.data
        const items = response.items

        this.setState({ article: items })
      })
  }

  componentWillUnmount () {
    this.setState = ''
  }

  render () {
    return (

      <div className='article'>

        {this.state.article.map((articles, index) =>
          articles.edmIsShownAt && articles.edmPreview
            ? <div className='media' key={index}>

              <a target='_blank' className='d-inline' href={`${articles.edmIsShownAt[0]}`}>
                <img className='img-responsive rectangle mr-3' src={`${articles.edmPreview[0]}`} />
              </a>

              <div className='media-body'>

                <a target='_blank' className='d-inline' href={`${articles.edmIsShownAt[0]}`}>

                  <p className='m-0 p-0 h5'>

                    {
                      articles.country
                        ? <span>Country: {articles.country[0]}</span>
                        : <span>Country: not available</span>
                    }
                    <br />
                    {
                      articles.dataProvider
                        ? <span>Provider: {articles.dataProvider[0]}</span>
                        : <span>Provider: not available</span>
                    }
                    <br />
                    {
                      articles.dcCreator
                        ? <span>Creator: {articles.dcCreator[0]}</span>
                        : <span>Creator: not available</span>
                    }
                    <br />
                    {
                      articles.title
                        ? <span>Title: {articles.title[0]}</span>
                        : <span>Title: not available</span>
                    }
                    <br />
                    {
                      articles.dcDescription
                        ? <span>Description: {articles.dcDescription[0]}</span>
                        : <span>Description: not available</span>
                    }

                  </p>
                </a>
              </div>

              </div>
            : null

        )}

      </div>

    )
  }
}

Scrivito.provideComponent('EuropeanaWidget', EuropeanaComponent)
