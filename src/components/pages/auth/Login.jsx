import {useState}from 'react'
import Swal from 'sweetalert2';
import { auth,signInWithEmailAndPassword,
db,ref,child,getDatabase, get} from '../../../firebase/firebase'
import { Link ,useNavigate} from 'react-router-dom';
import {showLoader,hideLoader} from '../../../redux/loader'
import {useDispatch} from 'react-redux'
export default function Login({email,pass}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = (e) =>{
    dispatch(showLoader())
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      typeCheck(user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire("Please Signup First");
      dispatch(hideLoader())
      console.log(errorMessage);
    })
  }
  const typeCheck = async(uid) => { 
    const dbRef = ref(getDatabase());
    get(child(dbRef, `admin/${uid}`)).then((snapshot) => {
      if (snapshot.exists()) {
        Swal.fire("Login Successful");
        dispatch(hideLoader())
        navigate("/");
      } else {
        Swal.fire("Login Successful");
        dispatch(hideLoader())
        navigate("/");
      }
    }).catch((error) => {
      dispatch(hideLoader())
      console.log(error);
    });
  }
  return (
    <div>
    <button onClick={login} type="submit" className="login-btn flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 
    text-sm leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
    focus-visible:outline-2 focus-visible:outline-offset-2 
    focus-visible:outline-indigo-600">LOGIN</button>
  </div>
  )
}
