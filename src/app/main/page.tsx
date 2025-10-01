"use client";

import React, { useEffect, useState } from "react";
import Weather from "@/common_components/weather/page";
import FutureWeather from "@/common_components/future_weather/FutureWeather";
import Accordian from "@/common_components/accordian/Accordian";
import NotFound from "@/common_components/loader/NotFound";
import { Sun, Moon, Search } from "lucide-react";
import useFetch from "../../Hook/useFetch";

const Page = () => {
  const [cityName, setCityName] = useState<HTMLInputElement | string>("");
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

  function toggleDarkMode() {
    setIsDark(!isDark);
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? "dark bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
          : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
            Weather App
          </h1>
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            {isDark ? (
              <Sun className="w-6 h-6 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" />
            ) : (
              <Moon className="w-6 h-6 text-slate-700 group-hover:-rotate-12 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-slate-800 shadow-lg focus:shadow-xl dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none border-2 border-transparent focus:border-blue-500 transition-all duration-300"
              type="text"
              name="search"
              onChange={handleCityName}
              placeholder="Search for a city..."
            />
          </div>
        </div>

        {/* Weather Content */}
        {data ? (
          <div className="flex flex-col items-center gap-8">
            <Weather data={data} />
            <FutureWeather data={data} />
            <Accordian data={data} />
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default Page;