import React from "react";
import CustomButton from "../CustomButton";
import PreFooter from "../PreFooter";

const Residence = () => {
  const [
    { title: buttonTextAll, variant: buttonVariantAll },
    {
      title: residenceTitle,
      subtitle: residenceSubtitle,
      imageUrlMonster: monsterImage,
    },
  ] = [
    {
      title: "See All",
      variant:
        "font-jakarta primary-btn text-sm lg:text-base py-2 px-4 lg:py-4 lg:px-6 xl:w-40",
    },
    {
      title: "Endless Possibilities",
      subtitle:
        "Cozy up in your uniquely decorated residence, sit and listen to insects around a campfire, embark on a fishing trip with friends, or become a talented alchemist.",
      imageUrlMonster: "/batmonster.png",
    },
  ];

  return (
    <section className="residence-background">
      <div className="residence-container">
        <div className="residence__text-container">
          <h1 className="residence-title">{residenceTitle}</h1>
          <p className="residence-subtitle">{residenceSubtitle}</p>
          <div className="residence__button-container">
            <CustomButton title={buttonTextAll} variant={buttonVariantAll} />
          </div>
        </div>
        <div className="residence__image-container">
          <div className="absolute -bottom-20 -right-16 md:-right-24 lg:-right-24 xl:-right-32  2xl:-right-48">
            <img
              className="residence__monster-image"
              src={monsterImage}
              alt=""
            />
          </div>
        </div>
      </div>
      <PreFooter />
    </section>
  );
};

export default Residence;
