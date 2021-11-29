import React from "react";
import Description from "./Description";
import Details from "./Details";
import Forecast from "./Forecast";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import CurrentPlace from "./CurrentPlace";
import "./card.css";
export default function Card() {
  return (
    <span className="card p-3 mb-2 bg-info bg-gradient text-dark">
      <header>
        <div className="row">
          <div className="col-6">
            <CurrentPlace />
            <div className="row current">
              <div className="col-9">
                <CurrentWeather />
              </div>
            </div>
          </div>
          <div className="col-6">
            <Search />
            <Details />
          </div>
        </div>
      </header>
      <Description />
      <Forecast />
    </span>
  );
}