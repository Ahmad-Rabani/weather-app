"use client";

import React, { useEffect, useState } from "react";
import Weather from "@/common_components/weather/page";
import FutureWeather from "@/common_components/future_weather/FutureWeather";
import { RootObject } from "@/type";
import Accordian from "@/common_components/accordian/Accordian";

const Page = () => {
  const [data, setData] = useState<RootObject>();
  const [cityName, setCityName] = useState<HTMLInputElement | string>("");

  useEffect(() => {
    async function getData() {
      const api = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${cityName || "paris"}&days=10&aqi=no&alerts=no`
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
    <div className="flex flex-col justify-center items-center">
      <br />
      <div className="self-center relative flex w-[90%]">
        <input
          className=" w-[100%] p-2 rounded-2xl focus-visible:outline-none p-2 border-transparent"
          type="text"
          name="search"
          onChange={handleCityName}
          placeholder="Search For City"
        />
      </div>
      <br />

      {data && <Weather data={data} />}
      <br />
      {data && <FutureWeather data={data}/>}
      <br />
      {data && <Accordian data={data}/>}
    </div>
  );
};

export default Page;
