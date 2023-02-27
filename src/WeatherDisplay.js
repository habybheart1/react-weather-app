import React from "react";
import RealDate from "./RealDate";
import WeatherTemp from "./WeatherTemp";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <RealDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="image-temp col-6">
          <div className="clearfix">
            <span className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </span>
            <span className="float-left">
              <WeatherTemp celsius={props.data.temperature} />
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
        <WeatherForecast />
      </div>
    </div>
  );
}
