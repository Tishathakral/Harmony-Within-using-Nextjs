import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import GuidedLessons from "./GuidedLessons";
import MeditationPlayer from "./MusicSound";
import FAQ from "./FAQ";
import Footer from "./Footer";
import ScrollToTopButton from "./Scrolltotop"

const HomePage = () => {
    return <div>
        <Header/>
        <Hero/>
        <div id="why" className=" text-center md:text-5xl md:my-16 text-2xl my-8 font-bold underline decoration-line">6 Reasons Why You should Meditate</div>
        <GuidedLessons />
        <MeditationPlayer />
        <FAQ />
        <Footer />
        <ScrollToTopButton/>
        </div>;
};

export default HomePage;