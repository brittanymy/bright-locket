import React from "react";

const Qualifications = () => {
    return (
        <section class="qualification section main">
        <h2 class="section__title">Qualifications</h2>
        <span class="section__subtitle">My personal journey</span>

        <div class="qualification__container container">
            <div class="qualification__tabs">
                <div class="qualification__button button--flex" data-target="#education">
                    <i class="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div class="qualification__button button--flex" data-target="#work">
                    <i class="uil uil-briefcase-alt qualification__icon"></i>
                    Work
                </div>
            </div>

            <div class="qualification__sections">
                {/* <!-- Qualification Content 1 --> */}
                <div class="qualification__content qualification__active" data-content id="education">
                    {/* <!-- Qualification 1 --> */}
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Cary High School</h3>
                            <span class="qualification__subtitle">Cary - North Carolina</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2015 - 2019
                            </div>
                        </div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>
                    {/* <!-- Qualification 2 --> */}
                    <div class="qualification__data">
                        <div></div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>

                        <div>
                            <h3 class="qualification__title">Wake Technical Community College</h3>
                            <span class="qualification__subtitle">Raleigh - North Carolina</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2019 - 2021
                            </div>
                        </div>
                    </div>

                    {/* <!-- Qualification 3 --> */}
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">UNCC Coding Bootcamp</h3>
                            <span class="qualification__subtitle">Chapel Hill - North Carolina</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                February 2022 - July 2022
                            </div>
                        </div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>

                    {/* <!-- Qualification 4 --> */}
                    <div class="qualification__data">
                        <div></div>

                        <div>
                            <span class="qualification__rounder"></span>
                            {/* <!-- <span class="qualification__line"></span> --> */}
                        </div>  

                        <div>
                            <h3 class="qualification__title">Extended Education Programs</h3>
                            <span class="qualification__subtitle">Raleigh - North Carolina</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                TBD
                            </div>
                        </div>
                    </div>                                                                       
                </div>
                {/* <!-- Qualification Content 2 --> */}
                <div class="qualification__content" data-content id="work">
                    {/* <!-- Qualification 1 --> */}
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Style Advisor</h3>
                            <span class="qualification__subtitle">Justice Department Store</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2018 - 2019
                            </div>
                        </div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>
                    {/* <!-- Qualification 2 --> */}
                    <div class="qualification__data">
                        <div></div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>

                        <div>
                            <h3 class="qualification__title">Cashier</h3>
                            <span class="qualification__subtitle">EarthFare</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2019 - 2020
                            </div>
                        </div>
                    </div>

                    {/* <!-- Qualification 3 --> */}
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Mail Clerk</h3>
                            <span class="qualification__subtitle">WCPSS</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2021 - Present
                            </div>
                        </div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>                                                                       
                </div>
            </div>
        </div>
    </section>       
    )
}

export default Qualifications;