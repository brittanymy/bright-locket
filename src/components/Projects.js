import React from 'react';

const Projects = () => {
    return (
        <section class="project section">
            <div class="project__bg">
                <div class="project__container container grid">
                    <div class="project__data">
                        <h2 class="project__title">Want to collab?</h2>
                        <p class="project__description">Contact me and let's get started.</p>
                        <a href="#contact" class="button button--flex button--white">
                            Contact Me 
                            <i class="uil uil-message project__icon button__icon"></i>
                        </a>
                    </div> 

                    <img src="./assets/images/project.png" alt="portfolio creator" class="project__img"/>
                </div>
            </div>
        </section>
    )
}

export default Projects;