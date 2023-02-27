import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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
}
