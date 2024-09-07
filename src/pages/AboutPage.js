import React from "react";
import AboutBanner from "../Components/surya/AboutComponents/AboutBanner";
import Timeline from "../Components/surya/Home/Timeline";
/* The line `import TeamThree from "../../Components/Team/TeamThree";` is importing the `TeamThree`
component from the file located at "../../Components/Team/TeamThree". This allows the `TeamThree`
component to be used within the `AboutPage` component for rendering purposes. */
// import TeamThree from "../../Components/Team/TeamThree";
import bannerBg from '../assets/img/page-banner.jpg';
import About from "../Components/surya/AboutComponents/About";
import VisionMission from "../Components/surya/Home/VisionMission";
import PageBanner from "../Components/surya/Home/PageBanner";
import Team from "../Components/surya/AboutComponents/Team";

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
      <Team />
      {/* <BrandCarouselThree /> */}
      {/* <Footer /> */}
    </>
  );
}

export default AboutPage;
