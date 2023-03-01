import React from "react";
import RealDate from "./RealDate";
import Fulldate from "./Fulldate";
import "./Weather.css";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <div className="row">
        <div className="col-6 ">
          <h1>{props.data.city}</h1>
        </div>
        <div className="col-6" id="real-date">
          <ul>
            <li>
              <Fulldate date={props.data.date} />
            </li>
            <li>
              <RealDate date={props.data.date} />
            </li>
          </ul>
        </div>
      </div>

      <div className="row mt-3">
        <div className="image-temp col-8">
          <div className="clearfix">
            <span className="float-left">
              <img src={props.data.icon} alt={props.data.description} />
            </span>
            <span className="float-left" id="temperature">
              {Math.round(props.data.temperature)}
              <span id="units">℃</span>
            </span>
            <span className="description-text">
              <p className="text-capitalize">{props.data.description}</p>
            </span>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
