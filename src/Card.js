import React, { useState } from "react";
import axios from "axios";
import Description from "./Description";
import Details from "./Details";
import Forecast from "./Forecast";
import CurrentWeather from "./CurrentWeather";
import CurrentPlace from "./CurrentPlace";
import "./card.css";

export default function Card() {
  const [city, setCity]= useState("New York");
  const [place, setPlace] = useState (null);
  const [ready, setReady] = useState(false);
  const [temp, setTemp] = useState(null);
  const [windspeed, setWindspeed] = useState (null);
  const [humidity, setHumidity] = useState (null);
  const [description, setDescription] = useState (null);
  const [icon, setIcon] = useState (null);
  
  
  function search(location){
   
    const apiKey = "16f449ba2c6eb2958ad3c1f42a8facfa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`; 
    axios.get(apiUrl).then(handleResponse);

    setReady(true);
  }

  function handleSubmit(event) {
event.preventDefault();
    search (place);
   setCity(place);
    }

  function handleChange (event){
    
      setPlace(event.target.value)
    
  }
  
  function handleResponse (response){
    console.log (response.data);
    setTemp(response.data.main.temp);
    setWindspeed(response.data.wind.speed);
    setHumidity(response.data.main.humidity);
    setDescription (response.data.weather[0].description);
    setIcon (response.data.weather[0].icon);
   
    }


if (ready){

  return (
    <span className="card p-3 mb-2 bg-info bg-gradient text-dark">
      <header>
        <div className="row">
          <div className="col-6">
            <CurrentPlace city={city}  />
            <div className="row current">
              <div className="col-9">
                <CurrentWeather city={city} temp={temp} icon={icon}/>
              </div>
            </div>
          </div>
          <div className="col-6">
          <form className="search" onSubmit={handleSubmit} >
      <input type="text" placeholder="Enter city name" onChange={handleChange} />
      <input type="submit" value="search" />
    </form >
            <Details city={city} windspeed={windspeed} humidity={humidity}/>
          </div>
        </div>
      </header>
      <Description city={city} description={description} />
      <Forecast city={city} />
    </span>
  );
} else {
  search (city);
  return ("loading...");
}
}