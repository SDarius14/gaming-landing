import React from "react";
import CustomButton from "../CustomButton";
import CustomBar from "../CustomBar";

const Battle = () => {
  return (
    <section>
      <div
        className="order min-h-screen mx-auto w-10/12 md:max-w-xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl
    flex flex-col justify-center gap-12 "
      >
        <div className="gap-4 flex flex-col flex-wrap md:flex-row justify-between items-center text-center md:text-left">
          <h1 className="para font-creepster text-5xl lg:w-2 lg:text-7xl xl:text-8xl">
            Countless Battles
          </h1>
          <div className="">
            <p className="para2 font-jakarta lg:w-96 text-base lg:text-lg">
              Fight back the forces that threaten the world or test your might
              against other Adventurers. Lead your guild to victory in battle to
              earn great renown and greater wealth.
            </p>
            <CustomButton
              title="Learn More"
              variant="font-jakarta primary-btn text-sm lg:text-base py-2 px-4 lg:py-4 lg:px-6 xl:w-40 mt-3 lg:mt-4"
            />
          </div>
        </div>
        <div className="battle w-full h-72 lg:h-96"></div>
      </div>
      <CustomBar />
    </section>
  );
};

export default Battle;
