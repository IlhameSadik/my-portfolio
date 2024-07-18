import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../index.css';
import img2 from '../assets/photo.jpg';

function Home() {
    return (
        <section className="">
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to="0"
                        className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img2} alt="Los Angeles" className="d-block w-100" />
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
                            <h1 className="font">Welcome to My Portfolio</h1>
                            <p>Discover my projects and skills.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} alt="Chicago" className="d-block w-100" />
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
                            <h1 className="font">About Me</h1>
                            <p>I am Ilhame Sadik, a passionate Fullstack Web Developer.</p>
                            <a className="btn btn-outline-primary btn-lg" href="/about"><span>Discover more</span></a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} alt="New York" className="d-block w-100" />
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
                            <h1 className="font">My Projects</h1>
                            <p>Check out my latest projects in web development and data analysis.</p>
                            <a className="btn btn-outline-primary btn-lg" href="/project"><span>Discover my projects</span></a>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </section>
    );
}

export default Home;
