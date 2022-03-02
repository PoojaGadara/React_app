import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

const App = () => {
    return(
    <div>
    
    <Router>
    <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />        
            <Route path="/Home" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Service" element={<Service />} />
        </Routes>
    </Router>
    <Footer />
    </div>
    
        
    );

}
 
export default App ;