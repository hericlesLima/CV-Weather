import React, { useState } from "react";

import { fetchWeather } from "./api/fetchWeather";
import "./App.css";

import clouds from "../Assets/clouds.png";

export default function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div className="main-container w-h-100">
      <div className="search-div w-100 box">
        <input
          type="text"
          className="search"
          placeholder="Pesquise por uma cidade"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
      </div>
      <div>
        <div className="location w-100 box">Praia, CV</div>
        <div className="weather-resp w-100 box">
          <div className="temp-date w-50 box h-100 col">
            <div className="temperature">25</div>
            <div className="date">Segunda, 16:00</div>
          </div>
          <div className="icon w-50 box h-100">
            <img className="clouds" src={clouds} />
          </div>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}
