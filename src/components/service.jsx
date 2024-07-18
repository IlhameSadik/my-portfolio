import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Services() {
    return (
        <div  className="container pb-5" id="accordion">
            <h1 className="font text-center">Services Offered</h1>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <div className="pt-3">
                        <strong>Service 1: </strong>Analysis and Resolution of Complex Problems
                    </div>
                    <button className="btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        <FontAwesomeIcon icon={faAngleDown} className="" />
                    </button>
                </div>
                <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                    <div className="card-body">
                        I offer expertise in thorough analysis and effective resolution of complex problems. My methodical approach ensures precise and strategic solutions to optimize your processes and overcome technical challenges.
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <div className="pt-3">
                        <strong>Service 2: </strong>Web Development and Data Analysis
                    </div>
                    <button className="btn btn-outline-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                        <FontAwesomeIcon icon={faAngleDown} className="" />
                    </button>
                </div>
                <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        I offer advanced skills in web development and data analysis. With expertise in designing and implementing robust web solutions, coupled with a deep analytical ability with data, I am committed to creating innovative and efficient web applications to meet your specific needs.
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <div className="pt-3">
                        <strong>Service 3: </strong>Innovative Solutions for Web Projects
                    </div>
                    <button className="btn btn-outline-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                        <FontAwesomeIcon icon={faAngleDown} className="" />
                    </button>
                </div>
                <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        I specialize in creating innovative solutions for web projects. With a creative and results-oriented approach, I am committed to developing strategies and web applications that address current challenges and anticipate future needs for your business. My goal is to provide technological solutions that enhance your online presence and strengthen your competitiveness in the market.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
