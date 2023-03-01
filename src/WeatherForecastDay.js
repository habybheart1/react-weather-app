import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        />
      </div>
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>{" "}
        |{" "}
        <span className="WeatherForecast-temp-min opacity-50">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
