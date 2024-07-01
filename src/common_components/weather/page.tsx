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
    <div className="w-[90%] ml-10 bg-white rounded-xl p-4 min-w-[400px] max-sm:ml-5">
      <div className="flex justify-between w-[95%] ml-6 pt-2">
        <h1 className="text-xl font-medium font-sans text-slate-500">Current Weather </h1>
        <div className="flex justify-center items-center">
        <span className="mr-2 text-sm font-medium text-gray-600 ">{isCelsius ? "Celsius" : "Fehrenheit"}</span>
        <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer"/>
      <div onClick={chagneUnit} className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
      </label>
        </div>
      </div>
      <br />

      <div className="flex justify-between w-[95%] flex-wrap">
        <div className="ml-3">
          <h2 className="text-lg font-bold font-mono text-slate-700 ml-6 text-[rgb(61,124,178)]">{cityName}</h2>

          <div className="flex ml-6">
            <Image src={clear} width={150} height={150} alt="" />
            <h1 className="text-7xl font-sans self-center ml-5 text-slate-500">{isCelsius ? data.current.temp_c : data.current.temp_f }&deg;</h1>
          </div>

          <h2 className="text-lg font-bold font-mono text-slate-500 ml-6 text-[rgb(122,154,184)]">
            {undefined ? "clear sky" : weatherCondition}
          </h2>
        </div>

        <div className="flex flex-col justify-center flex-wrap gap-y-4 max-sm:flex-row max-sm:mt-3 md:flex-col lg:flex-col max-sm:gap-x-4">
          <div className="flex gap-x-1">
            <Image className="mr-1 max-sm:mr-0" width={20} height={15} alt="" src={humidityimg} />
            <h3 className="text-medium font-medium font-sans text-slate-500">Humidity <span className="text-sky-500 ml-2 max-sm:ml-1">{data.current.humidity}</span></h3>
          </div>

          <div className="flex gap-px gap-x-1">
            <Image className="mr-1 max-sm:mr-0" width={20} height={15} alt="" src={wind} />
            <h3 className="text-medium font-medium font-sans text-slate-500">Wind <span className="text-sky-500 ml-2 max-sm:ml-1">{data.current.wind_kph}</span></h3>
          </div>

          <div className="flex gap-px gap-x-1">
            <Image className="mr-1 max-sm:mr-0" width={20} height={15} alt="" src={pressure} />
            <h3 className="text-medium font-medium font-sans text-slate-500">Pressure <span className="text-sky-500 ml-2 max-sm:ml-1">{data.current.pressure_mb}</span></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
