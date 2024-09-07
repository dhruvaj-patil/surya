import About from "../../Components/surya/AboutComponents/About";
import BrandCarousel from "../../Components/surya/Home/BrandCarousel";
import Counter from "../../Components/surya/Home/Counter";
import Hero from "../../Components/surya/Home/Hero";
import Services from "../../Components/surya/Home/Services";
import Testimonials from "../../Components/surya/Home/Testimonials";


const HomeOne = () => {
  return (
    <>
      <Hero />
      <Services />
      {/* <WorkProcess/> */}
      <About />
      {/* <ServicesOne/> */}

      {/* <CtaOne/>  */}
      {/* <Cta /> We should use CTA in Details pages*/}

      {/* Need to convert this into the ticker section */}
      <Counter/>

      {/* <FeaturesOne/> */}
      <BrandCarousel />
      <Testimonials />
      {/* <PortfolioOne/> */}
      {/* <TeamOne/> */}
      {/* <BlogOne/> */}
    </>
  );
};

export default HomeOne;
