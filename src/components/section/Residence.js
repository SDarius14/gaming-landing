import React from "react";
import CustomButton from "../CustomButton";
import PreFooter from "../PreFooter";
import { residenceDetails } from "../constant";

const Residence = () => {
  const [
    { title: buttonTextAll, variant: buttonVariantAll },
    {
      title: residenceTitle,
      subtitle: residenceSubtitle,
      imageUrlMonster: monsterImage,
    },
  ] = residenceDetails;

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
