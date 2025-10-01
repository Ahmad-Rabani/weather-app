import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Droplets, Wind, Gauge } from "lucide-react";
import rain from "../../../img/rain.png";
import sunny from "../../../img/sunny.png";
import cloud from "../../../img/cloud.png";
import moderateRain from "../../../img/moderate-rain.png";
import heavyRain from "../../../img/storm.png";
import mist from "../../../img/mist.png";
import { AllTypes } from "@/type";

const Weather = ({ data }: AllTypes) => {
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  const [icon, setIcon] = useState(sunny);

  const cityName = data.location.name;
  const weatherCondition = data.current.condition.text;

  function changeUnit() {
    setIsCelsius(!isCelsius);
  }

  useEffect(() => {
    function icons() {
      if (data.current.condition.text === "Patchy rain nearby") {
        setIcon(rain);
      } else if (data.current.condition.text === "Partly Cloudy ") {
        setIcon(cloud);
      } else if (data.current.condition.text === "Sunny") {
        setIcon(sunny);
      } else if (data.current.condition.text === "Heavy rain") {
        setIcon(heavyRain);
      } else if (data.current.condition.text === "Moderate rain") {
        setIcon(moderateRain);
      } else if (data.current.condition.text === "Mist") {
        setIcon(mist);
      }
    }
    icons();
  }, [data.current.condition.text, data]);

  return (
    <div className="w-full max-w-2xl">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 dark:from-slate-800 dark:via-slate-900 dark:to-purple-900 p-6 sm:p-8 shadow-2xl backdrop-blur-sm transition-all duration-500">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl"></div>

        {/* Header */}
        <div className="relative z-10 flex justify-between items-center mb-6">
          <h1 className="text-lg sm:text-xl font-semibold text-white/90">
            Current Weather
          </h1>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5">
            <span className="text-xs sm:text-sm font-medium text-white">
              {isCelsius ? "°C" : "°F"}
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={!isCelsius}
                onChange={changeUnit}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/20 rounded-full transition-all duration-300 peer-checked:bg-white/30 relative">
                <div className={`absolute top-0.5 left-0.5 bg-white rounded-full h-5 w-5 transition-transform duration-300 ${!isCelsius ? 'translate-x-5' : ''}`}></div>
              </div>
            </label>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Left Side - Temperature & Location */}
          <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
            <div className="flex items-center gap-2 text-white/90 mb-4">
              <MapPin className="w-5 h-5" />
              <h2 className="text-xl sm:text-2xl font-bold">{cityName}</h2>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4 mb-4">
              <div className="relative">
                <Image
                  src={icon}
                  width={100}
                  height={100}
                  alt="weather icon"
                  className="drop-shadow-2xl w-20 h-20 sm:w-28 sm:h-28"
                />
              </div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white">
                {isCelsius ? data.current.temp_c : data.current.temp_f}°
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-white/80 capitalize font-medium">
              {weatherCondition}
            </p>
          </div>

          {/* Right Side - Weather Stats */}
          <div className="grid grid-cols-3 sm:flex sm:flex-col gap-3 sm:gap-4 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-3 py-3 sm:px-4 hover:bg-white/20 transition-all duration-300">
              <div className="p-2 bg-white/20 rounded-lg">
                <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs text-white/70">Humidity</p>
                <p className="text-sm sm:text-lg font-bold text-white">
                  {data.current.humidity}%
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-3 py-3 sm:px-4 hover:bg-white/20 transition-all duration-300">
              <div className="p-2 bg-white/20 rounded-lg">
                <Wind className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs text-white/70">Wind</p>
                <p className="text-sm sm:text-lg font-bold text-white">
                  {data.current.wind_kph} km/h
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-3 py-3 sm:px-4 hover:bg-white/20 transition-all duration-300">
              <div className="p-2 bg-white/20 rounded-lg">
                <Gauge className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs text-white/70">Pressure</p>
                <p className="text-sm sm:text-lg font-bold text-white">
                  {data.current.pressure_mb} mb
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;