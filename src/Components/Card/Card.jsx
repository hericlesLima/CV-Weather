import React from "react";
import "./Card.css"

import Weather from "../../Assets/weather.png"

export default function Card (props) {
    return (
        <div className="card box">
            <div>
                <p className="day">{props.day}</p>
            </div>
            <div>
                <img className="card-icon" src={props.src}/>
            </div>
            <div>
                <p className="temp">{props.temperature}°C</p>
            </div>
        </div>
    )
}