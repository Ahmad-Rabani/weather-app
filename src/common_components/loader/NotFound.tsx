import React from "react";
import error from "../../../img/error-message.png";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="flex gap-x-3 items-center">
        <Image width={50} height={60} src={error} alt="" />
        <h1>City not found</h1>
      </div>
    </div>
  );
};

export default NotFound;
