import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-8">
              <input type="search" placeholder="Enter a city" />
            </div>
            <div className="col-4">
              <input type="submit" value="search" />
            </div>
          </div>
        </form>
        <h1>Nigeria</h1>
        <ul>
          <li>Sun, 19th Feb., 2023</li>
          <li>Cloudy</li>
        </ul>
      </div>
    </div>
  );
}
