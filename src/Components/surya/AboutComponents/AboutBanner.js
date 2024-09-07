import React from 'react'


const DEFAULT_DATA = {
    subtitle: 'Insight of The Company',
    title: 'Our Company Grownup Last 30 Years'
}

const AboutBanner = ({data}) => {
    const { title, subtitle } =  data || DEFAULT_DATA
  return (
    <section className="about-banner-wrapper section-padding theme-bg">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                    <div className="block-contents">
                        <div className="section-title">
                            <span>{subtitle}</span>
                            <h2 className="text-white">{title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="icon-arrow-down">
            <div className="rotate-icon">
                <i className="flaticon-navigation"></i>
            </div>
        </div>
    </section>
  )
}

export default AboutBanner