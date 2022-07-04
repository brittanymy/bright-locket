import React from "react";

const Qualifications = () => {

    // Qualifications tab
    const tabs = document.querySelectorAll ('[data-target]'),
    tabsContents = document.querySelectorAll ('[data-content]')

    tabs.forEach (tab => {
        tab.addEventListener ('click', () => {
    const target = document.querySelector (tab.dataset.target)

    tabsContents.forEach (tabsContent => {
        tabsContent.classList.remove ('qualification__active')
    })
    target.classList.add ('qualification__active')

    tabs.forEach (tab => {
        tab.classList.remove ('qualification__active')
    })
    tab.classList.add ('qualification__active')
        })
    })

    return (
        <section className="qualification section main">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button button--flex" data-target="#education">
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div className="qualification__button button--flex" data-target="#work">
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Work
                </div>
            </div>

            <div className="qualification__sections">
                {/* <!-- Qualification Content 1 --> */}
                <div className="qualification__content qualification__active" data-content id="education">
                    {/* <!-- Qualification 1 --> */}
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Cary High School</h3>
                            <span className="qualification__subtitle">Cary - North Carolina</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2015 - 2019
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    {/* <!-- Qualification 2 --> */}
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Wake Technical Community College</h3>
                            <span className="qualification__subtitle">Raleigh - North Carolina</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2019 - 2021
                            </div>
                        </div>
                    </div>

                    {/* <!-- Qualification 3 --> */}
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">UNCC Coding Bootcamp</h3>
                            <span className="qualification__subtitle">Chapel Hill - North Carolina</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                February 2022 - July 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <!-- Qualification 4 --> */}
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            {/* <!-- <span class="qualification__line"></span> --> */}
                        </div>  

                        <div>
                            <h3 className="qualification__title">Extended Education Programs</h3>
                            <span className="qualification__subtitle">Raleigh - North Carolina</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                TBD
                            </div>
                        </div>
                    </div>                                                                       
                </div>
                {/* <!-- Qualification Content 2 --> */}
                <div className="qualification__content" data-content id="work">
                    {/* <!-- Qualification 1 --> */}
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Style Advisor</h3>
                            <span className="qualification__subtitle">Justice Department Store</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2018 - 2019
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    {/* <!-- Qualification 2 --> */}
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Cashier</h3>
                            <span className="qualification__subtitle">EarthFare</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2019 - 2020
                            </div>
                        </div>
                    </div>

                    {/* <!-- Qualification 3 --> */}
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Mail Clerk</h3>
                            <span className="qualification__subtitle">WCPSS</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>                                                                       
                </div>
            </div>
        </div>
    </section>       
    )
}

export default Qualifications;