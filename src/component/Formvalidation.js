import React from 'react'
import { useState } from 'react';

import Validation from './Validation'

function Formvalidation(){
        
 const [values, setValues] = useState({ name: '', email: '', password: '' }) ;
 const [errors, setErrors] = useState({});  

 function handalInput(event){
 const newObj = {...values, [event.target.name]: event.target.values}
    
     setValues(newObj);
 }   

 function handalValidation(event){
    event.preventDefault();
    setErrors(Validation(values));

 }    
    return(
        <div className="container w-100 d-flex justify-content-center "style={{background:'stateblue'}}>
            <div className=" mt-5 mb-5 w-50 ">
                <h4 className='text-center'>SIGN - UP</h4>
                <div className="form mt-3">
                    <form className="border p-3" onSubmit={handalValidation}>
                        <lable className="mt-2"><strong> Name:</strong></lable>
                        <input type="text" className="form-control" name="name" placeholder="Enter Name" onChange={handalInput} />
                        {errors.name && <p style={{color: "red"}}>{errors.name}</p>}

                        <lable className="mt-2"><strong>Email:</strong></lable>
                        <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={handalInput} />
                        {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

                        <lable className="mt-2"><strong>Password:</strong></lable>
                        <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={handalInput} />
                        {errors.password && <p style={{color: "red"}}>{errors.password}</p>}

                        <div className="mt-3">
                            <button type='submit' className="btn btn-Submit btn-success btn-submit w-50"> Sign-Up </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
       
    );
}
export default Formvalidation;
