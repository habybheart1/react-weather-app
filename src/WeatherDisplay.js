import React from "react";
import RealDate from "./RealDate";
import WeatherTemp from "./WeatherTemp";
import "./Weather.css";

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
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
            />
            <span className="float-left">
              <WeatherTemp celsius={props.data.temperature} />
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: {props.data.precipitation}%</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
