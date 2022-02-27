import React from "react";

import "./currentWeather.css";

export default function CurrentWeather(props) {
  let temperature = props.temp;
  let icon = props.icon;
  let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
   <div className = "Weather">
   <h2>
      <span className="current-weather">{Math.round(temperature)}</span>
      <span>°C </span>
      <img className="current-icon" src={iconUrl} alt={""}/>{" "}
    </h2>
   
        </div>
  );
}