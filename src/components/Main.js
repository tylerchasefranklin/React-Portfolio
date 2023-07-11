import React from "react";
import "./Main.css";

const Main = () => {
    return (
        <main className="main">

            <section className="about" id="about">
                <div className="image-container">
                    <img src="chasefranklin.jpg" className="image"/>
                </div>
                <div className="about-text">
                    <p>My name is Chase Franklin and I am a junior fullstack web developer. I started out learning HTML, CSS, and Javascript at The Iron Yard coding bootcamp in 2016.</p>
                    <p>Since then I have gone on to build online ordering applications, manage WordPress websites, and code emails and content pages for several agencies and startups.</p>
                    <p>I am currently at Wake Technical Community College working through the Web Developer program. I will be earning an Associate of Science Degree in Spring 2024 and I am looking to join a development team where I can share my skills.</p>
                </div>
            </section>

            <section className="projects" id="projects">
                <h2>Projects</h2>
                <div className="grid-container-3">
                    <a href="https://wcet.waketech.edu/tcfranklin2/WEB110/FinalProject/index.html" target="_blank">
                        <div className="grid-item-container black-trans">
                            <h6>Metronome</h6>
                            <div className="grid-item">
                            <img className="grid-image" src="metronome.png" alt="picture of Metronome project" />
                            </div>
                            <p className="caption">Website for fictional music festival</p>
                        </div>
                    </a>
                    <a href="https://wcet.waketech.edu/tcfranklin2/WEB115/Lesson11Assignment/index.html" target="_blank">
                        <div className="grid-item-container black-trans">
                            <h6>Object Creator</h6>
                            <div className="grid-item">
                            <img className="grid-image" src="objectcreator.png" alt="picture of " />
                            </div>
                            <p className="caption">Form That Creates Javascript Objects</p>
                        </div>
                    </a>
                    <a href="" target="_blank">
                        <div className="grid-item-container black-trans">
                            <h6>Denny's On Demand</h6>
                            <div className="grid-item">
                            <img className="grid-image" src="dennys.png" alt="picture of " />
                            </div>
                            <p className="caption">Online Ordering Application for Denny's</p>
                        </div>
                    </a>
                </div>
            </section>

            <section className="skills" id="skills">
                <h2>Skills</h2>
                <div className="grid-container-2">
                    <div>
                        <h3>Technical</h3>
                        <div className="grid-container">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Javascript</p>
                        </div>
                    </div>
                    <div>
                        <h3>Non-Technical</h3>
                        <div className="grid-container">
                            <p>Communication</p>
                            <p>Project Management</p>
                        </div>
                    </div>
                    
                </div>
            </section>
            <section className="experience" id="experience">
                <div>
                <h2>Relevant Experience</h2>
                <ul>
                    <li><b>Front-End Web Developer</b> - <i>Chumney & Associates (2019-2020)</i> - Responsible for uploading and formatting new content daily on WordPress site, as well as the creation of new templates, graphic design for banners, ads, and infographics. Overall management and improvement of site which included new pages and features, as well as the enhancement of SEO.</li>
                    <li><b>Digital Engineer</b> - <i>In The Know Upstate (2018)</i> - Responsible for uploading and formatting new content daily on WordPress site, as well as the creation of new templates, graphic design for banners, ads, and infographics. Overall management and improvement of site which included new pages and features, as well as the enhancement of SEO.</li>
                    <li><b>Web Application Developer</b> - <i>EP + Co (2017)</i> - Production of the Denny’s On Demand online ordering application. Features were coded in Angular 2/Typescript per and FRD and included the following: dynamic routing features, real-time updating of nutritional and pricing information based on customer inputs, a dynamic cart system for customer checkout, location services through Google to allow user to choose pick-up or delivery.</li>
                </ul>
                </div>
            </section>
        </main>
    );
};

export default Main;