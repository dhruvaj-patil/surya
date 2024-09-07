import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../../assets/img/gallery/1.jpg";
import image2 from "../../../assets/img/gallery/5.jpg";
import image3 from "../../../assets/img/gallery/6.jpg";
import ProjectsTab from "../../Projects/ProjectsTab";
import img3 from "../../../assets/img/project-tab2.jpg";
import img2 from "../../../assets/img/project-tab2.jpg";
import img1 from "../../../assets/img/project-tab2.jpg";



function ServiceDetails({services, title, description}) {
  return (
    <section className="surya-services service-details-wrapper section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 mt-5 mt-md-0 col-12 order-2 order-md-1">
            <div className="service-details-sidebar">
              <div className="single-service-sidebar">
                <div className="sidebar-title">
                  <h3>Service Category</h3>
                </div>
                <ul>
                  {services.map((service, index) => (
                    <li key={service.id ?? index}>
                      <a href={`#${service.serviceName.toLocaleLowerCase().split(' ').join('-')}`}>
                         {service.serviceName}
                      </a>
                    </li>
                  ))}
                  {/* // <li><Link to="/ServiceDetails">01. General Contracting</Link></li>
                        // <li><Link to="/ServiceDetails">02. Apartment Design</Link></li>
                        // <li><Link to="/ServiceDetails">03. Building Renovation</Link></li>
                        // <li><Link to="/ServiceDetails">04. Architecture Design</Link></li>
                        // <li><Link to="/ServiceDetails">05. Building Construction</Link></li>
                        // <li><Link to="/ServiceDetails">06. Oil &amp; Gas Engineering</Link></li> */}
                </ul>
              </div>
              <div className="single-service-sidebar">
                <div className="sidebar-title">
                  <h3>Download Brochures</h3>
                </div>
                <div className="brochures-download">
                  <a href="#" className="theme-btn">
                    <i className="fal fa-file-pdf" />
                    Download .PDF
                  </a>
                  {/* <a href="#" className="theme-btn">
                    <i className="fal fa-file-word" />
                    Download .DOC
                  </a>
                  <a href="#" className="theme-btn">
                    <i className="fal fa-file-powerpoint" />
                    Download .PPT
                  </a> */}
                </div>
              </div>
              <div className="single-service-sidebar site_info_widget d-sm-none d-md-block">
                <div className="sidebar-title">
                  <h3>Contact Us</h3>
                </div>
                <div className="contact-us">
                  <div className="single-contact-info">
                    <div className="icon">
                      <i className="fal fa-phone" />
                    </div>
                    <div className="contact-info">
                      <span>Phone Number</span>
                      <p>+91-20-2951 0473</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="icon">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="contact-info">
                      <span>Email Address</span>
                      <p>inquiry@suryaengineers.com</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="contact-info">
                      <span>Office Address</span>
                      <p>
                        “Surya House”, S. No. 143, Lagadmala, Sinhagad Road,
                        Opp. Lokmat, Dhayari, Pune 411 041. Maharashtra. India.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 ps-lg-5 col-12 order-1 order-md-2">
            <div className="service-details-content-wrapper pl-0 pl-md-4">
              {/* <img src={image1} alt=""/> */}
              <h2>{title}</h2>
              <p>{description}</p>

              <hr></hr>

              <div>
                {services.map((service) => (
                    <div>
                     <ProjectDetails
                    title={service.serviceName}
                    description={service.description}
                    projects={service.projects}
                    id={service.id}
                  />
                    </div>
                 
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ProjectDetails = ({ title, description, projects, id}) => {
  return (
    <>
      <div className="box" id={`${title.toLocaleLowerCase().split(' ').join('-')}`}>
        <h2>{title}</h2>
        <p>{description}</p>
        {projects && <ProjectTabs projects={projects} />}
      </div>
    </>
  );
};

const ProjectTabs = ({ projects, key }) => {
  return (
    <section className="our-info-tabs-wrapper">
      <div>
        <div className="col-12 col-xl-12">
          <div className="project-tabs-wrapper">
            <ul className="nav nav-pills" id={key} role="tablist">
              {projects.map((project, index) => (
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${!index && "active"}`}
                    id={`${project.id}${index + 1}`}
                    data-bs-toggle="pill"
                    data-bs-target={`#${project.id}-${index + 1}`}
                    type="button"
                    role="tab"
                    aria-controls={`${project.id}-${index + 1}`}
                    aria-selected="true"
                  >
                    {project.projectName}
                  </button>
                </li>
              ))}
            </ul>

            <div className="tab-content" id={`${key}-tabContent`}>
              {projects.map((project, index) => (
                <div
                  className={`tab-pane fade ${!index && "show active"}`}
                  id={`${project.id}-${index + 1}`}
                  role="tabpanel"
                  aria-labelledby={`${project.id}-${index + 1}`}
                >
                  <div className="tab-content-wrapper">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <h3>{project.projectName}</h3>
                        <p>{project.description}</p>

                        <Link to="/projectDetails">
                          Read More <i className="fas fa-long-arrow-right"></i>
                        </Link>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="tab-img">
                          <img src={img2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
