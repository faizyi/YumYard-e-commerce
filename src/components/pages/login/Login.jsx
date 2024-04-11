import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import google from '../../../assets/google/189824.webp'
export default function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <label >Phone Number (3XXXXXXXXX)</label>
            <div className='phone-number'>
                +92 |
                <input maxLength={11} type="number" name="" id="" />
            </div>
            <div>
              <button
                type="submit"
                className="login-btn flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm  leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                LOGIN
              </button>
              <button
                type="submit"
                className="login-google flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm leading-6 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span><img src={google} alt="" /></span>
                LOGIN WITH GOOGLE
              </button>
            </div>
        </div>
      </div>
    </>
  )
}
