import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import portfolioOneData from "./portfolioOneData";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

// Data
import { v4 as uuidv4 } from "uuid";
// import portfolio1 from "../../assets/img/project/1.jpg";
import portfolio2 from "../../../assets/img/project/2.jpg";
// import portfolio3 from "../../assets/img/project/3.jpg";
// import portfolio4 from "../../assets/img/project/4.jpg";

import sewage from "../../../assets/surya/images/demo_sewage.jpg";
import residential from "../../../assets/surya/images/demo_residential.jpg";
import commercial from "../../../assets/surya/images/demo_commercial.jpg";
import bungalow from "../../../assets/surya/images/demo_bunglow.jpg";
import industrial from "../../../assets/surya/images/demo_indsutrial.jpg";

import institutional from "../../../assets/surya/images/demo_building.jpg";

const DEFAULT_SERVICES = [
  {
    id: uuidv4(),
    img: industrial,
    category: "Construction Services",
    title: "<Place Name>",
    subCategory: "Industrial Buildings",
  },

  {
    id: uuidv4(),
    img: portfolio2,
    category: "Construction Services",
    title: "<Place Name>",
    subCategory: "PEB Structures",
  },

  {
    id: uuidv4(),
    img: portfolio2,
    category: "Construction Services",
    title: "<Place Name>",
    subCategory: "Water Treatment Plants",
  },

  {
    id: uuidv4(),
    img: sewage,
    category: "Construction Services",
    title: "<Place Name>",
    subCategory: "Sewage Treatment Plants",
  },

  {
    id: uuidv4(),
    img: institutional,
    category: "Construction Services",
    title: "<Place Name>",
    subCategory: "Commercial Buildings",
  },
  {
    id: uuidv4(),
    img: institutional,
    category: "Construction Services",
    title: "<Place Name>",
    subCategory: "Institutional Buildings",
  },
  {
    id: uuidv4(),
    img: bungalow,
    category: "Construction Services",
    title: "<Place Name>",
    subCategory: "Bungalows",
  },

  {
    id: uuidv4(),
    img: sewage,
    category: "Construction Services",
    title: "<Place Name>",
    subCategory: "Water Treatment Plants",
  },

  {
    id: uuidv4(),
    img: residential,
    category: "Structural Designing Services",
    title: "<Place Name>",
    subCategory: "Residential Buildings",
  },
  {
    id: uuidv4(),
    img: commercial,
    category: "Structural Designing Services",
    title: "<Place Name>",
    subCategory: "Commercial Buildings",
  },

  {
    id: uuidv4(),
    img: bungalow,
    category: "Decoration",
    title: "<Place Name>",
    subCategory: "Bungalows",
  },
];

function Services() {
  const [services, setServices] = useState(DEFAULT_SERVICES);
  const [activeCategory, setActiveCategory] = useState("All");
  console.log("🚀 ~ Services ~ activeCategory:", activeCategory);

  const _filterServices = (category) => {
    if (category === "All") {
      setServices(DEFAULT_SERVICES);
      setActiveCategory("All");
    } else {
      setServices(
        DEFAULT_SERVICES.filter((service) => service.category === category)
      );
      setActiveCategory(category);
    }
  };

  return (
    <section className="portfolio-carousel-wrapper clearfix section-padding">
      <SectionHeader
        title="Building Your World"
        subTitle="Comprehensive construction and design solutions."
      />
      <div className="container">
        <div className="row">
          <div
            className="btn-group sort-services"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className={`col-4 ${
                activeCategory === "All" ? 'active' : ""
              }`}
              onClick={() => _filterServices("All")}
            >
              All
            </button>
            <button
              type="button"
              className={`col-4 ${
                activeCategory === "Construction Services" ? 'active' : ""
              } `}
              onClick={() => _filterServices("Construction Services")}
            >
              Construction Services
            </button>
            <button
              type="button"
              className={`col-4 ${
                activeCategory === "Structural Designing Services" ? 'active' : ""
              } `}
              onClick={() => _filterServices("Structural Designing Services")}
            >
              Structural Designing Services
            </button>
          </div>
        </div>
      </div>

      <div className="portfolio-carousel-active">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: true,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: true,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {services.map((data) => (
            <SwiperSlide className="single-project-item" key={data.id}>
              <SRLWrapper>
                <a href={data.img}>
                  <div
                    className="project-img bg-cover bg-center"
                    style={{ backgroundImage: `url(${data.img})` }}
                  >
                    <div className="icon">
                      <i className="fal fa-plus"></i>
                      <span className="mx-2">Explore</span>
                    </div>
                  </div>
                </a>
                <div className="content-text">
                  <p>{data.subCategory}</p>
                  <h4>
                    <Link to="/projectDetails">{data.title}</Link>
                  </h4>
                  <span>{data.category}</span>
                </div>
              </SRLWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function SectionHeader({ title, subTitle }) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8 col-xl-7 col-12">
          <div className="block-contents">
            <div className="section-title">
              <span>{subTitle}</span>
              <h2>{title}</h2>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-3 offset-lg-1 col-xl-3 offset-xl-2 text-lg-end col-12">
                    <Link to="/projects" className="theme-btn">View More Projects</Link>
                </div> */}
      </div>
    </div>
  );
}

export default Services;
