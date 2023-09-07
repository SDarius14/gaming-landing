import React from "react";
import Image from "next/image";

const CustomBar = () => {
  return (
    <div className="bar font-creepster text-2xl md:text-4xl lg:text-5xl">
      <div className="flex flex-row items-center gap-3">
        <div className="whitespace-nowrap">
          <p>AVAILABLE IN APP STORE AND PLAYSTORE</p>
        </div>
        <span>
          <img class="object-contain w-4 md:w-6 lg:w-8" src="/rectangle.png" />
        </span>
        <div className="whitespace-nowrap">
          <p>AVAILABLE IN APP STORE AND PLAYSTORE</p>
        </div>
        <span>
          <img
            className="object-contain w-4 md:w-6 lg:w-8"
            src="/rectangle.png"
          />
        </span>
        <div className="whitespace-nowrap truncate overflow-hidden">
          <p>AVAILABLE IN APP STORE AND PLAYSTORE</p>
        </div>
      </div>
    </div>
  );
};

export default CustomBar;
