import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            <img
              src="http://openweathermap.org/img/wn/04n@2x.png"
              alt="Weather Icon"
            ></img>
          </div>
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temp-max">19° </span>
            <span className="WeatherForecast-temp-min"> 10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
