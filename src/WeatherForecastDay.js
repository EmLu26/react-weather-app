import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt="Weather Icon"
        ></img>
      </div>
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temp-max">{maxTemperature()}</span>
        <span className="celsius-Unit">C</span>
        <span className="pipe">|</span>
        <span className="WeatherForecast-temp-min">{minTemperature()}</span>
        <span className="celsius-Unit-Min">C</span>
      </div>
    </div>
  );
}
