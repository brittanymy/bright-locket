import React from "react";

const About = () => {
    return (
        <section className="about section main" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid">
                <img src="/images/about.jpeg" alt="portfolio creator" className="about__img"/> 

                <div className="about__data">
                    <p className="about__description">Hello! My name is Brittany Young. I'm attending classes with UNCC Coding bootcamp and I'm on my way to becoming a Software Engineer. While I enjoy my current position with the public school system, I'm excited to dive into the world of technology. I also have an interest in graphic design and I'm looking forward to combining the art of design with the art of programming. <br /> <br />
                        My coding bootcamp has provided me the opportunity to interact with the following languages: HTML, CSS, and JS for frontend development. For backend development, I'm currently working on projects using node.js, express. js, and mysql. <br /> <br />
                        With a fascination for learning, I have discovered the importance of putting what I learn into practice. The application of knowledge and skill through this amazing course has given me the opportunity to learn and increase my understanding as technology evolves. While there will always be more to discover, I am excited about being a part of the amazing world of technology.
                        </p>
                </div>
                <div className="about__info">
                    <div>
                        <span className="about__info-title">6+</span>
                        <span className="about__info-name">Months <br /> experience</span>
                    </div>

                    <div>
                        <span className="about__info-title">20+</span>
                        <span className="about__info-name">Completed <br /> projects</span>
                    </div>

                    <div>
                        <span className="about__info-title">0+</span>
                        <span className="about__info-name">Companies <br /> worked</span>
                    </div>
                </div>

                <div className="about__buttons">
                    <a download="" href="./assets/images/Brittany Young Resume -.pdf" className="button button--flex">
                      Download Resume<i className="uil uil-download-alt button__icon"></i>
                    </a>
                </div>
            </div>
        </section>        
    )
}

export default About;