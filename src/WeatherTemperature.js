import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          <span className="celsius"> °C </span>
          <span className="fahrenheit">
            {" "}
            <a href="/" onClick={showFahrenheit}>
              {" "}
              | °F
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <span className="celsius">
            {" "}
            <a href="/" onClick={showCelsius}>
              °C{" "}
            </a>{" "}
          </span>
          <span className="fahrenheit"> | °F </span>
        </span>
      </div>
    );
  }
}
