import React from "react";
import "./currentPlace.css";
export default function CurrentPlace(props) {

  let date = "Monday April 7th";
  let time = "2:24PM";
  let city = props.city;
  return (
    <div className="current">
      {" "}
      <h1 className="current-city">{city}</h1>
      <h4 className="today">{date}</h4>
      <h4 className="time">{time}</h4>
    </div>
  );
}
