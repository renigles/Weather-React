import React from "react";

export default function Humidity() {
  let humid = 20;
  return (
    <div className="humidity">
      <div>Humidity </div>
      <div>
        {" "}
        <span>{humid}</span>%
      </div>
    </div>
  );
}