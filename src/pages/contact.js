import { PreFooter, Navbar, Footer, Contact } from "@/components";
import React from "react";

const contact = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <div className="my-52 p-20 char-background">
        <Contact />
      </div>

      <PreFooter />
      <Footer />
    </main>
  );
};

export default contact;
