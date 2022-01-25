import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/Card";

import "./Forecast.css";

var settings = {
  dots: true,
  infinite: false,
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
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Forecast() {
  return (
    <div className="slider box w-100">
      <Slider {...settings} className="w-70">
        <div className="slide box" style={{display: "flex"}}>
          <Card day="SEG" temperature="15"/>
        </div>
        <div className="slide box">
          <Card day="TER" temperature="15"/>
        </div>
        <div className="slide box">
          <Card day="QUA" temperature="15"/>
        </div>
        <div className="slide box">
          <Card day="QUI" temperature="15"/>
        </div>
        <div className="slide box">
          <Card day="SEX" temperature="15"/>
        </div>
      </Slider>
    </div>
  );
}
