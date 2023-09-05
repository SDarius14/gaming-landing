import React from "react";
import CustomButton from "../CustomButton";
import CustomBar from "../CustomBar";

const Battle = () => {
  return (
    <section>
      <div
        className="min-h-screen mx-auto w-10/12 md:max-w-xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl
    flex flex-col justify-center items-center gap-10"
      >
        <div className="flex flex-row justify-between w-full items-center">
          <h1 className="para font-creepster w-8 text-8xl">
            Countless Battles
          </h1>
          <div className="">
            <p className="para2 font-jakarta w-96">
              Fight back the forces that threaten the world or test your might
              against other Adventurers. Lead your guild to victory in battle to
              earn great renown and greater wealth.
            </p>
            <CustomButton title="Learn More" variant="primary-btn-sm mt-5" />
          </div>
        </div>
        <div className="event w-full py-52"></div>
      </div>
      <CustomBar />
    </section>
  );
};

export default Battle;
