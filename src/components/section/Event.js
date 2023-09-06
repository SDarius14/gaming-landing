import React from "react";
import CustomButton from "../CustomButton";
import Image from "next/image";

const Event = () => {
  return (
    <section>
      <div
        className="relative min-h-screen mx-auto w-10/12 md:max-w-xl lg:max-w-4xl xl:max-w-6xl 
    flex flex-col justify-center items-center xl:gap-14"
      >
        <h1 className="para font-creepster items-center text-4xl w-56 lg:w-auto xl:text-6xl">
          PRE REGISTER - NEW EVENT 2023
        </h1>
        <h2 className="para2 font-jakarta text-center w-auto xl:w-3/5">
          Participate in the Pre-register event to be eligible for game item
          awards that will be given to all Monzy Forever Love players based on
          the milestone participation number.
        </h2>
        <div className="event w-full h-72 lg:h-80 xl:h-96"></div>
        {/* <Image
          className="absolute top-5 left-5"
          src="/elephantmonster.png"
          fills
        /> */}
        <div className="flex gap-2 lg:gap-5 xl:gap-10">
          <CustomButton
            title="Follow Event"
            variant="font-jakarta primary-btn xl:w-40"
          />
          <CustomButton
            title="Read More"
            variant="font-jakarta primary-btn xl:w-40"
          />
        </div>
      </div>
    </section>
  );
};

export default Event;
