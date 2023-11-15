import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  console.log(props);
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
