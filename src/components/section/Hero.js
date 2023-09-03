import React from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";
import CustomBar from "../CustomBar";

const Hero = () => {
  return (
    <section className="h-screen mx-auto w-10/12 md:max-w-xl lg:max-w-screen-xl flex flex-col justify-center items-center lg:mt-10">
      <div
        className=" hero-section lg:relative  
         "
      >
        <div className="flex flex-col gap-2">
          <span>
            <CustomButton />
          </span>

          <div className="para font-creepster">
            <p>explore the world with your favorite characters.</p>
          </div>

          <div>
            <p className="para2 font-jakarta md:max-w-2xl lg:max-w-2xl">
              In the MMORPG game Monyz, there are more than millions of
              characters with different hero roles that you can use to explore
              and get rare items by killing monsters and monster kings.
            </p>
          </div>
          <div className="py-16 md:py-20 lg:py-24 border border-white w-full lg:w-96"></div>
        </div>
        <div className="lg:absolute lg:right-0 lg:top-64">
          <Image
            className="object-contain"
            src="/monsterbg.png"
            width={500}
            height={400}
          />
        </div>
      </div>
      <div className="mt-5">
        <CustomBar />
      </div>
    </section>
  );
};

export default Hero;
