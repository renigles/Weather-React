import React from "react";
import "./currentPlace.css";
export default function CurrentPlace(props) {

 
  let city = props.city;
  let date = props.date;
  
 console.log (date);
 
  return (
    <div className="current">
      {" "}
      <h1 className="current-city">{city}</h1>
      <h4 className="today"> </h4>
      <h4 className="time"> </h4>
    </div>
  );
}
