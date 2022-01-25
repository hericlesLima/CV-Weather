import React from "react";
import "./Card.css"

import Weather from "../../Assets/weather.png"

export default function Card (props) {
    return (
        <div className="card box">
            <div>
                <p className="day">{props.day}</p>
            </div>
            <div className="card-icon">
                <img className="card-icon" src={Weather}/>
            </div>
            <div>
                <p className="temp">{props.temperature}°C</p>
            </div>
        </div>
    )
}