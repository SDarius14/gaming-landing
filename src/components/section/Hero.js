import React from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";
import CustomBar from "../CustomBar";
import NavbarButton from "../NavbarButton";

const Hero = () => {
  return (
    <section>
      <div
        className="h-screen mx-auto w-10/12 md:max-w-xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl
    flex flex-col justify-center items-center"
      >
        <div
          className=" hero-section relative  
         "
        >
          <div className="flex flex-col gap-5">
            <span className="">
              <CustomButton title="MMORP MOBILE" variant="primary-btn-sm" />
            </span>

            <div className="para font-creepster text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <p>explore the world with your favorite characters.</p>
            </div>

            <div>
              <p className="para2 font-jakarta text-sm md:max-w-xs lg:max-w-xl 2xl:max-w-4xl md:text-base lg:text-lg 2xl:text-xl">
                In the MMORPG game Monyz, there are more than millions of
                characters with different hero roles that you can use to explore
                and get rare items by killing monsters and monster kings.
              </p>
            </div>
            <div className="card py-16 md:py-20 lg:py-26 xl:py-32 w-full lg:w-96 2xl:w-5/12 mt-10"></div>
          </div>
          <div className="absolute top-80 md:top-44 xl:top-52 2xl:top-32">
            <Image className="image object-contain" src="/monsterbg.png" fill />
          </div>
        </div>
      </div>
      <CustomBar />
    </section>
  );
};

export default Hero;
