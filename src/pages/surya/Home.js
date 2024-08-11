import AboutOne from "../../Components/About/AboutOne";
import BlogOne from "../../Components/Blog/BlogOne";
import BrandCarouselOne from "../../Components/Brands/BrandCarouselOne";
import CtaOne from "../../Components/Cta/CtaOne";
import FaqOne from "../../Components/Faq/FaqOne";
import FeaturesOne from "../../Components/Features/FeaturesOne";
import FooterOne from "../../Components/Footer/FooterOne";
import HeaderOne from "../../Components/Header/HeaderOne";
import HeroOne from "../../Components/Hero/HeroOne";
import HeroSocials from "../../Components/Hero/HeroSocials";
import PortfolioOne from "../../Components/Portfolio/PortfolioOne";
import ServicesOne from "../../Components/Services/ServicesOne";
import TeamOne from "../../Components/Team/TeamOne";
import TestimonialOne from "../../Components/Testimonial/TestimonialOne";
import WorkProcess from "../../Components/Work/WorkProcess";
import Header from "../../Components/surya/Header";
import Hero from "../../Components/surya/Hero";
import Services from "../../Components/surya/Services";





const HomeOne = () => {
    return (
        <>
        <Header/>
        <Hero/>
        <Services />
        <WorkProcess/>
        <AboutOne/>
        <ServicesOne/>
        <CtaOne/>
        <FeaturesOne/>
        <BrandCarouselOne/>
        <TestimonialOne/>
        <PortfolioOne/>
        <TeamOne/>
        <FaqOne/>
        <BlogOne/>
        <FooterOne/>
        </>
    )
}

export default HomeOne;