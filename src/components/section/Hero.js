import React from "react";
import Image from "next/image";
import NavbarButton from "../NavbarButton";
import CustomButton from "../CustomButton";
import CustomBar from "../CustomBar";
import { heroDetails } from "../constant";

const Hero = () => {
  const [
    { title: buttonText, variant: buttonVariant },
    {
      title: heroTitle,
      subtitle: heroSubtitle,
      imageUrlButton: playButtonImage,
      imageUrlMonster: monsterImage,
    },
  ] = heroDetails;

  return (
    <section>
      <div className="hero-container">
        <div className="relative">
          <div className="hero-button__container">
            <span>
              <CustomButton title={buttonText} variant={buttonVariant} />
            </span>

            <div className="hero-title">
              <h1>{heroTitle}</h1>
            </div>

            <div>
              <p className="hero-subtitle">{heroSubtitle}</p>
            </div>
            <div className="hero-video__container">
              <img
                className="absolute hero-button "
                src={playButtonImage}
                alt=""
              />
            </div>
          </div>
          <div className="absolute monster">
            <img className="" src={monsterImage} alt="" />
          </div>
        </div>
        <div>
          <CustomBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
