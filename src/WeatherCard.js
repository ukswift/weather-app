import React from "react";
import "./WeatherCard.css";
export const WeatherCard = ({ data }) => {
  const { description, icon } = data.weather[0];
  const iconURL = "https://openweathermap.org/img/wn/" + icon + ".png";
  return (
    <div className="weatherCard">
      <h1>Weather in {data.name}</h1>
      <h1>
        {data.main.temp} <sup>o</sup>C
      </h1>
      <h2>Pressure: {data.main.pressure}</h2>
      <h2>Humidity: {data.main.humidity}% </h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <img src={iconURL} alt="" />
        </div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};
