import React from "react";
import Image from "next/image";

const PreFooter = () => {
  return (
    <section className="p-36">
      <div className="pre-footer w-full">
        <div className="relative flex items-center justify-end p-10">
          <div className="three-eye absolute bottom-0 left-20 h-full w-5/12"></div>
          <div className="max-w-md">
            <h1 className="pre-footer-font font-creepster text-8xl">
              Embark on your adventure.
            </h1>
            <p className="pre-footer-font font-jakarta text-base">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
