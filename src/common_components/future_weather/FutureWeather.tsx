import React from "react";
import FiveDayForcast from "./FiveDayForcast";
import { AllTypes } from "@/type";
import { Calendar } from "lucide-react";

const FutureWeather = ({ data }: AllTypes) => {
  return (
    <div className="w-full max-w-2xl">
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            5-Day Forecast
          </h1>
        </div>

        {/* Forecast Cards Container */}
        <div className="relative">
          {/* Desktop/Tablet Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {data &&
              data.forecast.forecastday.map(
                (item, index) =>
                  index < 5 && (
                    <FiveDayForcast key={item.date} futureData={item} />
                  )
              )}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="sm:hidden relative">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {data &&
                data.forecast.forecastday.map(
                  (item, index) =>
                    index < 5 && (
                      <div key={item.date} className="snap-center flex-shrink-0">
                        <FiveDayForcast futureData={item} />
                      </div>
                    )
                )}
            </div>
            
            {/* Scroll Indicators */}
            <div className="flex justify-center gap-2 mt-2">
              {data &&
                data.forecast.forecastday.map(
                  (item, index) =>
                    index < 5 && (
                      <div
                        key={`dot-${item.date}`}
                        className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"
                      ></div>
                    )
                )}
            </div>
          </div>
        </div>

        {/* Info Text */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
            Swipe to view more forecasts on mobile
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default FutureWeather;