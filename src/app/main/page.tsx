"use client";

import React, { useEffect, useState } from "react";
import Weather from "@/common_components/weather/page";
import FutureWeather from "@/common_components/future_weather/FutureWeather";
import { RootObject } from "@/type";

const Page = () => {
  const [data, setData] = useState<RootObject>();
  const [cityName, setCityName] = useState<HTMLInputElement | string>("paris");

  useEffect(() => {
    async function getData() {
      const api = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${cityName}&days=5&aqi=no&alerts=no`
      );

      setData(await api.json());
    }
    getData();
  }, [cityName]);


  let timeout: any = null;
  function handleCityName(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      console.log(value);
      setCityName(value);
    }, 1000);
  }

  return (
    <>
      <h1 className="text-2xl font-sans font-bold mt-10 ml-10 text-slate-500 max-sm:ml-5">
        Weather App
      </h1>
      <br />
      <div className="relative flex">
        <input
          className="ml-10 w-[90%] p-2 rounded-2xl focus-visible:outline-none p-2 max-sm:ml-5 min-w-[400px] placeholder-font-sans"
          type="text"
          name="search"
          onChange={handleCityName}
          placeholder="Search For City"
        />
      </div>
      <br />

      {data && <Weather data={data} />}
      <br />
      {data && < FutureWeather data={data}/>}
    </>
  );
};

export default Page;
