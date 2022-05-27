import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/s1.jpg"


const Card = (props) => {
    return(
        <>
                       <div className='col-md-4 col-10 mx-auto' >
                            <div className="card">
                                <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{props.title}</h5>
                                        <p className="card-text">{props.text}</p>
                                        <NavLink to="/Home" className="btn btn-primary">Check Now</NavLink>
                                    </div>
                            </div>
                        </div>
        </>
    );

}
 
export default Card ;