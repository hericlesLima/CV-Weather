import React, { useState } from "react";

import { fetchWeather } from "./api/fetchWeather";
import "./App.css";

import Card from "./Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Forecast from "./Carrousel/Forecast";
import DataCard from "./Card/DataCard";
import Footer from "./Footer/footer";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 2000,
      },
    },
  ],
};

export default function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  var days = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  const current = new Date();
  const day = days[current.getDay()];

  const hour = current.getHours();
  const minutes = current.getMinutes();
  const seconds = current.getSeconds();
  const [city, setCity] = useState();

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
          onChange={(e) => {
            setQuery(e.target.value);
            setCity(e.target.value);
          }}
          onKeyPress={search}
        />
      </div>
      {weather.main && (
        <div>
          <div className="location w-100 box">
            {weather.name}, {weather.sys.country}
          </div>
          <div className="weather-resp w-100 box">
            <div className="temp-date w-50 box h-100 col">
              <div className="temperature">
                {" "}
                <div>{Math.round(weather.main.temp)}</div>{" "}
                <div className="celsius">°C</div>
              </div>
              <div className="date box">
                {day}, {hour}h{minutes}min
              </div>
            </div>
            <div className="icon w-50 box h-100">
              <img
                className="clouds"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              />
            </div>
          </div>
          {/* -------- */}
          <div className="forecast w-100 box">
            <h2 className="title">Previsão do tempo</h2>
            <div className="slider box w-100">
              <Slider {...settings} className="w-70">
                <div className="slide box" style={{ display: "flex" }}>
                  <Card day="SEG" temperature="15" />
                </div>
                <div className="slide box">
                  <Card day="TER" temperature="15" />
                </div>
                <div className="slide box">
                  <Card day="QUA" temperature="15" />
                </div>
                <div className="slide box">
                  <Card day="QUI" temperature="15" />
                </div>
                <div className="slide box">
                  <Card day="SEX" temperature="15" />
                </div>
              </Slider>
            </div>
          </div>
          <div className="data box">
            <h2 className="data-title">Mais detalhes do clima</h2>
            <div className="data-1 box">
              <DataCard
                desc="Minimos"
                data={Math.round(weather.main.temp_min)}
                unity="°C"
              />
              <DataCard
                desc="Máximos"
                data={Math.round(weather.main.temp_max)}
                unity="°C"
              />
              <DataCard
                desc="Sensação térmica"
                data={weather.main.feels_like}
                unity="°C"
              />
              <DataCard
                desc="Humidade"
                data={weather.main.humidity}
                unity="%"
              />
            </div>
            <div className="data-2 box">
              <DataCard
                desc="Visibilidade"
                data={weather.visibility}
                unity="m"
              />
              <DataCard
                desc="Velocidade do vento"
                data={weather.wind.speed}
                unity="KM/h"
              />
              <DataCard desc="Direcão" data={weather.wind.deg} unity="°" />
              <DataCard
                desc="Pressão atmosférica"
                data={weather.main.pressure}
                unity="atm"
              />
            </div>
          </div>
        </div>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
}
