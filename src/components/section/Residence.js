import React from "react";
import CustomButton from "../CustomButton";
import PreFooter from "../PreFooter";

const Residence = () => {
  return (
    <section className="residence-background">
      <div
        className="min-h-screen mx-auto w-10/12 md:max-w-xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl
    flex flex-row justify-center items-center gap-5"
      >
        <div className="flex flex-col gap-6">
          <h1 className="para font-creepster w-0 text-8xl">
            Endless Possibilities
          </h1>
          <p className="para2 font-jakarta w-3/4 text-xl">
            Cozy up in your uniquely decorated residence, sit and listen to
            insects around a campfire, embark on a fishing trip with friends, or
            become a talented alchemist.
          </p>
          <div>
            <CustomButton
              title="See All"
              variant="font-jakarta primary-btn xl:w-40"
            />
          </div>
        </div>
        <div className="residence px-80 py-52"></div>
      </div>
      <PreFooter />
    </section>
  );
};

export default Residence;
