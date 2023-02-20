import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import RealDate from "./RealDate";
import Fulldate from "./Fulldate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleresponse(response) {
    console.log(response);
    setWeatherData({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.wind.speed,
      precipitation: response.data.rain,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <header>
            <div className="date text-center">
              <h3>
                <Fulldate date={weatherData.date} />
              </h3>
            </div>
          </header>
          <form>
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Enter a city"
                  autoFocus="on"
                  class="form-control"
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
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              <RealDate date={weatherData.date} />
            </li>
            <li>{weatherData.description}</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  className="float-left"
                />
                <span className="float-left">
                  <span id="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span id="units">℃</span>
                </span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: {weatherData.precipitation}%</li>
                <li>Humidity: {weatherData.humidity} %</li>
                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let key = "a7f9089acdb831d30158dfbfe345785f";
    let city = "Nigeria";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(handleresponse);
    return <div>LOADING....</div>;
  }
}
