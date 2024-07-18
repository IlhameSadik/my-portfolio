import React from 'react';
import {Link} from 'react-router-dom';
// index.js ou App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../index.css'

function Footer() {
    return (
        <footer className="pos pt-3 bg-dark ">

            <div className="container-fluid">
                <div className="">
                    <div className="row">
                        <div className="col-lg-4 mt-4 ">
                            <Link href="/" className="center-mobile logo">Ilhame Sadik
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <ul className="flex-colum pt-3 center-mobile">
                                <li className="nav-item">
                                    <h4 className="text-light">
                                        <strong>Learn more</strong>
                                    </h4>
                                </li>
                                <li className="nav-item mt-1">
                                    <Link className="nav-link text-light" to="/">Home</Link>
                                </li>
                                <li className="nav-item mt-1">
                                    <Link className="nav-link text-light" to="/About">About</Link>
                                </li>
                                <li className="nav-item mt-1">
                                    <Link className="nav-link text-light" to="/service">Service</Link>
                                </li>
                                <li className="nav-item mt-1">
                                    <Link className="nav-link text-light" to="/project">Project</Link>
                                </li>
                                <li className="nav-item mt-1">
                                    <Link className="nav-link text-light" to="/contact">Contact</Link>
                                </li>

                            </ul>
                        </div>

                        <div className="col-lg-4">
                            <p
                                className="border border-info shadow p-3 mt-3 text-light"
                                >
                                <span>As a passionate Fullstack Web Developer, I strive to create dynamic and
                                    user-friendly web applications. With a strong background in both front-end and
                                    back-end technologies, I am dedicated to continuous learning and innovation in
                                    web development.</span>
                            </p>
                        </div>

                    </div>
                </div>

            </div>
            <hr className="mt-100 mb-2 text-center text-light float-none"/>
            <p className="text-center">©
                <Link href="/">
                    <span className="nav-link text-info">&copy; 2024 Ilhame Sadik. All rights reserved.</span>
                </Link>
            </p>
        </footer>
    );
}

export default Footer;
