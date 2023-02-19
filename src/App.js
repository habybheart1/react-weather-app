import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <div>
          This website is coded by habyb_heart, its{" "}
          <a href="https://github.com/habybheart1"> open-sourced on GitHub</a>{" "}
          and hosted{" "}
          <a href="https://app.netlify.com/sites/spectacular-daffodil-97473a">
            {" "}
            on Netlify{" "}
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
