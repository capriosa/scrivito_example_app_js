import React, { Component } from "react"
import * as Scrivito from 'scrivito'
import formatDate from '../../utils/formatDate'

class Corona extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmed: "",
      recovered: "",
      deaths: "",
      lastUpdate: "",
      country: this.props.widget.get("country"),
      percent: "",
      population: "",
      populationPercent: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.update = this.update.bind(this)
  }



  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  componentDidMount() {
    this.changeData()


  }

  changeData() {
    this.mounted = true
    const url = `https://covid19.mathdro.id/api/countries/${this.state.country}/`

    fetch(url)
      .then(response => response.json())
      .then(response => {
        if (this.mounted) {
          const { confirmed, recovered, deaths, lastUpdate } = response
          this.setState({ confirmed: confirmed.value })
          this.setState({ recovered: recovered.value })
          this.setState({ deaths: deaths.value })
          this.setState({ lastUpdate: lastUpdate })
          let p = this.state.deaths / this.state.confirmed * 100
          this.setState({ percent: p })
        }
      })
      .then(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${this.state.country}`)
          .then(response => response.json())
          .then(response => {
            if (this.mounted) {
              const [first] = response
              const { population } = first
              this.setState({ population: population })
              let p = this.state.deaths / this.state.population * 100
              this.setState({ populationPercent: p })
            }
          })

      })
  }

  componentWillUnmount() {
    this.mounted = false
  }

  update(e) {
    e.preventDefault()
    this.changeData()

  }

  render() {
    return (
      <>

        <div style={{ padding: '20px' }} >
          <form>
            <input
              type="text"
              name="country"
              placeholder={this.state.country}
              value={this.state.country}
              onChange={this.handleChange}
            />

            <p><b>Population: {this.state.population.toLocaleString(undefined)}</b></p>
            <hr />
            <p style={{ color: 'orange' }}>Confirmed: {this.state.confirmed.toLocaleString(undefined)}</p>
            <p style={{ color: 'green' }}>Recovered: {this.state.recovered.toLocaleString(undefined)}</p>
            <hr />

            <p style={{ color: 'red' }}>Deaths: {this.state.deaths.toLocaleString(undefined)}</p>
            <b>Deaths in percent</b>
            <p>Percent (confirmed): {this.state.percent.toLocaleString(undefined)}%</p>
            <p>Percent (population): {this.state.populationPercent.toLocaleString(undefined)}%</p>
            <hr />
            <p>Last Update: {formatDate(this.state.lastUpdate, 'dd.mm.yyyy H:M')}</p>

            <button className="btn btn-secondary" onClick={this.update}>Aktualisieren</button>
          </form>
        </div>
      </>
    )
  }
}


Scrivito.provideComponent("CoronaWidget", Corona);


