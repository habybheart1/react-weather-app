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
          <a href=""> open-sourced on GitHub</a> and hosted{" "}
          <a href=""> on Netlify </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
