import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Signup = () => {
    const [signUpDetails, setSignUpDetail] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [formErrors,setFormErrors] = useState({});
    console.log(signUpDetails)
    // const changeHandler = (event) => {
    //     setSignUpDetail({ ...signUpDetails, [event.target.name]: event.target.value })
    //     console.log(signUpDetails)
    // }
    const submitHandler = (event) => {
        event.preventDefault();
        validateForm();
        // axios.post("http://localhost:5000/register", { ...signUpDetails })
        //     .then(result => {
        //         console.log(result)
        //     })
    }
    const validateForm = () =>{
        const errors = {};
        if(!signUpDetails.firstName.trim()){
            errors.firstName = "First name required"
        }else if(signUpDetails.firstName.trim().length<3){
            errors.firstName = "First name should be greater "
        }
        setFormErrors(errors);
    }
    // console.log(errors);
    // useEffect(()=>{
    //     validateForm();
    // },[formErrors])
    return (
        <div className='p-[2%] flex flex-col h-[100vh] justify-between'>
            <div className='flex justify-between items-center'>
                <div><h2 className='font-logoFont text-5xl select-none'>Fit&Fine</h2></div>
                <div className='flex items-center gap-2'>
                    <p className='font-bodyFont text-xs cursor-default'>Already have an Account?</p>
                    <Link to="/login">
                        <div className='font-bodyFont text-xs text-white bg-black rounded-full p-1 cursor-pointer'>Login</div>
                    </Link>
                </div>
            </div>

            <div><h1 className='font-headingFont text-6xl text-center cursor-default'>Create Your Account</h1></div>

            <div><p className='font-bodyFont text-sm text-gray-500 text-center'>Welcome! Please enter your details to start your fitness journey</p></div>

            <form className='flex flex-col w-full items-center gap-4'>
                <div className='flex gap-3'>
                    <div className='border p-[10px] rounded-full w-[275px]'>
                        <input type='text' name='firstName' id='firstName' placeholder='First Name'
                            onChange={(event)=> setSignUpDetail({ ...signUpDetails, [event.target.name]: event.target.value })} className='font-bodyFont outline-none text-sm w-full' />
                    </div>
                    {formErrors.firstName && <span>{formErrors.firstName}</span>}
                    <div className='border p-[10px] rounded-full w-[275px]'>
                        <input type='text' name='lastName' id='lastName' placeholder='Last Name'
                            onChange={(event)=> setSignUpDetail({ ...signUpDetails, [event.target.name]: event.target.value })} className='font-bodyFont outline-none text-sm w-full' />
                    </div>
                </div>
                <div className='flex gap-3 '>
                    <div className='border p-[10px] rounded-full w-[275px]'>
                        <input type='text' name='email' id='email' placeholder='Email'
                            onChange={(event)=> setSignUpDetail({ ...signUpDetails, [event.target.name]: event.target.value })} className='font-bodyFont outline-none text-sm w-full' />
                    </div>
                    <div className='border p-[10px] rounded-full w-[275px]'>
                        <input type='text' name='mobile' id='mobile' placeholder='Mobile Number'
                            onChange={(event)=> setSignUpDetail({ ...signUpDetails, [event.target.name]: event.target.value })} className='font-bodyFont outline-none text-sm w-full' />
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className='border p-[10px] rounded-full w-[275px]'>
                        <input type='text' name='password' id='password' placeholder='Password'
                            onChange={(event)=> setSignUpDetail({ ...signUpDetails, [event.target.name]: event.target.value })} className='font-bodyFont outline-none text-sm w-full' />
                    </div>
                    <div className='border p-[10px] rounded-full w-[275px]'>
                        <input type='text' name='password' id='confirmPassword' placeholder='Confirm Password'
                            onChange={(event)=> setSignUpDetail({ ...signUpDetails, [event.target.name]: event.target.value })} className='font-bodyFont outline-none text-sm w-full' />
                    </div>
                </div>
                {/* Login buttons */}
                <div  onClick={submitHandler}
                    className='border p-[10px] cursor-pointer rounded-full bg-black text-white flex items-center justify-between w-[20%]'>
                    <button className='font-bodyFont'>Sign Up</button>
                    <FaArrowRightLong className='text-xl' />
                </div>
            </form>
            <div className='flex justify-center items-center gap-3'>
                <div className='border w-[10%]'></div>
                <div>Or</div>
                <div className='border w-[10%]'></div>
            </div>
            <div className='flex justify-center gap-3'>
                <div className='border p-[10px] rounded-full flex items-center gap-4 cursor-pointer w-[275px]'>
                    <div><FaGoogle /></div>
                    <div><p className='font-bodyFont'>Sign in with Gamil Account</p></div>
                </div>
                <div className='border p-[10px] rounded-full flex items-center gap-4 cursor-pointer w-[275px]'>
                    <div><FaFacebookF /></div>
                    <div><p className='font-bodyFont'>Sign in with Facebook Account</p></div>
                </div>
            </div>

            {/* Footer */}
            <div className='flex justify-between items-center'>
                <div><p className='font-bodyFont text-xs'>Privacy Policy | Terms & Conditions</p></div>
                <div><p className='font-bodyFont text-xs'>Copyrights@fit&fine2024</p></div>
            </div>
        </div>

        // <form onSubmit={submitHandler}>
        //     <div>
        //         <input type='text' name='firstName' id='firstName' onChange={changeHandler} />
        //     </div>
        //     <div>
        //         <input type='text' name='lastName' id='lastName' onChange={changeHandler} />
        //     </div>
        //     <div>
        //         <input type='text' name='email' id='email' onChange={changeHandler} />
        //     </div>
        //     <div>
        //         <input type='text' name='password' id='password' onChange={changeHandler} />
        //     </div>
        //     <div><button>Register</button></div>
        // </form>
    )
}

export default Signup