import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../index.css';

function Header() {
    return (
        <header>
            <nav className="container-fluid  bg">
                <div className="d-flex  align-items-center">
                    <Link to="/" className="logo text-light">Ilhame Sadik</Link>
                </div>
                <ul className="nav nav-tabs justify-content-end text-light " role="tablist">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-light">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-light">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/service" className="nav-link text-light">Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/project" className="nav-link text-light">Project</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text-light">Contact</Link>
                        </li>
                    </ul>
            </nav>
        </header>
    );
}

export default Header;
