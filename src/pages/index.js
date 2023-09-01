import Image from "next/image";
import { Navbar, Footer } from "@/components";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="h-screen"></div>
      <Footer />
    </main>
  );
}
