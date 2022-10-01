import React, { useRef, useState } from "react";
import axios from "axios";
import { WeatherCard } from "./WeatherCard";

export const WeatherPage = () => {
  console.log(process.env);
  const [data, setData] = useState();
  const placeRef = useRef("");
  const APIURL = "https://api.openweathermap.org/data/2.5/weather";
  // const bgImageURL = `https://source.unsplash.com/1600x900/?${placeRef.current.value}`;
  const fetchData = () => {
    console.log(placeRef.current.value);
    axios
      .get(APIURL, {
        params: {
          q: placeRef.current.value,
          units: "metric",
          appid: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="weatherPage"
      style={{
        height: "100vh",
        // backgroundImage: `url(${bgImageURL})`,
      }}
    >
      <input type="text" ref={placeRef} />
      <button onClick={fetchData}>Get weather</button>

      {data && <WeatherCard data={data} />}
    </div>
  );
};
