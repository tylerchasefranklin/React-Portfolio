import React from "react";
import "./Header.css";
import "./bootstrap.css";

const Header = () => {
    return (
    <header>
        <nav className="navbar navbar-dark bg-transparent navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src="logo.png" alt="Chase Franklin Logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">HOME</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">ABOUT</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">PROJECTS</a></li>
                        <li className="nav-item"><a className="nav-link" href="#skills">SKILLS</a></li>
                        <li className="nav-item"><a className="nav-link" href="#experience">EXPERIENCE</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
};

export default Header;