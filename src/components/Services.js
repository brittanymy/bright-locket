import React from 'react';

const Services = () => {
    return (
        <section class="services section" id="services">
            <h3 class="section__title">Services</h3>
            <span class="section__subtitle">What I Offer</span>

            <div class="services__container container grid">
                {/* <!-- Services 1 --> */}
                <div class="services__content">
                    <div>
                        <i class="uil uil-archive-alt services__icon"></i>
                        <h3 class="services__title">Backend <br /> Developer</h3>
                    </div>

                    <span class="button button--flex button--small button--link services__button">
                        View More
                        <i class="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div class="services__model">
                        <div class="services__model-content">
                            <h4 class="services__model-title">Backend <br /> Developer</h4>
                            <i class="uil uil-times services__model-close"></i>

                            <ul class="services__model-services grid">
                                <li class="services__model-service">
                                    <i class="uil uil-check-circle services__model-icon"></i>
                                    <p>Knowledge of backend programming languages.</p>
                                </li>
                                <li class="services__model-service">
                                    <i class="uil uil-check-circle services__model-icon"></i>
                                    <p>Knowledge of backend frameworks.</p>
                                </li>
                                <li class="services__model-service">
                                    <i class="uil uil-check-circle services__model-icon"></i>
                                    <p>Knowledge of APIs.</p>
                                </li>
                                <li class="services__model-service">
                                    <i class="uil uil-check-circle services__model-icon"></i>
                                    <p>Knowledge of different version control systems.</p>
                                </li>                                                                
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <!-- Services 2 --> */}
                <div class="services__content">
                    <div>
                        <i class="uil uil-external-link-alt services__icon"></i>
                        <h3 class="services__title">Frontend <br /> Developer</h3>
                    </div>

                    <span class="button button--flex button--small button--link services__button">
                        View More
                        <i class="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div class="services__model">
                        <div class="services__model-content">
                            <h4 class="services__model-title">Frontend <br /> Developer</h4>
                            <i class="uil uil-times services__model-close"></i>

                            <ul class="services__model-services grid">
                                <li class="services__model-service">
                                    <i class="uil uil-check-circle services__model-icon"></i>
                                    <p>Decides web page design and structure.</p>
                                </li>
                                <li class="services__model-service">
                                    <i class="uil uil-check-circle services__model-icon"></i>
                                    <p>Develops features to enhance the users experience.</p>
                                </li>
                                <li class="services__model-service">
                                    <i class="uil uil-check-circle services__model-icon"></i>
                                    <p>Creates mobile responsive webpages.</p>
                                </li>
                                <li class="services__model-service">
                                    <i class="uil uil-check-circle services__model-icon"></i>
                                    <p>Keeps the brand consistent throughout design.</p>
                                </li>                                                                
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <!-- Services 3 --> */}
                <div class="services__content">
                    <div>
                        <i class="uil uil-brush-alt services__icon"></i>
                        <h3 class="services__title">Graphic <br /> Designer</h3>
                    </div>

                    <span class="button button--flex button--small button--link services__button">
                        View More
                        <i class="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div class="services__model">
                        <div class="services__model-content">
                            <h4 class="services__model-title">Graphic <br /> Designer</h4>
                            <i class="uil uil-times services__model-close"></i>

                            <ul class="services__model-services grid">
                                <li class="services__model-service">
                                    <i class="uil uil-check-circle services__model-icon"></i>
                                    <p>Studies design briefs and determent requirements.</p>
                                </li>
                                <li class="services__model-service">
                                    <i class="uil uil-check-circle services__model-icon"></i>
                                    <p>Keeps up-to-date with the latest design trends, tools, and technologies.</p>
                                </li>
                                <li class="services__model-service">
                                    <i class="uil uil-check-circle services__model-icon"></i>
                                    <p>Selects colors, images, typography and layout for communication materials.</p>
                                </li>
                                <li class="services__model-service">
                                    <i class="uil uil-check-circle services__model-icon"></i>
                                    <p>Creates designs using illustration, photo editing and layout software.</p>
                                </li>                                                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;