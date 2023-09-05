import React from "react";
import CustomButton from "../CustomButton";
import Image from "next/image";

const Event = () => {
  return (
    <section className="">
      <div
        className="min-h-screen mx-auto w-10/12 md:max-w-xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl
    flex flex-col justify-center items-center gap-10"
      >
        <h1 className="para font-creepster text-5xl">
          PRE REGISTER - NEW EVENT 2023
        </h1>
        <h2 className="para2 font-jakarta text-lg">
          Participate in the Pre-register event to be eligible for game item
          awards that will be given to all Monzy Forever Love players based on
          the milestone participation number.
        </h2>
        <div className="event w-full py-52"></div>
        <div className="flex gap-10">
          <CustomButton title="Follow Event" variant="primary-btn-sm" />
          <CustomButton title="Read More" variant="primary-btn-sm" />
        </div>
      </div>
    </section>
  );
};

export default Event;
