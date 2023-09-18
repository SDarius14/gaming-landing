import React from "react";
import CustomButton from "../CustomButton";
import CustomBar from "../CustomBar";
import { battleDetails } from "../constant";

const Battle = () => {
  const [
    { title: buttonTextLearn, variant: buttonVariantLearn },
    {
      title: battleTitle,
      subtitle: battleSubtitle,
      imageUrlMonster: monsterImage,
    },
  ] = battleDetails;

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
