import React from "react";
import "./DataCard.css";

export default function DataCard(props) {
  return (
    <div className="data-card box">
      <div className="box">
        <h5 className="card-desc box">{props.desc}</h5>
      </div>
      <div className="card-data">
        <h1 className="data-number">{props.data}</h1>
      </div>
      <div>
        <h3 className="desc-unity">{props.unity}</h3>
      </div>
    </div>
  );
}
