import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span className="WeatherTemp">
        <span id="temperature">{Math.round(props.celsius)}</span>
        <span id="units">
          {" "}
          ℃ |{" "}
          <a href="/" onClick={convertFahrenheit}>
            ℉
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemp">
        <span id="temperature">{Math.round(fahrenheit)}</span>
        <span id="units">
          <a href="/" onClick={convertCelsius}>
            ℃
          </a>{" "}
          | ℉
        </span>
      </span>
    );
  }
}
