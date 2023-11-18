import React from "react";
import FormattedDate from "./FormattedDate";
import LocalTime from "./LocalTime";
import WeatherTemperature from "./WeatherTemperature.js";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.data.city}{" "}
        <span className="country"> | {props.data.country}</span>
      </h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>
          <LocalTime country={props.data.LocalTime} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                className="weather-icon"
              />
            </div>

            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
