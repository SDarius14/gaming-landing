import React from "react";
import CustomButton from "../CustomButton";
import CustomBar from "../CustomBar";

const Battle = () => {
  const [
    { title: buttonTextLearn, variant: buttonVariantLearn },
    {
      title: battleTitle,
      subtitle: battleSubtitle,
      imageUrlMonster: monsterImage,
    },
  ] = [
    {
      title: "Learn More",
      variant:
        "font-jakarta primary-btn text-sm lg:text-base py-2 px-4 lg:py-4 lg:px-6 xl:w-40 mt-3 lg:mt-4",
    },
    {
      title: "Countless Battles",
      subtitle:
        "Fight back the forces that threaten the world or test your might against other Adventurers. Lead your guild to victory in battle to earn great renown and greater wealth.",
      imageUrlMonster: "/eelmonster.png",
    },
  ];

  return (
    <section>
      <div className="order battle-container">
        <div className="battle__text-container">
          <h1 className="battle_title"> {battleTitle} </h1>
          <div>
            <p className="battle_subtitle"> {battleSubtitle} </p>
            <CustomButton
              title={buttonTextLearn}
              variant={buttonVariantLearn}
            />
          </div>
        </div>
        <div className="battle relative battle__image-container">
          <div className="absolute -bottom-14 -left-16 lg:-bottom-20 lg:-left-24">
            <img className="battle__monster-image" src={monsterImage} alt="" />
          </div>
        </div>
      </div>
      <CustomBar />
    </section>
  );
};

export default Battle;
