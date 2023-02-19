import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <input type="search" placeholder="Enter a city" />
          <input type="submit" value="search" />
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
