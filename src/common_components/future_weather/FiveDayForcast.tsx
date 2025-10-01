import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Cloud, CloudRain, Sun } from "lucide-react";
import rain from "../../../img/rain.png";
import sunny from "../../../img/sunny.png";
import cloud from "../../../img/cloud.png";
import moderateRain from "../../../img/moderate-rain.png";
import heavyRain from "../../../img/storm.png";
import { FiveDayForcastProps } from "@/type";

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const FiveDayForcast = ({ futureData }: FiveDayForcastProps) => {
  const [icon, setIcon] = useState(sunny);

  const d = new Date(futureData.date);
  const day = d.getDay();
  const isToday = new Date().toDateString() === d.toDateString();

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

  return (
    <div className="group relative">
      <div className="flex flex-col items-center justify-between p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-blue-400 dark:hover:border-purple-500 min-w-[120px] sm:min-w-[140px] h-full">
        {/* Day Label */}
        <div className="mb-3">
          <h4 className={`text-sm sm:text-base font-bold ${
            isToday 
              ? "text-blue-600 dark:text-blue-400" 
              : "text-gray-700 dark:text-gray-300"
          }`}>
            {isToday ? "Today" : weekday[day]}
          </h4>
        </div>

        {/* Weather Icon */}
        <div className="relative mb-3 group-hover:scale-110 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <Image
            className="relative z-10"
            width={60}
            height={60}
            src={icon}
            alt="weather icon"
          />
        </div>

        {/* Weather Condition */}
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center mb-3 line-clamp-2 min-h-[2.5rem] flex items-center">
          {futureData.day.condition.text}
        </p>

        {/* Temperature */}
        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            {Math.round(futureData.day.maxtemp_c)}°
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {Math.round(futureData.day.mintemp_c)}°
          </span>
        </div>

        {/* Hover indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </div>
    </div>
  );
};

export default FiveDayForcast;