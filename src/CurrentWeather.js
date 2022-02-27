import React from "react";

import "./currentWeather.css";

export default function CurrentWeather(props) {
  let temperature = props.temp;

  let iconUrl = "http://openweathermap.org/img/wn/10d@2x.png";
  let altTxt = "rain";

  return (
   <div className = "Weather">
   <h2>
      <span className="current-weather">{Math.round(temperature)}</span>
      <span>°C </span>
      <img className="current-icon" src={iconUrl} alt={altTxt} />{" "}
    </h2>
   
        </div>
  );
}