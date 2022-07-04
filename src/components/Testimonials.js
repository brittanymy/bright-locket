import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

const Testimonials = () => {

    // Testimonial swiper
    // let swiperTestimonial = new Swiper(".testimonial__container", {
    //     loop: true,
    //     grabCursor: true,
    //     spaceBetween: 48,

    //     pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicBullets: true,
    //     },

    //     breakpoints: {
    //         568: {
    //             slidesPerView: 2,
    //         }
    //     }
    // });    

    return (
        <section className="testimonial section">
            <h2 className="section__title">Testimonial</h2>
            <span className="section__subtitle">My client saying</span>

            <div className="testimonial__container container swiper mySwiper">
                <div className="swiper-wrapper">
                    {/* <!-- Testimonial 1 --> */}
                    <div className="testimonial__content swiper-slide">
                            <div className="testimonial__data">
                                <div className="testimonial__header">
                                    <img src="/images/testimonial1.jpeg" alt="Daniel Myers" className="testimonial__img"/>

                                    <div>
                                        <h3 className="testimonial__name">Daniel Myers</h3>
                                        <span className="testimonial__client">Classmate</span>
                                    </div>
                                </div>

                                <div>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                </div>
                            </div>

                            <p className="testimonial__description">Group projects are easy with effective communication and collaboration. Thank you, Brittany, for your consistency and hard work.</p>
                    </div>

                    {/* <!-- Testimonial 2 --> */}
                    <div className="testimonial__content swiper-slide">
                            <div className="testimonial__data">
                                <div className="testimonial__header">
                                    <img src="/images/testimonial2.jpeg" alt="Lauren Bryant" className="testimonial__img"/>

                                    <div>
                                        <h3 className="testimonial__name">Lauren Bryant</h3>
                                        <span className="testimonial__client">Classmate</span>
                                    </div>
                                </div>

                                <div>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                </div>
                            </div>

                            <p className="testimonial__description">I get a good impression that Brittany will carry out our project with quality, attention, and support 24 hours a day.</p>
                    </div>

                    {/* <!-- Testimonial 3 --> */}
                    <div className="testimonial__content swiper-slide">
                            <div className="testimonial__data">
                                <div className="testimonial__header">
                                    <img src="/images/testimonial3.jpeg" alt="Jordan Weston" className="testimonial__img"/>

                                    <div>
                                        <h3 className="testimonial__name">Jordan Weston</h3>
                                        <span className="testimonial__client">Classmate</span>
                                    </div>
                                </div>

                                <div>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                </div>
                            </div>

                            <p className="testimonial__description">Learning how to code is challenging. Brittany knows how to make it fun.</p>
                    </div>
                </div>
                
                {/* <!-- Add pagination --> */}
                <div className="swiper-pagination swiper-pagination-testimonial"></div>
            </div>
        </section>        
    )
}

export default Testimonials;