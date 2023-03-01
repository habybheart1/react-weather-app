import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import WeatherDisplay from "./WeatherDisplay";
import WeatherForecast from "./WeatherForecast";
import pic from "./shecodes.png";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleresponse(response) {
    setWeatherData({
      loaded: true,
      cordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.wind.speed,
      precipitation: response.data.rain,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    let key = "a7f9089acdb831d30158dfbfe345785f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(handleresponse);
  }
  function holdSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <header>
            <span>
              <img
                src={pic}
                alt="SheCodes-logo"
                className="rounded mx-auto logo d-none d-sm-block"
              />
            </span>
          </header>
          <form onSubmit={holdSubmit}>
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  autoFocus="on"
                  className="form-control m-2"
                  onChange={handleCity}
                />
              </div>
              <div className="col-4">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <WeatherDisplay data={weatherData} />
          <WeatherForecast cordinates={weatherData.cordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return <div>LOADING....</div>;
  }
}
