import React, { useRef, useState } from 'react'
import Header from './Header'
import loginValidation from '../utils/loginValidation';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [isSignIn,setIsSignIn] = useState(true);
  const [errorMsg,setErrorMsg] = useState(null);
  
  const navigate = useNavigate();

  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick = () =>{
    const message = loginValidation(email.current.value,password.current.value)
    setErrorMsg(message);
    if(message==null){
      if(email.current.value==="saranbaji@gmail.com" && password.current.value==="Saran29@"){
        navigate("/browse")
      }else{
        setErrorMsg("Invalid Credentials.")
      }
    }
    
  }
  const toggleSignIn = () =>{
    setIsSignIn(!isSignIn)
  }
  return (
    <div className='relative h-screen'>
      <div className="w-full h-screen relative">
          {/**Tint Div */}
          <div className="absolute inset-0 bg-black/60"></div>
          {/**Background Image */}
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/797df41b-1129-4496-beb3-6fc2f29c59d3/web/IN-en-20260112-TRIFECTA-perspective_004732f9-7464-4a7c-940b-4a51c4f0f73f_large.jpg" alt="Netflix" className="w-full h-full object-cover"/>
          {/**Header */}
          <Header/>
           {/* Centered Form */}
          <div className="absolute inset-0 flex items-center justify-center">
            <form className="relative z-10 w-100 bg-black/75 p-8 rounded-md text-white"  onSubmit={(e) => e.preventDefault()}>
              <h1 className="text-2xl font-bold mb-6">{(isSignIn)?'Sign In':'Sign Up'}</h1>
              
              {(!isSignIn)&&<input type="text" placeholder="Enter FullName" className="w-full mb-4 p-3 rounded bg-gray-800 outline-none"/>}
              
              <input ref={email} type="text" placeholder="Email or Phone Number" className="w-full mb-4 p-3 rounded bg-gray-800 outline-none"/>
              <input ref={password} type="password" placeholder="Password" className="w-full mb-6 p-3 rounded bg-gray-800 outline-none"/>
              
              <p className='text-red-400 bolder'>{errorMsg}</p>
              <button className="w-full bg-red-600 p-3 rounded font-semibold" onClick={handleButtonClick}>{(isSignIn)?'Sign In':'Sign Up'}</button>
              <p className='my-5'>{(!isSignIn)?'Existing User?':'New to Netflix?'} <span onClick={toggleSignIn} className='underline hover:cursor-pointer'>{(!isSignIn)?'Sign In':'Sign Up'}</span></p>
            </form>
           
          </div>
      </div>
      
    </div>
  )
}

export default Login