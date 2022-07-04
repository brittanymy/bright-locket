import React from 'react';

const Portfolio = () => {
    return (
        <section class="portfolio section" id="portfolio">
        <h2 class="section__title">Portfolio</h2>
        <span class="section__subtitle">Most recent solo and group work</span>

        <div>
            <div class="portfolio__container container swiper mySwiper">
                <div class="swiper-wrapper">
                    {/* <!-- Portfolio 1 --> */}
                    <div class="portfolio__content grid swiper-slide">
                        <img src="/images/portfolio1.jpeg" alt="" class="portfolio__img"/>
                    
                        <div class="portfolio__data">
                            <h3 class="portfolio__title">Password Generator</h3>
                            <p class="portfolio__description">This application allows the user to generate a random password that meets a certain criteria for greater security.</p>
                    
                            <a href="https://brittanymy.github.io/BrittanyPasswordGenerator/" target="_blank" rel="noreferrer" class="button button--flex button--small portfolio__button">
                                Demo 
                                <i class="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>    
                    </div>
                    {/* <!-- Portfolio 2 --> */}
                    <div class="portfolio__content grid swiper-slide">
                        <img src="/images/portfolio2.jpeg" alt="" class="portfolio__img"/>
                    
                        <div class="portfolio__data">
                            <h3 class="portfolio__title">Color Palette Generator</h3>
                            <p class="portfolio__description">Color Coded allows the user to click a button and generate a color palette. When a desired color palette is selected, the user is given the option to save.</p>
                    
                            <a href="https://myersdg.github.io/rubyTarker/" target="_blank" rel="noreferrer" class="button button--flex button--small portfolio__button">
                                Demo 
                                <i class="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>    
                    </div>
                    {/* <!-- Portfolio 3 --> */}
                    <div class="portfolio__content grid swiper-slide">
                        <img src="/images/portfolio3.jpeg" alt="" class="portfolio__img"/>
                    
                        <div class="portfolio__data">
                            <h3 class="portfolio__title">Twitcher</h3>
                            <p class="portfolio__description">Twitcher is a website that allows birdwatching aficionados to collab online. Users can view upcoming events, resources for new birders, and a members-only blog where people can write about their birding experiences.</p>
                    
                            <a href="https://triangle-twitchers.herokuapp.com/" target="_blank" rel="noreferrer" class="button button--flex button--small portfolio__button">
                                Demo 
                                <i class="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>    
                    </div>
                </div>
        
                {/* <!-- Add arrows --> */}
                <div class="swiper-button-next">
                    <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
                </div>
                <div class="swiper-button-prev">
                    <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
                </div>
                {/* <!-- Add pagination --> */}
                <div class="swiper-pagination"></div>
            </div>
        </div>    
    </section>
    )
}

export default Portfolio;