import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'

import "swiper/css";
import "swiper/css/navigation";
import brandCarouselOneData from './BrandCarouselData';

function BrandCarousel() {
  return (
    (
        <div className="brand-carousel-wrapper dot-bg section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-12">
                        <div className="brand-carousel-active"  >
                            <Swiper
                                slidesPerView={5} 
                                spaceBetween={20} 
                                loop
                                breakpoints={{
                                    "@0.00": {
                                      slidesPerView: 2,
                                      spaceBetween: 40,
                                      
                                    },
                                    "@0.75": {
                                      slidesPerView: 3,
                                      spaceBetween: 40,
                                      
                                    },
                                    "@1.00": {
                                      slidesPerView: 4,
                                      spaceBetween: 40,
                                      
                                    },
                                    "@1.50": {
                                      slidesPerView: 5,
                                      spaceBetween: 40,
                                    },
                                  }}
                            >
                                {
                                    brandCarouselOneData.map((data) =>(
                                        <SwiperSlide className="single-brand-logo" key={data.id}>
                                        <img src={data.brand} alt={data.name}/>
                                    </SwiperSlide>
                                    ))
                                }
                               
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  )
}

export default BrandCarousel