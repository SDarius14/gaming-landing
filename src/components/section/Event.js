import React from "react";
import CustomButton from "../CustomButton";
import Image from "next/image";
import { eventDetails } from "../constant";

const Event = () => {
  const [
    { title: buttonTextFollow, variant: buttonVariantFollow },
    { title: buttonTextRead, variant: buttonVariantRead },
    {
      title: eventTitle,
      subtitle: eventSubtitle,
      imageUrlMonster: monsterImage,
    },
  ] = eventDetails;

  return (
    <section>
      <div className="event-container">
        <h1 className="event-title">{eventTitle}</h1>
        <h2 className="event-subtitle">{eventSubtitle}</h2>
        <div className="relative event event__image-container">
          <div className="absolute event__monster-container -left-7 xl:-left-10 2xl-left-10">
            <img
              className="event__elephant-monster"
              src={monsterImage}
              alt=""
            />
          </div>
        </div>
        <div className="event__button-container">
          <CustomButton
            title={buttonTextFollow}
            variant={buttonVariantFollow}
          />
          <CustomButton title={buttonTextRead} variant={buttonVariantRead} />
        </div>
      </div>
    </section>
  );
};

export default Event;
