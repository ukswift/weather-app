import React from "react";
import { Loading } from "./Loading";
import { ErrorMsg } from "./ErrorMsg";
export const WeatherCard = ({ data, loading, err }) => {
  const { description, icon } = data.weather[0];
  const iconURL = "https://openweathermap.org/img/wn/" + icon + ".png";
  return (
    <div className="weatherCardContainer">
      {loading ? (
        <Loading />
      ) : err ? (
        <ErrorMsg msg={err} />
      ) : (
        <div className="weatherCard">
          <h1>
            <b>Weather in {data.name}</b>
          </h1>
          <h1>
            {data.main.temp} <sup>o</sup>C
          </h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <img src={iconURL} alt="" />
            </div>
            <div className="description">{description}</div>
          </div>
          <h2>
            <b>Pressure</b>: {data.main.pressure}
          </h2>
          <h2>Humidity: {data.main.humidity}% </h2>
        </div>
      )}
    </div>
  );
};
