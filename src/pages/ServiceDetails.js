import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import Header from '../Components/surya/Layout/Header/Header'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import Details from '../Components/Services/Details';

const ServiceDetails = () => {
  return (
    <>
        <PageBanner title='INTERIOR DESIGN' bannerBg={bannerBg} currentPage='SERVICE DETAILS' />
        <Details/>
    </>
  )
}

export default ServiceDetails;