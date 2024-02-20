import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GuidedLessons from "@/components/GuidedLessons";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MeditationPlayer from "@/components/MusicSound";
import ScrollToTopButton from "@/components/Scrolltotop";
import React from "react";


function Page() {
  return (
    <div>
      <Header/>
      <Hero/>
      <div id="why" className=" text-center md:text-5xl md:my-16 text-2xl my-8 font-bold underline decoration-line">6 Reasons Why You should Meditate</div>
      <GuidedLessons/>
      <MeditationPlayer/>
      <FAQ/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  );
}
export default Page;