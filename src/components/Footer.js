import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 p-6 lg:px-20 lg:py-10 text-white">
      <div>
        <Image
          className="object-contain"
          src="/KNIGHTING.png"
          width={100}
          height={20}
        />
      </div>
      <div className="flex flex-row justify-between items-center text-white">
        <div className="flex flex-row gap-24">
          <div>
            <h3>Contact</h3>
            <p>(034) 6633 1224</p>
            <p>(034) 2334 1234</p>
          </div>
          <div>
            <h3>Address</h3>
            <p>944 Ritchie Creek Turcottefort</p>
            <p>Kentucky 13329-4141</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <button>Download Now</button>
          <div className="flex gap-3">
            <span className="border px-10 py-4 border-white"></span>
            <span className="border px-10 py-4 border-white"></span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-white">
        <p>Knighting© 2021-2022, All Rights Reserved</p>
        <div className="flex flex-row gap-5">
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
