import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather=>weather.main.temp);
    const pressures = cityData.list.map(weather=>weather.main.pressure);
    const humidities = cityData.list.map(weather=>weather.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

    return(
      <tr key={name}>
      <td><GoogleMap lat={lat} lon={lon} /></td>
      <td><Chart data={temps} color="red" units="K" /></td>
      <td><Chart data={pressures} color="blue" units="hPA" /></td>
      <td><Chart data={humidities} color="orange" units="%" /></td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weatherData.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state){
  return { weatherData : state.weatherData };
}

// function mapStateToProps({weather}){
//   return {weather};
// }

export default connect(mapStateToProps)(WeatherList);
