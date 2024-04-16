import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { auth,createUserWithEmailAndPassword,ref,
set,db, } from '../../../firebase/firebase'
import { Link ,useNavigate} from 'react-router-dom';
import Login from './Login';
export default function Signup({email,pass}) {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
    const signup = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email.current.value, pass.current.value)
        .then(async (userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // console.log(user);
          await set(ref(db, 'users/' + user.uid), {
            email : email.current.value,
            password : pass.current.value,
            userId : user.uid
              });
              setIsSignup(!isSignup);
              navigate("?mode=login")
              Swal.fire("Signup Successful");
              email.current.value = "";
              pass.current.value = "";

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        })
    }
  return (
    <div>
    <button onClick={signup} className="login-btn flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 
    text-sm leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
    focus-visible:outline-2 focus-visible:outline-offset-2 
    focus-visible:outline-indigo-600">{isSignup ? "LOGIN" : "SIGNUP"}</button>
  </div>
  )
}
