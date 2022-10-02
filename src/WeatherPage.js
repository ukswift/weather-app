import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { WeatherCard } from "./WeatherCard";
import { SearchBar } from "./SearchBar";

export const WeatherPage = () => {
  console.log(process.env);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const placeRef = useRef("");
  const APIURL = "https://api.openweathermap.org/data/2.5/weather";
  // const bgImageURL = `https://source.unsplash.com/1600x900/?${placeRef.current.value}`;
  // const bgImageURL = `https://source.unsplash.com/1600x900/?${data?.weather[0]?.description}`;
  const fetchData = (place) => {
    setLoading(true);
    axios
      .get(APIURL, {
        params: {
          q: place,
          units: "metric",
          appid: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData("Tokyo");
  }, []);
  return (
    <div
      style={{
        // backgroundImage: `url(${bgImageURL})`,
        backgroundColor: "black",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <SearchBar refs={placeRef} fetchData={fetchData} />

      {data && <WeatherCard data={data} loading={loading} />}
    </div>
  );
};
