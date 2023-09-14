import React from "react";
import CustomButton from "../CustomButton";

const Character = () => {
  return (
    <section className="char-background">
      <div
        className="mx-auto w-10/12 2xl:h-screen md:max-w-xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-xl
    flex flex-col justify-between lg:flex-row items-center"
      >
        <div className="order-2 lg:order-1 my-10 md:my-16 lg:my-20 flex flex-col gap-10 lg:w-4/12 text-center">
          <h1 className="font-normal uppercase text-white font-creepster text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            Warrior
          </h1>
          <p className="font-normal text-white font-jakarta text-base leading-snug">
            Warriors have always held a special place in the world of gaming.
            From epic battles on distant planets to historic clashes in ancient
            realms, the gaming world is filled with iconic warrior characters
            who have captured the hearts of players around the globe. Whether
            you prefer fantasy RPGs, intense first-person shooters, or strategy
            games, there's a warrior-themed game for everyone.
          </p>
          <div className="flex gap-5 mx-auto ">
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
        <div className="mt-10 lg:mt-0 order-1 lg:order-2 grid md:grid-cols-2 lg:grid-cols-3">
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
