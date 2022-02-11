import React, { useEffect, useState } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { fetchWeather } from "./api/fetchWeather";
import { fetchForecast } from "./api/fetchForecast";
import { fetchMap } from "./api/fetchMap";
import "./App.css";

import Card from "./Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Forecast from "./Carrousel/Forecast";
import DataCard from "./Card/DataCard";
import Footer from "./Footer/footer";
import Location from "./Location/location";

import Moon from "../Assets/moon.png";
import Sun from "../Assets/sunny.png";
import Lottie from "react-lottie";
import animationData from "../Assets/weather-lottie.json";

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
  const [weather, setWeather] = useState([]);
  const [mode, setMode] = useState("main-container light w-100");

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

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      const forecastData = await fetchForecast(query);
      const mapData = await fetchMap();
      setWeather([data, forecastData, mapData]);
      setQuery("");
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={mode}>
      <div className="home">
        <div className="mode">
          <div className="btns">
            <button
              className="mode-btn"
              onClick={() => {
                setMode("main-container light w-100");
              }}
            >
              <img src={Sun} />
            </button>

            <button
              className="mode-btn"
              onClick={() => {
                setMode("main-container dark w-100");
              }}
            >
              <img src={Moon} />
            </button>
          </div>
        </div>
        <div className="search-div w-100 box">
          <input
            type="text"
            className="search"
            placeholder="Pesquise por uma cidade"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyPress={search}
          />
        </div>

        {/* -------- */}

        <div className="home-cntnt box">
          {weather[0] && (
            <section className="weather-resp box">
              <div className="temp-date box h-100 col">
                <div className="temperature">
                  <div>{Math.round(weather[0].main.temp)}</div>
                  <div className="celsius">°C</div>
                </div>
                <div className="date box">
                  {day}, {hour}:{minutes}
                </div>
              </div>
            </section>
          )}

          <div className="lottie box">
            <Lottie options={defaultOptions} height={500} width={800} />
          </div>

          {weather[0] && (
            <section className="icon box">
              <img
                className="clouds"
                src={`https://openweathermap.org/img/wn/${weather[0].weather[0].icon}@2x.png`}
              />

              {/* <div className="condition box">
                {day}, {hour}:{minutes}
              </div> */}
            </section>
          )}
        </div>
      </div>

      {/* -------- */}

      <div className="weather">
        {weather[0] && (
          <div>
            <div className="forecast w-100 box">
              <h2 className="title">Previsão do tempo</h2>
              <div className="slider box w-100">
                <Slider {...settings} className="w-70">
                  <div className="slide box" style={{ display: "flex" }}>
                    <Card
                      day={days[new Date(weather[1].list[0].dt_txt).getDay()]}
                      src={`https://openweathermap.org/img/wn/${weather[1].list[0].weather[0].icon}@2x.png`}
                      temperature={weather[1].list[0].main.temp}
                    />
                  </div>
                  <div className="slide box">
                    <Card
                      day={days[new Date(weather[1].list[8].dt_txt).getDay()]}
                      src={`https://openweathermap.org/img/wn/${weather[1].list[8].weather[0].icon}@2x.png`}
                      temperature={weather[1].list[8].main.temp}
                    />
                  </div>
                  <div className="slide box">
                    <Card
                      day={days[new Date(weather[1].list[16].dt_txt).getDay()]}
                      src={`https://openweathermap.org/img/wn/${weather[1].list[16].weather[0].icon}@2x.png`}
                      temperature={weather[1].list[16].main.temp}
                    />
                  </div>
                  <div className="slide box">
                    <Card
                      day={days[new Date(weather[1].list[24].dt_txt).getDay()]}
                      src={`https://openweathermap.org/img/wn/${weather[1].list[24].weather[0].icon}@2x.png`}
                      temperature={weather[1].list[24].main.temp}
                    />
                  </div>
                  <div className="slide box">
                    <Card
                      day={days[new Date(weather[1].list[32].dt_txt).getDay()]}
                      src={`https://openweathermap.org/img/wn/${weather[1].list[32].weather[0].icon}@2x.png`}
                      temperature={weather[1].list[32].main.temp}
                    />
                  </div>
                </Slider>
              </div>
            </div>

            {/* -------- */}

            <div className="data box">
              <h2 className="data-title">Mais detalhes do clima</h2>
              <div className="data-1 box">
                <DataCard
                  desc="Minimos"
                  data={Math.round(weather[0].main.temp_min)}
                  unity="°C"
                />
                <DataCard
                  desc="Máximos"
                  data={Math.round(weather[0].main.temp_max)}
                  unity="°C"
                />
                <DataCard
                  desc="Sensação térmica"
                  data={weather[0].main.feels_like}
                  unity="°C"
                />
                <DataCard
                  desc="Humidade"
                  data={weather[0].main.humidity}
                  unity="%"
                />
              </div>
              <div className="data-2 box">
                <DataCard
                  desc="Visibilidade"
                  data={weather[0].visibility}
                  unity="m"
                />
                <DataCard
                  desc="Velocidade do vento"
                  data={weather[0].wind.speed}
                  unity="KM/h"
                />
                <DataCard desc="Direcão" data={weather[0].wind.deg} unity="°" />
                <DataCard
                  desc="Pressão atmosférica"
                  data={weather[0].main.pressure}
                  unity="atm"
                />
              </div>
            </div>
            {/* <div>
              <Location />
            </div> */}
          </div>
        )}
      </div>
      {/* <div className="app-footer">
        <Footer />
      </div> */}
    </div>
  );
}
