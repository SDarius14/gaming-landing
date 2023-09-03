import React from "react";
import Image from "next/image";

const CustomBar = () => {
  return (
    <div className="bar font-creepster">
      <div className="flex flex-row items-center gap-3">
        <div className="whitespace-nowrap">
          <p>AVAILABLE IN APP STORE AND PLAYSTORE</p>
        </div>
        <span>
          <img
            class="object-contain"
            src="/rectangle.png"
            width="15"
            height="15"
          />
        </span>
        <div className="whitespace-nowrap">
          <p>AVAILABLE IN APP STORE AND PLAYSTORE</p>
        </div>
        <span>
          <img
            className="object-contain"
            src="/rectangle.png"
            width="15"
            height="15"
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
