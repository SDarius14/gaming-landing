import React from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";
import CustomBar from "../CustomBar";
import NavbarButton from "../NavbarButton";

const Hero = () => {
  return (
    <section>
      <div
        className="mt-24 md:mt-28 lg:mt-3 lg:h-screen mx-auto w-10/12 md:max-w-xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl
    flex flex-col lg:justify-end items-center gap-5 xl:gap-8 2xl:gap-20"
      >
        <div
          className=" hero-section relative  
         "
        >
          <div className="flex flex-col gap-2 ">
            <span className="">
              <CustomButton
                title="MMORP MOBILE"
                variant="font-jakarta primary-btn-sm text-sm lg:text-base py-1 px-2"
              />
            </span>

            <div className="para mb-3 font-creepster text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <p>explore the world with your favorite characters.</p>
            </div>

            <div>
              <p className="para2 lg:text-left font-jakarta text-sm md:max-w-xs lg:max-w-xl 2xl:max-w-4xl md:text-base lg:text-lg 2xl:text-xl">
                In the MMORPG game Monyz, there are more than millions of
                characters with different hero roles that you can use to explore
                and get rare items by killing monsters and monster kings.
              </p>
            </div>
            <div className="relative card hero-bg p-24 md:p-36 lg:p-32 xl:p-44 2xl:p-0 2xl:h-72 lg:w-3/5 2xl:max-w-2xl mt-5 md:mt-10">
              <img
                className="hero-button absolute"
                src="/playbutton.png"
                alt=""
              />
            </div>
          </div>
          <div className="monster absolute">
            <img className="" src="/monsterbg.png" alt="" />
          </div>
        </div>
        <div className="">
          <CustomBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
