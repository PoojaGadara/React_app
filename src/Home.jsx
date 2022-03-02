import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img1.png";
import Common from './Common';


const Home = () => {
    return(
    <div>
         <Common
         name="Grow Your Business With"
         imgsrc={web}
         visit="/Service"
         btname="Get Started"
         />
    </div>
    );
}
 
export default Home ;