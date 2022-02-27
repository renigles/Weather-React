import React from "react";


export default function details (props) {
  
    let windspeed = props.windspeed;
    let humidity = props.humidity;
return (
<h3 className="details">
<div className="windspeed">
  Windspeed{" "}
  <div>
    <span>{Math.round(windspeed)}</span> km/hr
  </div>
</div>
  <div className="humidity">
      <div>Humidity </div>
      <div>
        {" "}
        <span>{humidity}</span>%
      </div>
    </div>
</h3>
);
}