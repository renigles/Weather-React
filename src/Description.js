import React from "react";
import "./description.css";

export default function Description(props) {
  let description = props.description;
  return (
    <section className="description">
      <span className="border border-2 note">{description}</span>
    </section>
  );
}