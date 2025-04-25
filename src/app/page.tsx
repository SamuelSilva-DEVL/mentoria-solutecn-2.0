import Image from "next/image";
import { Hero } from "./_components/hero";
import { Modules } from "./_components/modules";
import Navbar from "./_components/header";
import Footer from "./_components/footer";
import FloatingButtons from "./_components/floatingButtons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Modules />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
