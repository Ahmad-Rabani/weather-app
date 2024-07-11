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
        className="flex justify-between items-center dark:border-white border rounded border-neutral-600 p-4 max-sm:p-2 cursor-pointer dark:bg-slate-950"
      >
        <h1 className="text-[clamp(16px,2vw,24px)] font-medium font-sans text-gray-500 dark:text-white ">
          Date: {futureData.date}
        </h1>
        <div className="flex justify-center items-center max-sm:hidden">
          <p className="dark:text-white">
            {!display && futureData.day.maxtemp_c + "-c /"}{" "}
            {!display && futureData.day.maxtemp_f + "-f"}
          </p>
          {!display && (
            <Image className="ml-3 max-sm:hidden" width={20} height={30} src={icon} alt="" />
          )}
        </div>
        <p className="dark:text-white">{display ? "v" : "^"}</p>
      </div>

      {display && (
        <div className="max-sm:p-0 bg-[#EBF9FC] rounded-md p-6 mt-1 dark:bg-slate-950">
          <div className="flex justify-between flex-wrap max-sm:justify-around max-sm:gap-y-2 max-sm:gap-x-3">
            <div className="flex flex-col max-sm:justify-center max-sm:items-center p-3 max-sm:gap-y-1">
              <div className="flex flex-col gap-y-2">
                <h2 className="text-[clamp(16px,2vw,24px)] font-medium font-sans text-blue-500">
                  Celsius / Fehrenheit
                </h2>
                <div className="flex gap-x-2 justify-center">
                  <h1 className="text-4xl font-medium font-sans text-slate-500 max-sm:text-lg dark:text-white">
                    {futureData.day.maxtemp_c}&deg; / {futureData.day.maxtemp_f}
                    &deg;
                  </h1>
                  <Image
                    className="ml-3 max-sm:h-8 max-sm:w-8 max-sm:ml-0"
                    width={50}
                    height={50}
                    src={icon}
                    alt=""
                  />
                </div>
              </div>
              <br />
              <div className="flex gap-x-1 max-sm:self-center">
                <Image
                  className="mr-1 max-sm:mr-0 max-sm:w-6 max-sm:h-6"
                  width={20}
                  height={20}
                  alt=""
                  src={sunrise}
                />
                <p className="text-lg font-medium font-sans text-slate-500 max-sm:text-lg dark:text-white">
                  Sunrise {futureData.astro.sunrise}
                </p>
              </div>
              <div className="flex gap-x-1 max-sm:self-center">
                <Image
                  className="mr-1 max-sm:mr-0 max-sm:w-6 max-sm:h-6"
                  width={20}
                  height={20}
                  alt=""
                  src={sunset}
                />
                <p className="text-lg font-medium font-sans text-slate-500 max-sm:text-lg dark:text-white">
                  Sunset {futureData.astro.sunset}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-end gap-y-4 p-3 rounded max-sm:w-[153px] max-sm:gap-y-3">
              <div className="flex justify-between items-center gap-x-2">
                <div className="flex gap-x-1">
                <Image
                  className="mr-1 max-sm:mr-0 max-sm:w-5 max-sm:h-5"
                  width={20}
                  height={10}
                  alt=""
                  src={humidityImg}
                />
                <p className="font-medium font-sans text-slate-500 max-sm:text-md dark:text-white">
                  Humidity
                </p>
                </div>
                <p className="font-medium font-sans text-blue-500 max-sm:text-md">{futureData.day.avghumidity}%</p>
              </div>
              <hr />
              <div className="flex justify-between items-center gap-x-2">
                <div className="flex gap-x-2">
                <Image
                  className="mr-1 max-sm:mr-0 max-sm:w-5 max-sm:h-5"
                  width={20}
                  height={10}
                  alt=""
                  src={wind}
                />
                <p className="font-medium font-sans text-slate-500 max-sm:text-md dark:text-white">
                  wind
                </p>
                </div>
                <p className="font-medium font-sans text-blue-500 max-sm:text-md">{futureData.day.maxwind_kph}kph</p>
              </div>
              <hr />
              <div className="flex justify-between items-center gap-x-2">
                <div className="flex gap-x-2">
                <Image
                  className="mr-1 max-sm:mr-0 max-sm:w-5 max-sm:h-5 self-center"
                  width={20}
                  height={10}
                  alt=""
                  src={rainChance}
                />
                <p className="font-medium font-sans text-slate-500 max-sm:text-md dark:text-white">
                  Rain
                </p>
                </div>
                <p className="font-medium font-sans text-blue-500 max-sm:text-md">{futureData.day.daily_chance_of_rain}%</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomAccordian;