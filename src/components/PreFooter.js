import React from "react";
import Image from "next/image";

const PreFooter = () => {
  const [{ title: preFooterTitle, subtitle: preFooterSubtitle }] = [
    {
      title: "Embark on your adventure.",
      subtitle:
        " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];
  return (
    <section className="pre-footer__container">
      <div className="pre-footer__container-content">
        <div className="relative pre-footer__container-image">
          <div className="three-eye absolute md:w-4/12 bottom-0 md:left-3 lg:left-0 xl:left-20 h-full lg:w-5/12"></div>
          <div className="pre-footer__text-container">
            <h1 className="pre-footer-title">{preFooterTitle}</h1>
            <p className="pre-footer-subtitle">{preFooterSubtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
