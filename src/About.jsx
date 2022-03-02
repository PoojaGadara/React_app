import React , { Component }from 'react';

import web from "../src/images/About.svg";
import Common from './Common';

const About = () => {
    return(
        <div>
             <Common 
             name="Wel-Come to About Page"
             imgsrc={web}
             visit="/Contact"
             btname="Contact Now"
             />
        </div>
        
    );

}
 
export default About ;