import React, { useState } from "react";

import { fetchWeather } from "./api/fetchWeather";
import "./App.css";

import clouds from "../Assets/clouds.png";
import Forecast from "./Carrousel/Forecast";
import DataCard from "./Card/DataCard";
import Footer from "./Footer/footer";

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
    <div className="main-container w-100">
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
        <div className="location w-100 box">Praia, Cabo Verde</div>
        <div className="weather-resp w-100 box">
          <div className="temp-date w-50 box h-100 col">
            <div className="temperature"> <div>25</div> <div className="celsius">°C</div></div>
            <div className="date box">Segunda, 16:00</div>
          </div>
          <div className="icon w-50 box h-100">
            <img className="clouds" src={clouds} />
          </div>
        </div>
        <div className="forecast w-100 box">
          <h2 className="title">Previsão do tempo</h2>
          <Forecast />
        </div>
        <div className="data box">
        <h2 className="data-title">Mais detalhes do clima</h2>
          <div className="data-1 box">
            <DataCard desc="Temperatura" data="25" unity="°C"/>
            <DataCard />
            <DataCard />
            <DataCard />
          </div>
          <div className="data-2 box">
            <DataCard />
            <DataCard />
            <DataCard />
            <DataCard />
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
