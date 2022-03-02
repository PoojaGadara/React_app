import React, { Component, useState } from 'react';


const Contact = () => {
    const [data ,setData] = useState({
        name:'',
        phone:"",
        email:"",
        txtarea:""
    })
    const Eventchange = (event) =>{
        const {name,value} = event.target;

        setData((preval) => {
            return {
                ...preval,
                [name]:value,
            }
        });
    }
    const formSubmit= (e)=>{
        e.preventDefault();
        alert(`My Name is ${data.name} My Number is ${data.phone} My email is ${data.email} My Message is ${data.txtarea}`);
        
    }
    return(
        <div>
            <div className="my-5">
                <h1 className='text-center'>Contact US</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                                <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" 
                                 class="form-control" 
                                 id="exampleFormControlInput1"
                                 name="name"
                                 value={data.name}
                                 onChange={Eventchange}
                                 placeholder="Enter Your Name"
                                 required 
                                 />
                                </div>
                               
                                <div class="mb-3">
                                <label for="exampleFormControlInput1"   class="form-label">Phone</label>
                                <input type="text"
                                 class="form-control" 
                                 id="exampleFormControlInput1"
                                 name="phone"
                                 value={data.phone}
                                 onChange={Eventchange}
                                 placeholder="Mobile Number"
                                 required  pattern="[7-9]{1}[0-9]{9}" />
                                </div>

                                <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email"
                                 class="form-control" 
                                 id="exampleFormControlInput1"
                                 name="email"
                                 value={data.email}
                                 onChange={Eventchange}
                                 placeholder="Enter Your Email address" required
                                 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                                </div>

                                <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Message</label>
                                
                                <textarea
                                 class="form-control" 
                                 id="exampleFormControlInput1"
                                 name="txtarea"
                                 value={data.txtarea}
                                 onChange={Eventchange} required
                                 pattern="[a-z]{1,15}"
                                 />
                                </div>

                                <div class="col-12">
                                    <button class="btn btn-outline-primary" type="submit">
                                        Submit form
                                    </button>
                                </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    );

}
 
export default Contact ;