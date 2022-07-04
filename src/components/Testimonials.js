import React from 'react';

const Testimonials = () => {
    return (
        <section class="testimonial section">
            <h2 class="section__title">Testimonial</h2>
            <span class="section__subtitle">My client saying</span>

            <div class="testimonial__container container swiper mySwiper">
                <div class="swiper-wrapper">
                    {/* <!-- Testimonial 1 --> */}
                    <div class="testimonial__content swiper-slide">
                            <div class="testimonial__data">
                                <div class="testimonial__header">
                                    <img src="./assets/images/testimonial1.jpeg" alt="Daniel Myers" class="testimonial__img"/>

                                    <div>
                                        <h3 class="testimonial__name">Daniel Myers</h3>
                                        <span class="testimonial__client">Classmate</span>
                                    </div>
                                </div>

                                <div>
                                    <i class="uil uil-star testimonial__icon-star"></i>
                                    <i class="uil uil-star testimonial__icon-star"></i>
                                    <i class="uil uil-star testimonial__icon-star"></i>
                                    <i class="uil uil-star testimonial__icon-star"></i>
                                    <i class="uil uil-star testimonial__icon-star"></i>
                                </div>
                            </div>

                            <p class="testimonial__description">Group projects are easy with effective communication and collaboration. Thank you, Brittany, for your consistency and hard work.</p>
                    </div>

                    {/* <!-- Testimonial 2 --> */}
                    <div class="testimonial__content swiper-slide">
                            <div class="testimonial__data">
                                <div class="testimonial__header">
                                    <img src="./assets/images/testimonial2.jpeg" alt="Lauren Bryant" class="testimonial__img"/>

                                    <div>
                                        <h3 class="testimonial__name">Lauren Bryant</h3>
                                        <span class="testimonial__client">Classmate</span>
                                    </div>
                                </div>

                                <div>
                                    <i class="uil uil-star testimonial__icon-star"></i>
                                    <i class="uil uil-star testimonial__icon-star"></i>
                                    <i class="uil uil-star testimonial__icon-star"></i>
                                    <i class="uil uil-star testimonial__icon-star"></i>
                                    <i class="uil uil-star testimonial__icon-star"></i>
                                </div>
                            </div>

                            <p class="testimonial__description">I get a good impression that Brittany will carry out our project with quality, attention, and support 24 hours a day.</p>
                    </div>

                    {/* <!-- Testimonial 3 --> */}
                    <div class="testimonial__content swiper-slide">
                            <div class="testimonial__data">
                                <div class="testimonial__header">
                                    <img src="./assets/images/testimonial3.jpeg" alt="Jordan Weston" class="testimonial__img"/>

                                    <div>
                                        <h3 class="testimonial__name">Jordan Weston</h3>
                                        <span class="testimonial__client">Classmate</span>
                                    </div>
                                </div>

                                <div>
                                    <i class="uil uil-star testimonial__icon-star"></i>
                                    <i class="uil uil-star testimonial__icon-star"></i>
                                    <i class="uil uil-star testimonial__icon-star"></i>
                                    <i class="uil uil-star testimonial__icon-star"></i>
                                    <i class="uil uil-star testimonial__icon-star"></i>
                                </div>
                            </div>

                            <p class="testimonial__description">Learning how to code is challenging. Brittany knows how to make it fun.</p>
                    </div>
                </div>
                
                {/* <!-- Add pagination --> */}
                <div class="swiper-pagination swiper-pagination-testimonial"></div>
            </div>
        </section>        
    )
}

export default Testimonials;