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
import Contacts from "./_components/contacts";
import AboutRole from "./_components/aboutRole";
import SearchJob from "./_components/searchJob";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutRole />
        <Modules />
        <Benefits />
        <SearchJob />
        <Contacts />
        {/* <Testimonials /> */}
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
