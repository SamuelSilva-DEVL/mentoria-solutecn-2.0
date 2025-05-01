import Image from "next/image";
import { Hero } from "./_components/hero";
import { Modules } from "./_components/modules";
import Navbar from "./_components/header";
import Footer from "./_components/footer";
import FloatingButtons from "./_components/floatingButtons";
import { Benefits } from "./_components/benefits";
import { AboutMentor } from "./_components/aboutMentor";
import ValueCourse from "./_components/valueCourse";
import { Testimonials } from "./_components/tetimonial";
import CourseGuarantee from "./_components/courseGuarantee";
import Faq from "./_components/faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Modules />
        <Benefits />
        <Testimonials />
        <AboutMentor />
        <ValueCourse />
        <CourseGuarantee />
        <Faq />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
