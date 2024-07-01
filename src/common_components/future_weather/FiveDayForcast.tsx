import React, { useEffect, useState } from "react";
import Image from "next/image";
import rain from "../../../img/rain.png";
import sunny from "../../../img/sunny.png";
import cloud from "../../../img/cloud.png";
import { FiveDayForcastProps } from "@/type";

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const FiveDayForcast = ({ futureData }: FiveDayForcastProps) => {
  const [icon, setIcon] = useState(sunny);

  const d = new Date(futureData.date);
  const day = d.getDay();

  useEffect(() => {
    function icons() {
      if (futureData.day.condition.text === "Patchy rain nearby") {
        setIcon(rain);
      } else if (futureData.day.condition.text === "Partly Cloudy") {
        setIcon(cloud);
      } else if (futureData.day.condition.text === "Sunny") {
        setIcon(sunny);
      }
    }
    icons();
  }, [futureData.day.condition.text]);

  return (
    <div className="flex flex-col items-center text-center">
      <h4 className="text-sky-500 font-bold">{weekday[day]}</h4>
      <Image className="mt-3" width={60} height={60} src={icon} alt="" />
      <h3 className="text-[rgb(76,131,192)] text-sm font-semibold mt-3">
        {futureData.day.condition.text}
      </h3>
      <p className="font-sans text-slate-500">
        {futureData.day.maxtemp_c}&deg;/{futureData.day.maxtemp_f}&deg;
      </p>
    </div>
  );
};

export default FiveDayForcast;
