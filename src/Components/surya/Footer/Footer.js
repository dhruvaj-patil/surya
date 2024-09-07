import { Link } from "react-router-dom";
import FooterCopyrights from "./FooterCopyright";
import { useState } from "react";
import FooterCta from "./FooterCta";

const FooterOne = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <footer className="footer-1 footer-wrap">
        <div className="footer-widgets-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 pe-xl-0 col-sm-6 col-12 ">
                <div id='contact-us' className="single-footer-wid site_info_widget d-flex justify-content-center align-items-center">
                  <div className="wid-title">
                    <h3>Get In Touch</h3>
                  </div>
                  <div className="contact-us">
                    <div className="single-contact-info">
                      <div className="icon">
                        <i className="fal fa-phone"></i>
                      </div>
                      <div className="contact-info">
                        <a href="tel:123-456-7890">+91-20-2951 0473</a>
                        
                      </div>
                    </div>
                    <div className="single-contact-info">
                      <div className="icon">
                        <i className="fal fa-envelope"></i>
                      </div>
                      <div className="contact-info">

                        <a href="">inquiry@suryaengineers.com</a>
                      </div>
                    </div>
                    <div className="single-contact-info">
                      <div className="icon">
                        <i className="fal fa-map-marker-alt"></i>
                      </div>
                      <div className="contact-info">
                        <a>
                        “Surya House”, S. No. 143, Lagadmala, Sinhagad Road, <br />
                        Opp. Lokmat, Dhayari, Pune 411 041. Maharashtra. India.
                        </a>
                      </div>
{/* 
                      <div className="contact-info">
                        <p>
                          Opening Hours : <b> Mon - Fri: 9:30 AM - 10 PM</b>
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 offset-xl-1 col-xl-5 col-12  d-flex justify-content-center align-items-center">
                <div className="single-footer-wid">
                  <div className="wid-title">
                    <h3>Quick Links</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="/">About Company</Link>
                    </li>
                    <li>
                      <Link to="/">Services</Link>
                    </li>
                    <li>
                      <Link to="/">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/">Careers</Link>
                    </li>
                    <li>
                      <Link to="/">Contact Us</Link>
                    </li>
                    {/* <li>
                      <Link to="/">Payment Getway</Link>
                    </li> */}
                  </ul>
                </div>
              </div>

              {/* <div className="col-sm-6 col-xl-4 offset-xl-1 col-12">                        
                                <div className="single-footer-wid newsletter_widget">
                                    <div className="wid-title">
                                        <h3>Newsletter</h3>
                                    </div>
                                    <div className="newsletter_box">
                                        <form action="#">
                                            <i className="fal fa-envelope"></i>
                                            <input value={input} onChange={(e) => setInput(e.target.value)} type="email" placeholder="Enter email address" required/>
                                            <button onClick={(e) => e.preventDefault()} className="submit-btn" type="submit">Subscribe Now <i className="fas fa-paper-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>  */}
            </div>
          </div>
        </div>

        <FooterCta />
        <FooterCopyrights />
      </footer>
    </>
  );
};

export default FooterOne;
