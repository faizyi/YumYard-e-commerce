import React, { useState } from 'react'
import { auth } from '../../../firebase/firebase'
import googleImg from '../../../assets/google/189824.webp'
import { useSelector } from 'react-redux';
export default function GoogleAuth({email}) {
  const bgColor = useSelector(state=>state.backgroundColor)
  const color = useSelector(state=>state.color)
  function google(){
    console.log(email.current.value);
  }
    return (
        <button
        onClick={google}
        type="submit"
        className="login-google flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm leading-6 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <span><img src={googleImg} alt="" /></span>
        LOGIN WITH GOOGLE
      </button>
    )
}
