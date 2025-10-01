import React from 'react';
import { AllTypes } from '@/type';
import CustomAccordian from './CustomAccordian';
import { CalendarDays, TrendingUp } from 'lucide-react';

const Accordian = ({ data }: AllTypes) => {
  return (
    <div className="w-full max-w-2xl mb-8">
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300">
        {/* Header Section */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
            <CalendarDays className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              10-Day Forecast
            </h1>
            <div className="flex items-center justify-center gap-2 mt-1">
              <TrendingUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Extended Weather Details
              </p>
            </div>
          </div>
        </div>

        {/* Accordion Items Container */}
        <div className="space-y-3">
          {data &&
            data.forecast.forecastday.map((item, index) => (
              <div
                key={item.date}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CustomAccordian futureData={item} />
              </div>
            ))}
        </div>

        {/* Footer Info */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <p>Tap any day to view detailed hourly forecast</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Accordian;