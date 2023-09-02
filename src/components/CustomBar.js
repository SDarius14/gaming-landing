import React from "react";
import Image from "next/image";

const CustomBar = () => {
  return (
    <div className="bar flex flex-row gap-3 items-center font-creepster">
      <h1>AVAILABLE IN APP STORE AND PLAYSTORE </h1>
      <span>
        <Image
          className="object-contain "
          src="/rectangle.png"
          width={15}
          height={15}
        />
      </span>
      <h1>AVAILABLE IN APP STORE AND PLAYSTORE </h1>
    </div>
  );
};

export default CustomBar;
