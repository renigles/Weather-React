import React, { useState } from "react";
import axios from "axios";
import Description from "./Description";
import Details from "./Details";
import Forecast from "./Forecast";
import CurrentWeather from "./CurrentWeather";
import CurrentPlace from "./CurrentPlace";
import "./card.css";

export default function Card() {
  const city = "London";
  const [ready, setReady] = useState(false);
  const [temp, setTemp] = useState(null);
  const [windspeed, setWindspeed] = useState (null);
  const [humidity, setHumidity] = useState (null);
  function handleResponse (response){
    console.log (response.data);
    setTemp(response.data.main.temp);
    setWindspeed(response.data.wind.speed);
    setHumidity(response.data.main.humidity);
    setReady(true);
    }


if (ready === true){
  
  return (
    <span className="card p-3 mb-2 bg-info bg-gradient text-dark">
      <header>
        <div className="row">
          <div className="col-6">
            <CurrentPlace city={city}  />
            <div className="row current">
              <div className="col-9">
                <CurrentWeather city={city} temp={temp}/>
              </div>
            </div>
          </div>
          <div className="col-6">
          <form className="search" >
      <input type="text" placeholder="Enter city name" />
      <input type="submit" value="search" />
    </form>
            <Details city={city} windspeed={windspeed} humidity={humidity}/>
          </div>
        </div>
      </header>
      <Description city={city}  />
      <Forecast city={city} />
    </span>
  );
} else {

  const apiKey = "16f449ba2c6eb2958ad3c1f42a8facfa";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
  axios.get(apiUrl).then(handleResponse);

  return ("loading...");
}
}