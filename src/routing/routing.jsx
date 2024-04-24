import React, { useEffect,useState} from 'react'
import Swal from 'sweetalert2';
import { BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Home from '../components/home/home';
import Auth from '../components/pages/auth/Auth';
import Cart from '../components/pages/cart/cart';
import AddProducts from '../components/pages/addProducts/AddProducts';
import {auth,onAuthStateChanged,ref,child,getDatabase, get} from '../firebase/firebase'
export default function Routing() {
  const [isAdmin, setIsAdmin] = useState(false); 
  const [isUser, setIsUser] = useState(false); 
  const [is, setIs] = useState(false); 
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setIs(true);
          const uid = user.uid;
          typeCheck(uid);
        } else {
          setIs(false);
        }
      });
},[]);
const typeCheck = async(id) => { 
  const dbRef = ref(getDatabase());
  get(child(dbRef, `admin/${id}`)).then((admin) => {
  get(child(dbRef, `users/${id}`)).then((user)=>{
    if (user.exists()) {
      setIsUser(true);
      console.log(user.val());
    }else if(admin.exists()){
      setIsAdmin(true);
      console.log(admin.val());
    }else{
      setIsAdmin(false);
      setIsUser(false);
    }
  }).catch((error) => {
    console.log(error);
  });
  }).catch((error) => {
    console.log(error);
  });
}
  return (
    <Router>
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={is ? <Navigate to={'/'}/> : <Auth/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/addProducts' element={<AddProducts/>}/> 
    </Routes>
    </div>
    </Router>
  )
}
