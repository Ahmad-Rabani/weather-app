import { FiveDayForcastProps } from "@/type";
import { useState, useEffect } from "react";
import React from "react";
import humidityImg from "../../../img/humidityImg.png";
import Image from "next/image";
import sunrise from "../../../img/sunrise.png";
import sunset from "../../../img/sunset.png";
import wind from "../../../img/wind.png";
import rain from "../../../img/rain.png";
import sunny from "../../../img/sunny.png";
import cloud from "../../../img/cloud.png";
import heavyRain from "../../../img/storm.png"
import moderateRain from "../../../img/moderate-rain.png"
import rainChance from "../../../img/rain-Chance.png";

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
      } else if (futureData.day.condition.text === "Heavy rain"){
        setIcon(heavyRain);
      } else if (futureData.day.condition.text === "Moderate rain"){
        setIcon(moderateRain);
      }
    }
    icons();
  }, [futureData.day.condition.text]);

  return (
    <div className="w-[100%] mt-6">
      <hr />
      <br />
      <div
        onClick={handleAccordian}
        className="flex justify-between items-center border-y-4 border rounded border-neutral-600 p-4 cursor-pointer"
      >
        <h1 className="text-xl font-medium font-sans text-gray-500">
          Date: {futureData.date}
        </h1>
        <div className="flex justify-center items-center max-sm:hidden">
          <p>
            {!display && futureData.day.maxtemp_c + "-c"}{" "}
            {!display && futureData.day.maxtemp_f + "-f"}
          </p>
          {!display && (
            <Image className="ml-3 max-sm:hidden" width={20} height={30} src={icon} alt="" />
          )}
        </div>
        <p>{display ? "↓" : "^"}</p>
      </div>

      {display && (
        <div className="max-sm:p-0 bg-[#EBF9FC] rounded-md p-10 mt-1">
          <div className="flex justify-between flex-wrap max-sm:justify-center max-sm:gap-y-2 max-sm:gap-x-3">
            <div className="flex flex-col max-sm:justify-center max-sm:items-center p-3 max-sm:gap-y-1">
              <div className="flex flex-col gap-y-2">
                <h2 className="text-xl font-medium font-sans text-blue-500 max-sm:text-[10px]">
                  Celsius / Fehrenheit
                </h2>
                <div className="flex gap-x-2">
                  <h1 className="text-4xl font-medium font-sans text-slate-500 max-sm:text-sm">
                    {futureData.day.maxtemp_c}&deg; / {futureData.day.maxtemp_f}
                    &deg;
                  </h1>
                  <Image
                    className="ml-3 max-sm:h-6 max-sm:w-6 max-sm:ml-0"
                    width={50}
                    height={50}
                    src={icon}
                    alt=""
                  />
                </div>
              </div>
              <br />
              <div className="flex gap-x-1">
                <Image
                  className="mr-1 h-5 max-sm:mr-0 max-sm:w-4 max-sm:h-4"
                  width={15}
                  height={10}
                  alt=""
                  src={sunrise}
                />
                <p className="text-medium font-medium font-sans text-slate-500 max-sm:text-sm">
                  Sunrise {futureData.astro.sunrise}
                </p>
              </div>
              <div className="flex gap-x-1">
                <Image
                  className="mr-1 h-5 max-sm:mr-0 max-sm:w-4 max-sm:h-4"
                  width={15}
                  height={10}
                  alt=""
                  src={sunset}
                />
                <p className="text-medium font-medium font-sans text-slate-500 max-sm:text-sm">
                  Sunset {futureData.astro.sunset}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-y-4 p-3 rounded max-sm:w-[153px]">
              <div className="flex justify-between gap-x-2">
                <div className="flex gap-x-2">
                <Image
                  className="mr-1 h-5 max-sm:mr-0 max-sm:w-4 max-sm:h-4"
                  width={20}
                  height={10}
                  alt=""
                  src={humidityImg}
                />
                <p className="text-medium font-medium font-sans text-slate-500 max-sm:text-sm">
                  Humidity
                </p>
                </div>
                <p className="text-medium font-medium font-sans text-blue-500 max-sm:text-sm">{futureData.day.avghumidity}%</p>
              </div>
              <hr />
              <div className="flex justify-between gap-x-2">
                <div className="flex gap-x-2">
                <Image
                  className="mr-1 h-5 max-sm:mr-0 max-sm:w-4 max-sm:h-4"
                  width={20}
                  height={10}
                  alt=""
                  src={wind}
                />
                <p className="text-medium font-medium font-sans text-slate-500 max-sm:text-sm">
                  wind
                </p>
                </div>
                <p className="text-medium font-medium font-sans text-blue-500 max-sm:text-sm">{futureData.day.maxwind_kph}kph</p>
              </div>
              <hr />
              <div className="flex justify-between gap-x-2">
                <div className="flex gap-x-2">
                <Image
                  className="mr-1 h-5 max-sm:mr-0 max-sm:w-4 max-sm:h-4"
                  width={20}
                  height={10}
                  alt=""
                  src={rainChance}
                />
                <p className="text-medium font-medium font-sans text-slate-500 max-sm:text-sm">
                  Rain
                </p>
                </div>
                <p className="text-medium font-medium font-sans text-blue-500 max-sm:text-sm">{futureData.day.daily_chance_of_rain}%</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomAccordian;