import React from "react";
import { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast mt-3 text-center">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thur</div>
            <div className="WeatherForecast-icon">
              <WeatherIcon code={"04n"} size={32} />
            </div>
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">19°</span> |
              <span className="WeatherForecast-temp-min opacity-50"> 12°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "a7f9089acdb831d30158dfbfe345785f";
    let latitude = props.cordinates.lat;
    let longitude = props.cordinates.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return null;
  }
}
