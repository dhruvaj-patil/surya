import React from 'react'
// import footerLogo from '../../assets/img/footer-logo.png';
import mainLogo from "../../../assets/surya/surya_logo.png";


const FooterCta = () => {
  return (
    <div className="footer-cta-wrapper">
        <div className="container">
            <div className="footer-cta-bg-wrapper">
                <div className="row justify-content-around align-items-center">
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="footer-logo">
                            <a href="index.html">
                                <img src={mainLogo} alt="logo"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 ps-lg-0 offset-lg-1 col-12">
                        <div className="footer-middle-text mt-4 mb-4 mt-md-0 mb-md-0">
                            <p>Surya Engineers and Contractors is your partner in building a better future.</p>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-5 col-12">
                        <div className="footer-social-icon ms-md-5 text-lg-md-end d-flex justify-content-center">
                            <a href="/#"><i className="fab fa-facebook-f"></i></a>
                            <a href="/#"><i className="fab fa-twitter"></i></a>
                            <a href="/#"><i className="fab fa-instagram"></i></a>
                            <a href="/#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterCta