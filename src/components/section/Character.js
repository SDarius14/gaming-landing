import React from "react";
import CustomButton from "../CustomButton";

const Character = () => {
  const [
    { title: buttonTextPlay, variant: buttonVariantPlay },
    { title: buttonTextRead, variant: buttonVariantRead },
    { title: charTitle, subtitle: charSubtitle },
  ] = [
    {
      title: "Play Now",
      variant:
        "font-jakarta primary-btn xl:w-40 text-sm lg:text-base py-2 px-4 lg:py-4 lg:px-4",
    },
    {
      title: "Read More",
      variant:
        "font-jakarta secondary-btn xl:w-40 text-sm lg:text-base py-2 px-4 lg:py-4 lg:px-3",
    },
    {
      title: "Warrior",
      subtitle:
        "Warriors have always held a special place in the world of gaming. From epic battles on distant planets to historic clashes in ancient realms, the gaming world is filled with iconic warrior characters who have captured the hearts of players around the globe. Whether you prefer fantasy RPGs, intense first-person shooters, or strategy games, there's a warrior-themed game for everyone.",
    },
  ];

  return (
    <section className="char-background">
      <div className="char-container">
        <div className="char__warrior-container">
          <h1 className="char-title">{charTitle}</h1>
          <p className="char-subtitle">{charSubtitle}</p>
          <div className="char__button-container">
            <CustomButton title={buttonTextPlay} variant={buttonVariantPlay} />
            <CustomButton title={buttonTextRead} variant={buttonVariantRead} />
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
