import axios from 'axios';
import React, { useState } from 'react'

import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginDetails, setLoginDetail] = useState({
    email: '',
    password: ''
  });
  const changeHandler = (event) => {
    setLoginDetail({ ...loginDetails, [event.target.name]: event.target.value })
  }
  const submitHandler = (event) => {
    event.preventDefault()
    axios.post("http://localhost:5000/login", { ...loginDetails })
      .then(result => {
        console.log(result)
        if (result.data === "Success") {
          alert("You are registered to this service")
        } else {
          alert("You are not registered to this service")
        }
      })
      .catch(err => console.log(err))
  }
  return (
    <div className='p-[2%] flex flex-col gap-[20px] h-[100vh] justify-between'>
      <div className='flex justify-between items-center'>
        <div><h2 className='font-logoFont text-5xl select-none'>Fit&Fine</h2></div>
        <div className='flex items-center gap-2'>
          <p className='font-bodyFont text-xs cursor-default'>New User?</p>
          <Link to="/signup">
            <div className='font-bodyFont text-xs text-white bg-black rounded-full p-1 cursor-pointer'>Sign Up</div>
          </Link>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <h1 className='font-headingFont text-7xl w-[50%] max-w-[650px] text-center cursor-default'>Login to Your Account</h1>
      </div>
      <form onSubmit={submitHandler} className='flex flex-col items-center h-[40%] justify-between'>
        <div className='flex w-[60%] justify-between items-center'>
          <div className='w-[40%] flex flex-col gap-4'>
            <div className='border p-3 rounded-full'>
              <input type='text' name='email' id='email' placeholder='Email / Phone / UserName'
                onChange={changeHandler} className='font-bodyFont outline-none w-full ' />
            </div>
            <div className='border p-3 rounded-full'>
              <input type='text' name='password' id='password' placeholder='Password'
                onChange={changeHandler} className='font-bodyFont outline-none w-full' />
            </div>
          </div>
          <div><h1>Or</h1></div>
          <div className='w-[40%] flex flex-col gap-4'>
            <div className='border p-3 rounded-full flex items-center gap-5 cursor-pointer'>
              <div><FaGoogle /></div>
              <div><p className='font-bodyFont'>Sign in with Gamil Account</p></div>
            </div>
            <div className='border p-3 rounded-full flex items-center gap-5 cursor-pointer'>
              <div><FaFacebookF /></div>
              <div><p className='font-bodyFont'>Sign in with Facebook Account</p></div>
            </div>
          </div>
        </div>
        {/* Login buttons */}
        <div>

        </div>
        <div className='border p-3 rounded-full bg-black text-white flex items-center justify-between w-[20%]'>
          <button className='font-bodyFont'>Login to Your Account</button>
          <FaArrowRightLong className='text-xl' />
        </div>
        {/* forgot */}
        <div><p className='text-xs font-bodyFont cursor-help'>Forgot Password ?</p></div>
      </form>
      {/* Footer */}
      <div className='flex justify-between items-center'>
        <div><p className='font-bodyFont text-xs'>Privacy Policy | Terms & Conditions</p></div>
        <div><p className='font-bodyFont text-xs'>Copyrights@fit&fine2024</p></div>
      </div>
    </div>
  )
}

export default Login