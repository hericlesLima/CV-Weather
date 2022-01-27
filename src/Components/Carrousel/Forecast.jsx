// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Card from "../Card/Card";

// import { fetchForecast } from "../api/fetchForecast";

// import "./Forecast.css";

// var settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 5,
//   slidesToScroll: 4,
//   initialSlide: 0,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2,
//         infinite: true,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         speed: 2000,
//       },
//     },
//   ],
// };

// export default function Forecast(props) {
//   const [forecast, setForecast] = useState();
//   const forecastData = await fetchForecast(props.query);
//   return (
//     <div className="slider box w-100">
//       <Slider {...settings} className="w-70">
//         <div className="slide box" style={{ display: "flex" }}>
//           <Card
//             day={day}
//             src={`https://openweathermap.org/img/wn/${weather[1].list[0].weather[0].icon}@2x.png`}
//             temperature={weather[1].list[0].main.temp}
//           />
//         </div>
//         <div className="slide box">
//           <Card
//             day={days[current.getDay() + 1]}
//             src={`https://openweathermap.org/img/wn/${weather[1].list[1].weather[0].icon}@2x.png`}
//             temperature={weather[1].list[1].main.temp}
//           />
//         </div>
//         <div className="slide box">
//           <Card
//             day={days[current.getDay() + 2]}
//             src={`https://openweathermap.org/img/wn/${weather[1].list[2].weather[0].icon}@2x.png`}
//             temperature={weather[1].list[2].main.temp}
//           />
//         </div>
//         <div className="slide box">
//           <Card
//             day={days[current.getDay() + 3]}
//             src={`https://openweathermap.org/img/wn/${weather[1].list[3].weather[0].icon}@2x.png`}
//             temperature={weather[1].list[3].main.temp}
//           />
//         </div>
//         <div className="slide box">
//           <Card
//             day={days[current.getDay() + 4]}
//             src={`https://openweathermap.org/img/wn/${weather[1].list[4].weather[0].icon}@2x.png`}
//             temperature={weather[1].list[4].main.temp}
//           />
//         </div>
//       </Slider>
//     </div>
//   );
// }
