import React from "react";
import FiveDayForcast from "./FiveDayForcast";
import { AllTypes } from "@/type";

const FutureWeather = ({data}: AllTypes) => {
  return (
    <>
      <div className="w-[90%] bg-white rounded-xl p-4 flex justify-center items-center flex-col dark:bg-slate-950">
        <h1 className="text-xl font-medium font-sans text-slate-500 ml-6 dark:text-white">
          Extended Forcast
        </h1>
        <br />
        <div className="flex w-full mt-3 justify-evenly flex-wrap gap-4 max-md:w-1/2 max-sm:overflow-x-scroll max-sm:w-full max-sm:flex-nowrap">
         {data && data.forecast.forecastday.map((item,index) => index < 5 && <FiveDayForcast key={item.date} futureData={item}/>) }
        </div>

      </div>
    </>
  );
};

export default FutureWeather;
