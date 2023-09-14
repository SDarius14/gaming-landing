import React from "react";
import CustomButton from "../CustomButton";
import Image from "next/image";

const Event = () => {
  const [
    { title: buttonTextFollow, variant: buttonVariantFollow },
    { title: buttonTextRead, variant: buttonVariantRead },
    {
      title: eventTitle,
      subtitle: eventSubtitle,
      imageUrlMonster: monsterImage,
    },
  ] = [
    {
      title: "Follow Event",
      variant:
        "text-font-jakarta primary-btn text-sm lg:text-base py-2 px-4 lg:py-4 lg:px-6 xl:w-40",
    },
    {
      title: "Read More",
      variant:
        "font-jakarta secondary-btn text-sm lg:text-base py-2 px-4 lg:py-4 lg:px-6  xl:w-40",
    },
    {
      title: "PRE REGISTER - NEW EVENT 2023",
      subtitle:
        "Participate in the Pre-register event to be eligible for game item awards that will be given to all Monzy Forever Love players based on the milestone participation number.",
      imageUrlMonster: "/elephantmonster.png",
    },
  ];

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
