import React from "react";
import "./DataCard.css";

export default function DataCard(props) {
  return (
    <div className="data-card box">
      <div>
        <p className="card-desc">{props.desc}</p>
      </div>
      <div className="card-data">
        <h1 className="data-number">{props.data}</h1>
      </div>
      <div>
        <p className="desc-unity">{props.unity}</p>
      </div>
    </div>
  );
}
