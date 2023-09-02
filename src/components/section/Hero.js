import React from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";
import CustomBar from "../CustomBar";

const Hero = () => {
  return (
    <section class="hero-section mx-auto max-w-7xl bg-clifford text-white  my-20 h-screen">
      <div class="flex flex-row mt-5 relative ">
        <div class="flex flex-col gap-2">
          <span>
            <CustomButton />
          </span>

          <p class="para font-creepster">explore the world</p>
          <p class="para font-creepster">with your favorite</p>
          <p class="para font-creepster">characters.</p>

          <p class="para2 font-jakarta">
            In the MMORPG game Monyz, there are more than millions of characters
          </p>
          <p class="para2 font-jakarta">
            with different hero roles that you can use to explore and get rare
            items by
          </p>
          <p class="para2 font-jakarta">killing monsters and monster kings.</p>
          <div class="py-24 border border-white w-96"></div>
        </div>
        <div class="absolute right-0 top-64">
          <Image
            className="object-contain"
            src="/monsterbg.png"
            width={550}
            height={550}
          />
        </div>
      </div>
      <div className="mt-10">
        <CustomBar />
      </div>
    </section>
  );
};

export default Hero;
