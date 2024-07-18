import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../index.css';
import me from '../assets/me.jpeg';
import parcour from '../assets/parcour.jpg';
import obj from '../assets/objectif.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faHtml5, faCss3Alt, faJs, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faProjectDiagram, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <section className="container-fluid about-me mt-10">
            <div className="row pt-5 mt-5 d-flex justify-content-center align-items-center">
                <div className="col-lg-6 col-md-8 col-sm-10 text-center">
                    <h2 className="font">About Me</h2>
                    <p>
                        My name is Ilhame Sadik, and I am an aspiring engineer specializing in
                        <strong> Mathematics and Computer Science</strong>. Passionate about web development and
                        data analysis, I am constantly seeking new challenges to deepen my knowledge and
                        enhance my skills. My academic journey and professional experiences have enabled
                        me to master various technologies and work on exciting projects. I am determined
                        to continue learning and make meaningful contributions to innovative projects.
                    </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-8 card1 mt-4 mt-lg-0">
                    <img
                        src={me}
                        alt="Ilhame Sadik"
                        className="img-fluid d-block rounded-circle shadow" />
                </div>
            </div>
            <div className="row bg mt-5">
                <div className="col-lg-6 col-md-6 col-sm-8 mt-lg-0">
                    <img src={parcour} alt="journey" className="img-fluid d-block" />
                </div>
                <div className="col-lg-5 mt-5 pt-5 col-md-6 col-sm-8 text-center">
                    <h2 className="font text-light">My Journey</h2>
                    <p className="text-light">
                        I pursued an in-depth education in Mathematics and Computer Science, acquiring
                        skills in numerical analysis, mathematical modeling, and the fundamentals
                        of computer science. My journey has enabled me to solve complex problems
                        and explore web development, data analysis, and information systems,
                        reinforcing my passion for innovative and effective solutions.
                    </p>
                </div>
            </div>
            <div className="row mt-5 pt-5">
                <h2 className="font text-center" style={{ color:'rgb(1, 0, 59)' }}>My Skills</h2>
                <div className="row pb-5">
                    <div className="col-md-2 mt-5 mb-5">
                        <div className="card1 text-center w-100 h-100 rounded-circle shadow">
                            <FontAwesomeIcon icon={faJava} size="4x" className="mb-3 " style={{ color:'rgb(1, 0, 59)' }} />
                        </div>
                        <p className="mt-3 text-center">Java, HTML/CSS, JavaScript, PHP</p>
                    </div>
                    <div className="col-md-2 mt-5 mb-5">
                        <div className="card1 text-center w-100 h-100 rounded-circle shadow">
                            <FontAwesomeIcon icon={faReact} size="4x" className="mb-3" style={{ color:'rgb(1, 0, 59)' }} />
                        </div>
                        <p className="mt-3 text-center">Spring Boot, React, jQuery, Bootstrap</p>
                    </div>
                    <div className="col-md-2 mt-5 mb-5">
                        <div className="card1 text-center w-100 h-100 rounded-circle shadow">
                            <FontAwesomeIcon icon={faChartLine} size="4x" className="mb-3" style={{ color:'rgb(1, 0, 59)' }} />
                        </div>
                        <p className="mt-3 text-center">Data analysis, statistics with Python, R</p>
                    </div>
                    <div className="col-md-2 mt-5 mb-5">
                        <div className="card1 text-center w-100 h-100 rounded-circle shadow">
                            <FontAwesomeIcon icon={faUsers} size="4x" className="mb-3" style={{ color:'rgb(1, 0, 59)' }} />
                        </div>
                        <p className="mt-3 text-center">Problem-solving and teamwork skills</p>
                    </div>
                    <div className="col-md-2 mt-5 mb-5">
                        <div className="card1 text-center w-100 h-100 rounded-circle shadow">
                            <FontAwesomeIcon icon={faProjectDiagram} size="4x" className="mb-3" style={{ color:'rgb(1, 0, 59)' }} />
                        </div>
                        <p className="mt-3 text-center">Mathematical Modeling</p>
                    </div>
                    <div className="col-md-2 mt-5 mb-5">
                        <div className="card1 text-center w-100 h-100 rounded-circle shadow">
                            <FontAwesomeIcon icon={faDatabase} size="4x" className="mb-3" style={{ color:'rgb(1, 0, 59)' }} />
                        </div>
                        <p className="mt-3 text-center">Database management with MySQL</p>
                    </div>
                </div>
            </div>
            <div className="row bg mt-5">
                <div className="col-lg-6 col-md-6 col-sm-8 mt-lg-0">
                    <img src={obj} alt="objectives" className="img-fluid w-100 d-block" />
                </div>
                <div className="col-lg-6 mt-5 pt-5 col-md-6 col-sm-8 text-center">
                    <h2 className="font text-light">My Objectives</h2>
                    <p className="text-light">I aim to continue developing my skills as a full-stack web developer...</p>
                </div>
            </div>
        </section>
    );
};

export default About;
