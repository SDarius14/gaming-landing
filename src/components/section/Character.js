import React from "react";
import CustomButton from "../CustomButton";

const Character = () => {
  return (
    <section className="char-background">
      <div
        className="min-h-screen mx-auto w-10/12 md:max-w-xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl
    flex flex-col justify-center lg:flex-row items-center gap-10"
      >
        <div className="flex flex-col gap-5 lg:w-4/12 text-center">
          <h1 className="para font-creepster text-5xl lg:text-7xl xl:text-8xl">
            Warrior
          </h1>
          <p className="para2 font-jakarta text-base leading-snug">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
          </p>
          <div className="flex gap-5 mx-auto">
            <CustomButton
              title="Play Now"
              variant="font-jakarta primary-btn xl:w-40 text-sm lg:text-base py-2 px-4 lg:py-4 lg:px-4"
            />
            <CustomButton
              title="Read More"
              variant="font-jakarta secondary-btn xl:w-40 text-sm lg:text-base py-2 px-4 lg:py-4 lg:px-3"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="py-20 px-20 border border-black"></div>
        </div>
      </div>
    </section>
  );
};

export default Character;
