import React from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";
import CustomBar from "../CustomBar";
import NavbarButton from "../NavbarButton";

const Hero = () => {
  const [
    { title: buttonText, variant: buttonVariant },
    {
      title: heroTitle,
      subtitle: heroSubtitle,
      imageUrlButton: playButtonImage,
      imageUrlMonster: monsterImage,
    },
  ] = [
    {
      title: "MMORP MOBILE",
      variant: "font-jakarta primary-btn-sm text-sm lg:text-base py-1 px-2",
    },
    {
      title: "explore the world with your favorite characters.",
      subtitle:
        "In the MMORPG game Monyz, there are more than millions of characters with different hero roles that you can use to explore and get rare items by killing monsters and monster kings.",
      imageUrlButton: "/playbutton.png",
      imageUrlMonster: "/monster.png",
    },
  ];

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
