import React, { useState } from "react";
import Image from "next/image";
import clear from "../../../img/clear.png";
import humidityimg from "../../../img/humidityImg.png";
import wind from "../../../img/wind.png";
import pressure from "../../../img/pressure.png";
import { AllTypes } from "@/type";

const Weather = ({data}: AllTypes ) => {
const [isCelsius , setIsCelsius] = useState<boolean | 0>(true);

const cityName = data.location.name;
const weatherCondition = data.current.condition.text;

function chagneUnit() {
  setIsCelsius(isCelsius ? data.current.temp_c && !isCelsius : data.current.temp_f && !isCelsius)
}

  return (
    <div className="w-[90%] bg-white rounded-xl p-4 max-sm:justify-center max-sm:items-center ">
      <div className="flex justify-between w-[95%] ml-6 pt-2 max-sm:ml-2">
        <h1 className="text-xl font-medium font-sans text-slate-500 max-sm:text-lg">Current Weather </h1>
        <div className="flex justify-center items-center">
        <span className="mr-2 text-sm font-medium text-gray-600 max-sm:text-[12px]">{isCelsius ? "Celsius" : "Fehrenheit"}</span>
        <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer"/>
      <div onClick={chagneUnit} className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
      </label>
        </div>
      </div>
      <br />

      <div className="flex justify-between w-[100%] flex-wrap">
        <div className="ml-3 max-sm:ml-0">
          <h2 className="text-lg font-bold font-mono text-slate-700 ml-6 text-[rgb(61,124,178)]">{cityName}</h2>

          <div className="flex ml-6">
            <Image src={clear} width={150} height={150} alt="" />
            <h1 className="text-7xl max-sm:text-3xl max-sm:self-start max-sm:ml-2 font-sans self-center ml-5 text-slate-500">{isCelsius ? data.current.temp_c : data.current.temp_f }&deg;</h1>
          </div>

          <h2 className="text-lg font-bold font-mono text-slate-500 ml-6 text-[rgb(122,154,184)]">
            {undefined ? "clear sky" : weatherCondition}
          </h2>
        </div>

        <div className="flex flex-col justify-center flex-nowrap gap-y-4 p-4 max-sm:flex-row max-sm:mt-5 md:flex-col lg:flex-col max-sm:gap-x-7 max-sm:p-2 max-sm:ml-0">
          <div className="flex justify-between flex-wrap gap-x-1">
            <div className="flex gap-x-2 max-sm:gap-x-0">
            <Image className="mr-1 max-sm:mr-0 max-sm:w-4 max-sm:h-4" width={20} height={15} alt="" src={humidityimg} />
            <h3 className="text-medium font-medium font-sans text-slate-500 max-sm:text-sm">Humidity</h3>
            </div>

         <p className="text-medium font-medium font-sans text-sky-500 ml-2 max-sm:ml-1">{data.current.humidity}%</p>
          </div>

          <div className="flex justify-between flex-wrap gap-px gap-x-1">
            <div className="flex gap-x-2 max-sm:gap-x-0">
            <Image className="mr-1 max-sm:mr-0 max-sm:w-4 max-sm:h-4" width={20} height={15} alt="" src={wind} />
            <h3 className="text-medium font-medium font-sans text-slate-500 max-sm:text-sm">Wind</h3>
            </div>
            
            <p className="text-medium font-medium font-sans text-sky-500 ml-2 max-sm:ml-1">{data.current.wind_kph}kph</p>
          </div>

          <div className="flex justify-between flex-wrap gap-px gap-x-1">
            <div className="flex gap-x-2 max-sm:gap-x-0">
            <Image className="mr-1 max-sm:mr-0 max-sm:w-4 max-sm:h-4" width={20} height={15} alt="" src={pressure} />
            <h3 className="text-medium font-medium font-sans text-slate-500 max-sm:text-sm">Pressure</h3>
            </div>
      
            <p className="text-medium font-medium font-sans text-sky-500 ml-2 max-sm:ml-1">{data.current.pressure_mb}kph</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
