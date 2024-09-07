import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
// import testimonialOneData from "./testimonialOneData";
import {v4 as uuidv4} from 'uuid';
import img1 from '../../../assets/img/client/1.jpg';

const TESTIMONIAL_DATA = [
    {
        id: uuidv4(),
        img: img1,
        name: 'CEO, Snyder Digital',
        designation: 'Contructor',
        speech: 'Construction is an ancient human activity. It began with the purely functional need for a controlled environment to moderate the effects of climate. Constructed shelters were one means by which human beings wereable to adapt themselves to a wide variety of climates .',
    },

    {
        id: uuidv4(),
        img: img1,
        name: 'Salman Ahned',
        designation: 'CEO, Modina Themes',
        speech: 'Construction is an ancient human activity. It began with the purely functional need for a controlled environment to moderate the effects of climate. Constructed shelters were one means by which human beings wereable to adapt themselves to a wide variety of climates .',
    },
    
]

const Testimonials = () => {
    return (
        <section id='testimonial' className="testimonial-carousel-wrapper section-padding pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 text-center col-12">
                        <div className="block-contents">
                            <div className="section-title">
                                <span>04. Testimonials</span>
                                <h2>What People say about us</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-12">
                        <div className="testimonial-carousel-active">
                            <Swiper  navigation={true} modules={[Navigation]} loop >
                                {
                                    TESTIMONIAL_DATA.map((data) => (
                                        <SwiperSlide className="single-testimonial-item" key={data.id}>
                                            <p>{data.speech}</p>
                                            <div className="client-info">
                                                <h5>{data.name}</h5>
                                                <span>{data.designation}</span>
                                            </div>
                                            <div className="client-img bg-cover bg-center" style={{backgroundImage: `url(${data.img})`}}></div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;