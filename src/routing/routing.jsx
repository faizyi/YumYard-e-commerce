import React from 'react'
import { BrowserRouter,Routes,Route,useSearchParams } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Home from '../components/home/home';
import Auth from '../components/pages/auth/Auth';
import Cart from '../components/pages/cart/cart';
import AddProducts from '../components/pages/addProducts/AddProducts';
export default function Routing() {
  return (
    <BrowserRouter>
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/addProducts' element={<AddProducts/>}/> 
    </Routes>
    </div>
    </BrowserRouter>
  )
}
