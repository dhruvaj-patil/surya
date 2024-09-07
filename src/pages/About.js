import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import HeaderOne from '../Components/Header/HeaderOne'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import AboutOne from '../Components/About/AboutOne';
import AboutBanner from '../Components/About/AboutBanner';
import Timeline from '../Components/Timeline';
import TeamThree from '../Components/Team/TeamThree';
import BrandCarouselThree from '../Components/Brands/BrandCarouselThree';
import Skill from '../Components/Skills/Skill';
// import Header from "../Components/surya/Header";


const aboutData = {
  title: 'About us',
  heading: 'About us',
  currentPage: 'About'
}

const About = () => {
  return (
    <>
        <HeaderOne/>
        {/* <Header /> */}
        <PageBanner title='About us' bannerBg={bannerBg} currentPage='About' />
        <AboutOne pt data={aboutData} />
        <AboutBanner/>
        <Timeline/>
        <Skill/>
        <TeamThree/>
        <BrandCarouselThree/>
        <FooterTwo/>
    </>
  )
}

export default About