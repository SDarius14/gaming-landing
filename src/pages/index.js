import Image from "next/image";
import { Navbar, Footer, Hero } from "@/components";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div>
        <Hero />
      </div>

      <Footer />
    </main>
  );
}
