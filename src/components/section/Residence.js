import React from "react";
import CustomButton from "../CustomButton";
import PreFooter from "../PreFooter";

const Residence = () => {
  return (
    <section className="residence-background">
      <div
        className="min-h-screen mx-auto w-10/12 md:max-w-xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl
    flex flex-col lg:flex-row justify-center items-center gap-7 md:gap-12 lg:gap-2"
      >
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <h1 className="para font-creepster lg:w-0 text-5xl lg:text-7xl xl:text-8xl">
            Endless Possibilities
          </h1>
          <p className="para2 font-jakarta lg:w-3/4 text-base lg:text-lg xl:text-xl">
            Cozy up in your uniquely decorated residence, sit and listen to
            insects around a campfire, embark on a fishing trip with friends, or
            become a talented alchemist.
          </p>
          <div className="text-center lg:text-left">
            <CustomButton
              title="See All"
              variant=" font-jakarta primary-btn text-sm lg:text-base py-2 px-4 lg:py-4 lg:px-6 xl:w-40"
            />
          </div>
        </div>
        <div className="residence w-full h-96 order-1 lg:order-2"></div>
      </div>
      <PreFooter />
    </section>
  );
};

export default Residence;
