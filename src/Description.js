import React from "react";
import "./description.css";

export default function Description() {
  let description = "partly cloudy";
  return (
    <section className="description">
      <span className="border border-2 note">{description}</span>
    </section>
  );
}