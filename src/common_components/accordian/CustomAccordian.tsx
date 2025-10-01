import { FiveDayForcastProps } from "@/type";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import { ChevronDown, Sunrise, Sunset, Droplets, Wind, CloudRain, Calendar } from "lucide-react";
import rain from "../../../img/rain.png";
import sunny from "../../../img/sunny.png";
import cloud from "../../../img/cloud.png";
import heavyRain from "../../../img/storm.png";
import moderateRain from "../../../img/moderate-rain.png";

const CustomAccordian = ({ futureData }: FiveDayForcastProps) => {
  const [display, setDisplay] = useState(false);
  const [icon, setIcon] = useState(sunny);

  function handleAccordian() {
    setDisplay(!display);
  }

  useEffect(() => {
    function icons() {
      if (futureData.day.condition.text === "Patchy rain nearby") {
        setIcon(rain);
      } else if (futureData.day.condition.text === "Partly Cloudy ") {
        setIcon(cloud);
      } else if (futureData.day.condition.text === "Sunny") {
        setIcon(sunny);
      } else if (futureData.day.condition.text === "Heavy rain") {
        setIcon(heavyRain);
      } else if (futureData.day.condition.text === "Moderate rain") {
        setIcon(moderateRain);
      }
    }
    icons();
  }, [futureData.day.condition.text]);

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="w-full">
      {/* Accordion Header */}
      <div
        onClick={handleAccordian}
        className={`flex justify-between items-center p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
          display
            ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-purple-900/30 border-blue-400 dark:border-purple-500 shadow-lg"
            : "bg-gray-50 dark:bg-slate-700 border-transparent hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md"
        }`}
      >
        <div className="flex items-center gap-3 sm:gap-4 flex-1">
          <div className={`p-2 rounded-xl transition-all duration-300 ${
            display 
              ? "bg-gradient-to-br from-blue-500 to-purple-600" 
              : "bg-white dark:bg-slate-600"
          }`}>
            <Calendar className={`w-5 h-5 sm:w-6 sm:h-6 ${
              display ? "text-white" : "text-gray-600 dark:text-gray-300"
            }`} />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
              {formatDate(futureData.date)}
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {futureData.day.condition.text}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {!display && (
            <>
              <div className="hidden sm:flex items-center gap-2">
                <Image
                  className="w-8 h-8"
                  width={32}
                  height={32}
                  src={icon}
                  alt="weather icon"
                />
                <span className="text-lg font-bold text-gray-700 dark:text-white">
                  {Math.round(futureData.day.maxtemp_c)}°
                </span>
              </div>
            </>
          )}
          <ChevronDown
            className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300 transition-transform duration-300 ${
              display ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          display ? "max-h-[1000px] opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-slate-800 dark:to-purple-900/20 rounded-2xl p-4 sm:p-6 border border-blue-100 dark:border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Section - Temperature & Astro */}
            <div className="space-y-4">
              {/* Temperature Card */}
              <div className="bg-white dark:bg-slate-700 rounded-xl p-4 shadow-md">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Temperature Range
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      className="w-12 h-12 sm:w-16 sm:h-16"
                      width={64}
                      height={64}
                      src={icon}
                      alt="weather icon"
                    />
                    <div>
                      <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        {Math.round(futureData.day.maxtemp_c)}°
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {Math.round(futureData.day.maxtemp_f)}°F
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sunrise & Sunset */}
              <div className="bg-white dark:bg-slate-700 rounded-xl p-4 shadow-md space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                      <Sunrise className="w-5 h-5 text-orange-500" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Sunrise
                    </span>
                  </div>
                  <span className="text-gray-900 dark:text-white font-semibold">
                    {futureData.astro.sunrise}
                  </span>
                </div>

                <div className="h-px bg-gray-200 dark:bg-gray-600"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                      <Sunset className="w-5 h-5 text-indigo-500" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Sunset
                    </span>
                  </div>
                  <span className="text-gray-900 dark:text-white font-semibold">
                    {futureData.astro.sunset}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Section - Weather Stats */}
            <div className="space-y-3">
              {/* Humidity */}
              <div className="bg-white dark:bg-slate-700 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Droplets className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Humidity
                    </span>
                  </div>
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {futureData.day.avghumidity}%
                  </span>
                </div>
              </div>

              {/* Wind */}
              <div className="bg-white dark:bg-slate-700 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                      <Wind className="w-5 h-5 text-cyan-500" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Wind Speed
                    </span>
                  </div>
                  <span className="text-xl font-bold text-cyan-600 dark:text-cyan-400">
                    {futureData.day.maxwind_kph} km/h
                  </span>
                </div>
              </div>

              {/* Rain Chance */}
              <div className="bg-white dark:bg-slate-700 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <CloudRain className="w-5 h-5 text-purple-500" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Rain Chance
                    </span>
                  </div>
                  <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
                    {futureData.day.daily_chance_of_rain}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAccordian;