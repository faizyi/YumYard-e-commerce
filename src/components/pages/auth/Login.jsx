import React from 'react'
import { auth,signInWithEmailAndPassword,
db,ref,child,getDatabase, get} from '../../../firebase/firebase'
import { Link ,useNavigate} from 'react-router-dom';
export default function Login({email,pass}) {
  const navigate = useNavigate();
  const login = (e) =>{
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
      console.log(errorMessage);
    })
  }
  const typeCheck = async(uid) => { 
    const dbRef = ref(getDatabase());
    get(child(dbRef, `admin/${uid}`)).then((snapshot) => {
      if (snapshot.exists()) {
        navigate("/addProducts");
      } else {
        navigate("/cart");
      }
    }).catch((error) => {
      console.error(error);
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
