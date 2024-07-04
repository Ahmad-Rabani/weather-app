"use client";

import React from "react";
import { Accordion } from "flowbite-react";
import { FiveDayForcastProps } from "@/type";
import humidityImg from "../../../img/humidityImg.png";
import Image from "next/image";
import sunrise from "../../../img/sunrise.png";
import sunset from "../../../img/sunset.png";
import wind from "../../../img/wind.png";

export function FutureData({ futureData }: FiveDayForcastProps) {
  return (
    <>
      <Accordion className="mt-2">
        <Accordion.Panel>
          <Accordion.Title className="bg-white justify-between">
            Date {futureData.date}
          </Accordion.Title>
          <Accordion.Content className="bg-white">
            <div className="flex justify-between">
              <div>
                <div>
                  <h2 className="text-xl font-medium font-sans text-blue-500 max-sm:text-sm">Celsius / Fehrenheit</h2>
                  <h1 className="text-4xl font-medium font-sans text-slate-500 max-sm:text-sm">
                    {futureData.day.maxtemp_c}&deg; / {futureData.day.maxtemp_f}&deg;
                  </h1>
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
              <div className="flex flex-col justify-center gap-y-2">
                <div className="flex">
                  <Image
                    className="mr-1 h-5 max-sm:mr-0 max-sm:w-4 max-sm:h-4"
                    width={20}
                    height={10}
                    alt=""
                    src={humidityImg}
                  />
                  <p className="text-medium font-medium font-sans text-slate-500 max-sm:text-sm">
                    Humidity {futureData.day.avghumidity}
                  </p>
                </div>

                <div className="flex">
                  <Image
                    className="mr-1 h-5 max-sm:mr-0 max-sm:w-4 max-sm:h-4"
                    width={20}
                    height={10}
                    alt=""
                    src={wind}
                  />
                  <p className="text-medium font-medium font-sans text-slate-500 max-sm:text-sm">
                    wind {futureData.day.maxwind_kph}
                  </p>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
}

export default FutureData;
