import React, { useRef, useState,useEffect } from 'react'
import GoogleAuth from './GoogleAuth';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { Link,useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {auth,onAuthStateChanged} from '../../../firebase/firebase'
import Signup from './Signup';
import Login from './Login';
import Loader from '../../loader/Loader';
export default function Auth() {
  const [isUser, setIsUser] = useState(false); 
  const [searchParams, setSearchParams] = useSearchParams();
  const isParams = searchParams.get("mode") === "login"
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showIcon, setShowIcon] = useState({
    visibility : "hidden"
  });
  const [isLogin, setIsLogin] = useState(false);
  const bgColor = useSelector(state=>state.backgroundColor)
  const isLoading = useSelector(state=>state.loader.isLoading)
  const color = useSelector(state=>state.color)

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsUser(true)
        } else {
          Swal.fire("Please Login");
        }
      });
},[])
  const signup = () =>{
    setIsLogin(!isLogin)
  }
  const togglePasswordVisibility = () =>{
    setShowPassword(!showPassword);
    if(passRef.type === "password"){
      passRef.type = "text";
    }else{
      passRef.type = "password";
    }
  }
  return (
    <>
    {isLoading ? <Loader/> :
        <div className='auth'>
        <div className={`login bg-${bgColor} text-${color} flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8`}>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className={`text-${color} mt-10 text-center text-2xl leading-9 tracking-tight text-gray-900`}>
              Welcome!
            </h2>
          </div>
  
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6">
        <div>
          <label className={`text-${color} block text-sm font-medium leading-6 text-gray-900`}>Email address</label>
          <div className="mt-2">
            <input ref={emailRef} id="email" name="email" type="email"  
            required  className={`block w-full rounded-md border border-gray-300 py-2 px-3 text-${color} bg-white shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm sm:leading-5`} />
          </div>
        </div>
  
        <div>
          <div className="flex items-center justify-between">
            <label className={`text-${color} block text-sm font-medium leading-6 text-gray-900`}>Password</label>
          </div>
          <div className='mt-2 relative'>
                <input
                  ref={passRef}
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  autoComplete='current-password'
                  required
                  className='px-3 block w-full rounded-md border border-gray-300 py-2 text-gray-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm sm:leading-5'
                  onInput={()=>setShowIcon({visibility : passRef.current.value ? "visible" : "hidden"})}
                />
                {/* Eye icon to toggle password visibility */}
                <span style={{...showIcon,
                  background: 'white', width: 'fit-content', fontSize: "15px", borderRadius: '50%'}} 
                  className='absolute inset-y-0 right-0 pr-3 px-2 flex items-center'>
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={togglePasswordVisibility} />
                </span>
              </div>
        </div>
  
        <div>
          {isLogin ? <Signup email={emailRef} pass={passRef}/> : <Login email={emailRef} pass={passRef}/>}
        </div>
      </form>
    </div>
          <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
              <div>
                  <GoogleAuth email={emailRef}/>
              </div>
          </div>
          <p className="mt-2 text-center text-sm text-gray-500">
        {isParams ? "Not a member?" : "Already a member?"}
        <Link to={`${isLogin ? "?mode=login" : "?mode=signup"}`} onClick={signup}>{isParams ? "SIGNUP" : "LOGIN"}</Link>
      </p>
        </div>
        </div>}
    </>
  )
}
