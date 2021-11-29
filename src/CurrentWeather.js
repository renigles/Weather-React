import React from "react";
import "./currentWeather.css";

export default function CurrentWeather() {
  let temperature = 18;
  let iconUrl = "http://openweathermap.org/img/wn/10d@2x.png";
  let altTxt = "rain";
  return (
    <h2>
      <span className="current-weather">{temperature}</span>
      <span>°C </span>
      <img className="current-icon" src={iconUrl} alt={altTxt} />{" "}
    </h2>
  );
}