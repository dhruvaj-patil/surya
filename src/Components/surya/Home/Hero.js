import { Swiper, SwiperSlide } from "swiper/react";
import slide2 from "../../../assets/surya/images/slide_2.png";
import slide3 from "../../../assets/surya/images/slide_3.png";
import slide1 from "../../../assets/surya/images/slide_1.png";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const SLIDES = [
  {
    title: "Industrial Powerhouses",
    description:
      "Robust and efficient industrial buildings tailored to your needs.",
    image: slide3,
  },
  {
    title: "Precision Engineered Buildings",
    description:
      "Flexible, cost-effective, and rapidly deployable PEB solutions.",
    image: slide2,
  },
  {
    title: "Residential Buildings",
    description: "Stylish and comfortable homes that are built to last.",
    image: slide1,
  },
];

const Hero = () => {
  return (
    <section className="hero-wrapper hero-1">
      <Swiper navigation={true} modules={[Navigation]} loop>
        {SLIDES.map((slide, index) => (
          <SwiperSlide
          key={index}
            className=" bg-cover"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 ps-md-2 pe-md-2 col-xxl-7 col-lg-10 col-md-10 col-sm-10">
                  <div className="hero-contents pe-lg-3">
                    <h1
                      className="fs-lg wow fadeInLeft animated"
                      data-wow-duration="1.3s"
                    >
                      {slide.title}
                    </h1>
                    <p
                      className="pe-lg-5 wow fadeInLeft animated"
                      data-wow-duration="1.3s"
                      data-wow-delay=".4s"
                    >
                      {slide.description}{" "}
                    </p>
                    <a
                      href="contact.html"
                      className="theme-btn me-sm-4 wow fadeInLeft"
                      data-wow-duration="1.2s"
                      data-wow-delay=".8s"
                    >
                      contact us
                    </a>
                    <a
                      href="about.html"
                      className="plus-text-btn wow fadeInLeft"
                      data-wow-duration="1.2s"
                      data-wow-delay=".6s"
                    >
                      <div className="icon">
                        <i className="fas fa-plus"></i>
                      </div>
                      <div className="link-text">
                        <span>Explore</span> More about Us
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
