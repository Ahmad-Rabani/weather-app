import React from "react";
import FiveDayForcast from "./FiveDayForcast";
import { AllTypes } from "@/type";

const FutureWeather = ({data}: AllTypes) => {
  return (
    <>
      <div className="w-[90%] ml-10 bg-white rounded-xl p-4 max-sm:ml-5 min-w-[400px]">
        <h1 className="text-xl font-medium font-sans text-slate-500 ml-6">
          Extended Forcast
        </h1>

        <div className="flex mt-3 justify-evenly flex-wrap">
         {data && data.forecast.forecastday.map((item) => <FiveDayForcast key={item.date} futureData={item}/>) }
        </div>

      </div>
    </>
  );
};

export default FutureWeather;
