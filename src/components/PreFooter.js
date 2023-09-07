import React from "react";
import Image from "next/image";

const PreFooter = () => {
  return (
    <section className="p-10">
      <div className="pre-footer mx-auto w-10/12 md:max-w-xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-screen-2xl">
        <div className="relative flex items-center justify-end p-4 md:p-6 lg:p-10 xl:p-14 2xl:p-28">
          <div className="three-eye absolute md:w-4/12 bottom-0 md:left-3 lg:left-0 xl:left-20 h-full lg:w-5/12"></div>
          <div className="md:max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-2xl md:text-left text-center">
            <h1 className="pre-footer-font font-creepster text-3xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl ">
              Embark on your adventure.
            </h1>
            <p className="mt-5 md:mt-0 pre-footer-font font-jakarta text-sm md:text-sm lg:text-base max-w-xl">
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
