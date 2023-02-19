import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <header>
          <div className="date text-center">
            <h3>19th February, 2023</h3>
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
              <input type="submit" value="search" class="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>Nigeria</h1>
        <ul>
          <li>Sun, 14:10</li>
          <li>Sunny</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="sunny"
                className="float-left"
              />
              <span className="float-left">
                <span id="temperature">36</span>
                <span id="units">℃</span>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: 10%</li>
              <li>Wind: 5 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
