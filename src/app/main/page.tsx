"use client";

import React, { useEffect, useState } from "react";
import Weather from "@/common_components/weather/page";
import FutureWeather from "@/common_components/future_weather/FutureWeather";
import Accordian from "@/common_components/accordian/Accordian";
import NotFound from "@/common_components/loader/NotFound";
import nightMode from "../../../img/dark-mode.png";
import dayMode from "../../../img/light.png";
import Image from "next/image";
import useFetch from "../customHook/CustomHook";

const Page = () => {
  const [cityName, setCityName] = useState<HTMLInputElement | string>("");
  const [icon, setIcon] = useState(dayMode);
  const [isDark, setIsDark] = useState(false);

  const data = useFetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${
      process.env.NEXT_PUBLIC_API_KEY
    }&q=${cityName || "paris"}&days=10&aqi=no&alerts=no`
  );

  let timeout: any = null;
  function handleCityName(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      console.log(value);
      setCityName(value);
    }, 1500);
  }

  useEffect(() => {
    function icons() {
      setIcon(isDark ? nightMode : dayMode);
    }
    icons();
  }, [isDark]);

  function toggleDarkMode() {
    setIsDark(!isDark);
  }

  return (
    <div
      className={`flex bg-[rgb(224,248,251)] flex-col justify-center items-center dark:bg-black ${
        isDark && "dark"
      }`}
    >
      <div className="flex justify-end w-[90%]">
        <button
          onClick={toggleDarkMode}
          className="p-2 max-sm:w-10 w-[50px] border border-gray-800 text-white dark:bg-neutral-400 dark:text-white rounded mt-4"
        >
          {<Image width={30} height={40} src={icon} alt="" />}
        </button>
      </div>
      <br />
      <div className="self-center relative flex w-[90%]">
        <input
          className=" w-full rounded-2xl focus-visible:outline-none p-2 border-transparent dark:bg-slate-950 dark:text-white dark:placeholder:text-white"
          type="text"
          name="search"
          onChange={handleCityName}
          placeholder="Search For City"
        />
      </div>
      <br />

      {data ? (
        <div className="w-full flex flex-col jusitfy-center items-center gap-y-3">
          <Weather data={data} />
          <FutureWeather data={data} />
          <Accordian data={data} />
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Page;
