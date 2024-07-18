import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import ReactDOM from 'react-dom/client';


import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Service from './components/service';
import Project from './components/Project';
import Contact from './components/Contact';




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service/>} />   
        <Route path="/project" element={<Project/>} />      
        <Route path="/contact" element={<Contact/>} />    
        {/* Ajoutez d'autres routes ici */}
      </Routes>
      <Footer />
    </div>
  </Router>
);

