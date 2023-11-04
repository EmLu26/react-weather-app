import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <Weather />
        <footer>
          This project was coded with 💙 by{" "}
          <a
            href="https://www.shecodes.io/graduates/79171-emma-whitney"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Emma Whitney
          </a>{" "}
          and is
          <a
            href="https://github.com/EmLu26/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub.{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
