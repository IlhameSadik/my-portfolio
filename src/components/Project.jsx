import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import Project from '../assets/project.webp';

function Services() {
    return (
        <section>
            <div className="w-100  position-relative">
                <img
                    src={Project}
                    className=""
                    style={{
                        height: '381px',
                        objectFit: 'cover',
                        width: '100%'
                    }}
                />
                <div className="overlay"></div>
            </div>
            <div className="container-fluid pb-5 mb-5">
                <div className="row">
                    <h2 className="text-center mb-4 mt-5 font" style={{ color:'rgb(1, 0, 59)' }}>My Projects</h2>
                    <div className="col-md-4 mb-5">
                        <div className="card shadow">
                            <img
                                src={project1}
                                className="card-img-top"
                                alt="Photos provided by Pexels"
                                style={{
                                    height: '200px',
                                    objectFit: 'cover',
                                    width: '100%'
                                }}
                            />
                            <div className="card-body">
                                <h3 style={{ color:'rgb(1, 0, 59)' }}>Project for Hotel Management</h3>
                                <p className="card-text mb-3">
                                    Technologies used: React JS, Spring Boot
                                </p>
                                <a href="/project1" className="btn btn-outline-primary">discover more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card shadow">
                            <img
                                src={project2}
                                className="card-img-top"
                              
                                style={{
                                    height: '200px',
                                    objectFit: 'cover',
                                    width: '100%'
                                }}
                            />
                            <div className="card-body ">
                                <h3 style={{ color:'rgb(1, 0, 59)' }}>Project for Sports Facility Management</h3>
                                <p className="card-text mb-3">Technologies used: Java, JavaFX</p>
                                <a href="/project2" className="btn btn-outline-primary ">discover more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card shadow">
                            <img
                                src={project3}
                            
                                
                                style={{
                                    height: '200px',
                                    objectFit: 'cover',
                                    width: '100%'
                                }}
                            />
                            <div className="card-body">
                                <h3 style={{ color:'rgb(1, 0, 59)' }}>Time Series Analysis for Commercial Product Sales</h3>
                                <p className="card-text mb-3">Implemented using SARIMA model</p>
                                <a href="/project3" className="btn btn-outline-primary">discover more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
