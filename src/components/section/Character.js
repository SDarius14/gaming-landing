import React from "react";
import CustomButton from "../CustomButton";

const Character = () => {
  return (
    <section className="char-background">
      <div
        className="min-h-screen mx-auto w-10/12 md:max-w-xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl
    flex flex-row justify-center items-center gap-10"
      >
        <div className="flex flex-col gap-5 w-4/12">
          <h1 className="para font-creepster text-8xl">Warrior</h1>
          <p className="para2 font-jakarta leading-snug">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
          </p>
          <div className="flex gap-5">
            <CustomButton
              title="Play Now"
              variant="font-jakarta primary-btn xl:w-40"
            />
            <CustomButton
              title="Read More"
              variant="font-jakarta primary-btn xl:w-40"
            />
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="py-20 px-20 border border-black"></div>
          <div className="py-20 px-20 border border-black"></div>
          <div className="py-20 px-20 border border-black"></div>
          <div className="py-20 px-20 border border-black"></div>
          <div className="py-20 px-20 border border-black"></div>
          <div className="py-20 px-20 border border-black"></div>
          <div className="py-20 px-20 border border-black"></div>
          <div className="py-20 px-20 border border-black"></div>
          <div className="py-20 px-20 border border-black"></div>
        </div>
      </div>
    </section>
  );
};

export default Character;
