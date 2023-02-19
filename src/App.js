import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <div>
            This website is coded by habyb_heart, its{" "}
            <a
              href="https://github.com/habybheart1"
              alt="My-Github"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-sourced on GitHub
            </a>{" "}
            and hosted{" "}
            <a
              href="https://app.netlify.com/sites/spectacular-daffodil-97473a"
              alt="my-netlify"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              on Netlify{" "}
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
