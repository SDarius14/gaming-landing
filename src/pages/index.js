import Image from "next/image";
import {
  Navbar,
  Footer,
  Hero,
  Event,
  Character,
  Battle,
  Residence,
} from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <div>
        <Hero />
        <Event />
        <Character />
        <Battle />
        <Residence />
      </div>

      <Footer />
    </main>
  );
}
