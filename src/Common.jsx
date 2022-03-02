import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img1.png";


const Common = (props) => {
    return(
    <div>
         <section id="header" className="d-flex align-center">
         <div className='container-fluid_Home nav-bg'>
                <div className="row">
                    <div className="col-10 max-auto">
                        <div className='row'>
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  flex-column">
                            <h1 >
                                {props.name}
                                 <strong className="brand-name"> Pooja Gadara</strong>
                            </h1>
                            <h2 className="my-3">We are team Developing Website</h2>
                            <div className="mt-3">
                            <NavLink className="btn-get-Started" to={props.visit}>{props.btname}</NavLink>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt="Home Image"/>
                        </div>
                     </div>
                </div>
                </div>
            </div>
        </section>
    </div>
    );
}
 
export default Common ;