import Image from "next/image";
import { Navbar, Footer, Hero } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <div>
        <Hero />
      </div>

      <Footer />
    </main>
  );
}
