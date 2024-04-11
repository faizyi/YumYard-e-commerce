import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Home from '../components/home/home';
import Login from '../components/pages/login/Login';
export default function Routing() {
  return (
    <BrowserRouter>
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}
