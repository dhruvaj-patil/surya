import React from "react";
import videoBg from "../../../assets/img/video_bg_1.jpg";
import imgBlock1 from "../../../assets/img/home1/img-block1.jpg";
import tabImg1 from "../../../assets/img/home1/tab-img.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import "react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";
import mainLogo from "../../../assets/surya/surya_logo.png";

const DATA = {
  // button: <><span>Explore</span> More About Us</>,
  title: "55 Years of Construction Excellence",
  subtitle: "Surya Engineers",
  description: `Surya Engineers and Contractors Pvt. Ltd., headquartered in
                  Pune, Maharashtra, is a distinguished general contractor with
                  a rich legacy spanning over 55 years. We specialize in a
                  diverse range of construction projects, including industrial
                  construction, hydraulic structures, commercial and
                  institutional buildings, and residential construction. Our
                  dedication to excellence and quality has built enduring
                  relationships with over 10 repeat clients over five decades,
                  reflecting our commitment to long-term asset creation and
                  unwavering customer satisfaction.`,
};

function About({ pt, data }) {
  const [isOpen, setOpen] = useState(false);

  const { title, subtitle, description, button } = data || DATA;
  console.log("🚀 ~ About ~ { title, subtitle, description, button }:", { title, subtitle, description, button })

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="zb4bwvZxhVI"
        onClose={() => setOpen(false)}
      />
      <section
        id="about"
        className={
          pt
            ? "about-section section-padding"
            : "about-section section-padding pt-0"
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5 col-12">
              <div className="img-block-pop-video">
                <img src={imgBlock1} alt="busico" />
                <div
                  className="popup-video-block d-flex justify-content-center align-items-center bg-cover"
                  style={{
                    backgroundImage: `url(${mainLogo})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="video-play-btn">
                    <span
                      className="popup-video"
                      onClick={() => setOpen(true)}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="fas fa-play"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-10 col-12">
              <div className="block-contents">
                <div className="section-title">
                  <span>{subtitle}</span>
                  <h2>{title}</h2>
                </div>
                <p>{description}</p>
              </div>
              {/* <div className="tab-content-block">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-technology-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-technology"
                      type="button"
                      role="tab"
                      aria-controls="pills-technology"
                      aria-selected="true"
                    >
                      Technology
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-materials-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-materials"
                      type="button"
                      role="tab"
                      aria-controls="pills-materials"
                      aria-selected="false"
                    >
                      Materials
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-approved-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-approved"
                      type="button"
                      role="tab"
                      aria-controls="pills-approved"
                      aria-selected="false"
                    >
                      Approved
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-technology"
                    role="tabpanel"
                    aria-labelledby="pills-technology-tab"
                  >
                    <div className="tab-inner-contents">
                      <div className="img-box">
                        <img src={tabImg1} alt="" />
                      </div>
                      <div className="checked-features-list">
                        <ul>
                          <li>Intentional development authority</li>
                          <li>Stylistic formula method</li>
                          <li>Royal ability to listen design</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-materials"
                    role="tabpanel"
                    aria-labelledby="pills-materials-tab"
                  >
                    <div className="tab-inner-contents">
                      <div className="img-box">
                        <img src={tabImg1} alt="" />
                      </div>
                      <div className="checked-features-list">
                        <ul>
                          <li>Stylistic formula method</li>
                          <li>Intentional development authority</li>
                          <li>Royal ability to listen design</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-approved"
                    role="tabpanel"
                    aria-labelledby="pills-approved-tab"
                  >
                    <div className="tab-inner-contents">
                      <div className="img-box">
                        <img src="assets/img/home1/tab-img.jpg" alt="" />
                      </div>
                      <div className="checked-features-list">
                        <ul>
                          <li>Intentional development authority</li>
                          <li>Stylistic formula method</li>
                          <li>Royal ability to listen design</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              { button !==  null ? (
                <Link to="/about" className="plus-text-btn mt-lg-5 mt-4 d-flex align-items-center">
                  <div className="icon">
                    <i className="fas fa-plus"></i>
                  </div>
                  <div className="link-text d-flex align-items-centers flex-column">
                    { button ? (
                      button
                    ) : (
                      <>
                        <span>Explore</span> More About Us
                      </>
                    )}
                  </div>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
