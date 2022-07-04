import React from 'react';

const Skills = () => {
    return (
        <section class="skills section" id="skills">
        <h2 class="section__title">Skills</h2>
        <span class="section__subtitle">My technical level</span>

        <div class="skills__container container grid">
            <div>

                {/* <!-- Skill 1 --> */}
                <div class="skills__content skills__open">
                    <div class="skills__header">
                        <i class="uil uil-brackets-curly skills__icon"></i>
                        
                        <div>
                            <h1 class="skills__titles">Frontend developer</h1>
                            <span class="skills__subtitle">More than 6 months</span>
                        </div>

                        <i class="uil uil-angle-down skills__arrow" ></i>
                    </div>

                    <div class="skills__list grid">
                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">HTML</h3>
                                <span class="skills__number">60%</span>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__html"></span>
                            </div>
                        </div> 

                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">CSS</h3>
                                <span class="skills__number">70%</span>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__css"></span>
                            </div>
                        </div> 

                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">JavaScript</h3>
                                <span class="skills__number">20%</span>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__js"></span>
                            </div>
                        </div> 

                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">React</h3>
                                <span class="skills__number">0%</span>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__react"></span>
                            </div>
                        </div> 
                    </div>
                </div>

                {/* <!-- Skill 2 --> */}
                <div class="skills__content skills__close">
                    <div class="skills__header">
                        <i class="uil uil-server-network skills__icon"></i>
                        
                        <div>
                            <h1 class="skills__titles">Backend developer</h1>
                            <span class="skills__subtitle">More than 6 months</span>
                        </div>

                        <i class="uil uil-angle-down skills__arrow" ></i>
                    </div>

                    <div class="skills__list grid">
                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">Express JS</h3>
                                <span class="skills__number">10%</span>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__php"></span>
                            </div>
                        </div> 

                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">Node JS</h3>
                                <span class="skills__number">20%</span>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__node"></span>
                            </div>
                        </div> 

                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">Mysql</h3>
                                <span class="skills__number">20%</span>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__mysql"></span>
                            </div>
                        </div> 

                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">Python</h3>
                                <span class="skills__number">0%</span>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__python"></span>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

            <div>
                {/* <!-- Skill 3 --> */}
                <div class="skills__content skills__close">
                    <div class="skills__header">
                        <i class="uil uil-palette skills__icon"></i>
                        
                        <div>
                            <h1 class="skills__titles">Designer</h1>
                            <span class="skills__subtitle">Less than 1 month</span>
                        </div>

                        <i class="uil uil-angle-down skills__arrow" ></i>
                    </div>

                    <div class="skills__list grid">
                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">Figma</h3>
                                <span class="skills__number">25%</span>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__figma"></span>
                            </div>
                        </div> 

                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">Procreate</h3>
                                <span class="skills__number">20%</span>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__sketch"></span>
                            </div>
                        </div> 

                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">Photoshop</h3>
                                <span class="skills__number">0%</span>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__photoshop"></span>
                            </div>
                        </div> 
                    </div>
                </div>                    
            </div>
        </div>
    </section>
    )
}

export default Skills;