import React from "react";


export default function details () {
    let humid = 20;
return (
<h3 className="details">
<div className="windspeed">
  Windspeed{" "}
  <div>
    <span>4</span> km/hr
  </div>
</div>
  <div className="humidity">
      <div>Humidity </div>
      <div>
        {" "}
        <span>{humid}</span>%
      </div>
    </div>
</h3>
);
}