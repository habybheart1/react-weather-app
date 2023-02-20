import React from "react";
import RealDate from "./RealDate";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <RealDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.icon}
              size={52}
              alt={props.data.description}
              className="float-left"
            />
            <span className="float-left">
              <span id="temperature">{Math.round(props.data.temperature)}</span>
              <span id="units">℃</span>
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
