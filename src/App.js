import React, { Component } from 'react'
import './App.css'

class App extends Component {

  state = {
    name: 'Luke',
    temp: 0,
  }

  fetchWeather = city => fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=c81375da1aed259ae20e218655ad8746`
  )
    .then(response => response.json())
    .then(json => {
      this.setState({ name: json.name, temp: json.main.temp })
    })

  kelvinToC = kelvin => Math.round(kelvin - 273.15)

  componentDidMount() {
    this.fetchWeather('london')
  }

  render() {
    console.log(this.state)
    return (
      <main>
        <h1>{this.state.temp} kelvin</h1>
        <h1>{this.kelvinToC(this.state.temp)} celsius</h1>
        <select onChange={event => this.fetchWeather(event.target.value)}>
          <option>London</option>
          <option>Newcastle</option>
        </select>
      </main>
    )
  }
}

// <select onChange={e => this.fetchWeather(e.target.value)}>
//   <option value='london'>London</option>
//   <option value='newcastle'>Newcastle</option>
//   <option value='dubai'>Dubai</option>
// </select>

export default App
