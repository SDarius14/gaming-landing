import React from "react";
import CustomButton from "../CustomButton";
import { eventDetails } from "../constant";

const Character = () => {
  const [
    { title: buttonTextPlay, variant: buttonVariantPlay },
    { title: buttonTextRead, variant: buttonVariantRead },
    { title: charTitle, subtitle: charSubtitle },
  ] = eventDetails;

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
