import Image from "next/image";
import { Hero } from "./_components/hero";
import { Modules } from "./_components/modules";
import Navbar from "./_components/header";
import Footer from "./_components/footer";
import FloatingButtons from "./_components/floatingButtons";
import { Benefits } from "./_components/benefits";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Modules />
        <Benefits />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
