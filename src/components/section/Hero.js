import React from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";

const Hero = () => {
  return (
    // remove the gap
    <section
      className="h-screen mx-auto w-10/12 md:max-w-xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl
    flex flex-col justify-center items-center"
    >
      <div
        className=" hero-section relative  
         "
      >
        <div className="flex flex-col gap-5">
          <span>
            <CustomButton />
          </span>

          <div className="para font-creepster w-full lg:text-7xl xl:text-8xl 2xl:text-9xl ">
            <p>explore the world with your favorite characters.</p>
          </div>

          <div>
            <p className="para2 font-jakarta md:max-w-2xl lg:max-w-2xl 2xl:text-base">
              In the MMORPG game Monyz, there are more than millions of
              characters with different hero roles that you can use to explore
              and get rare items by killing monsters and monster kings.
            </p>
          </div>
          <div className="card py-16 md:py-20 lg:py-26 xl:py-32 w-full lg:w-96 2xl:w-5/12"></div>
        </div>
        <div className="lg:absolute hidden lg:right-0 lg:top-40 2xl:right-">
          <Image
            className="object-contain"
            src="/monsterbg.png"
            width={570}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
