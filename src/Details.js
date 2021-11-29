import React from "react";
import Windspeed from "./Windspeed";
import Humidity from "./Humidity";
import "./details.css";
export default function Details() {
  return (
    <h3 className="details">
      <Windspeed />
      <Humidity />
    </h3>
  );
}