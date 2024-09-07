import React from "react";
import Header from "../../Components/surya/Layout/Header/Header";
import PageBanner from "../../Components/PageBanner";
import AboutOne from "../../Components/About/AboutOne";
import AboutBanner from "../../Components/surya/AboutComponents/AboutBanner";
import Timeline from "../../Components/surya/Home/Timeline";
import Skill from "../../Components/Skills/Skill";
import TeamThree from "../../Components/Team/TeamThree";
import BrandCarouselThree from "../../Components/Brands/BrandCarouselThree";
import FooterTwo from "../../Components/Footer/FooterTwo";
import bannerBg from '../../assets/img/page-banner.jpg';
import About from "../../Components/surya/AboutComponents/About";
import VisionMission from "../../Components/surya/Home/VisionMission";
import Footer from "../../Components/surya/Footer/Footer";

const aboutData = {
  title: 'Surya Engineers and Contractors Pvt. Ltd.',
  subtitle: 'Building Excellence Since 1968',
  description: 'Surya Engineers and Contractors Pvt. Ltd., headquartered in Pune, Maharashtra, is a distinguished general contractor with a rich legacy spanning over 55 years. We specialize in a diverse range of construction projects, including industrial construction, hydraulic structures, commercial and institutional buildings, and residential construction. Our dedication to excellence and quality has built enduring relationships with over 10 repeat clients over five decades, reflecting our commitment to long-term asset creation and unwavering customer satisfaction.',
  button: null,
}

function AboutPage() {
  return (
    <>
      {/* <HeaderOne/> */}
      {/* <Header /> */}
      <PageBanner title="About us" bannerBg={bannerBg} currentPage="About" />
      <About pt data={aboutData} />
      <AboutBanner data={{title: 'History'}} />
      <Timeline />
      <VisionMission />
      
      {/* <Skill /> */}
      <TeamThree />
      {/* <BrandCarouselThree /> */}
      {/* <Footer /> */}
    </>
  );
}

export default AboutPage;
