import React, { useEffect, useState } from 'react'
import OrderDetails from '../orderDetails/OrderDetails';
import img from '../../../assets/best seller/1.png'
import {ref,child,getDatabase, get,onValue} from '../../../firebase/firebase'
import {addToCart} from '../../../redux/cartSlice';
import { useDispatch,useSelector } from 'react-redux';
export default function Cart() { 
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const {cartItems} = useSelector(state=>state.cart)
  console.log(cartItems);
  console.log(items);
  useEffect(()=>{
    const fetch = () =>{
      const dbRef = ref(getDatabase());
      get(child(dbRef, `foodItems/`)).then((snapshot) => {
        const itemsArray = []
        if (snapshot.exists()) {
          const data = snapshot.val()
          for(let key in data){
            const itemsKey = data[key]
            itemsArray.push(itemsKey)
          }
          setItems(itemsArray)
          // console.log(items);
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }
    fetch()
  },[])
  const orders = [
    // Sample orders data, replace with your actual orders data
    { name: 'Food Item 1', price: 10, quantity: 2 },
    { name: 'Food Item 2', price: 15, quantity: 1 },
  ];
  return (
    <div className='cart-container bg-transparent flex flex-wrap'>
      <div className='cart-item grid grid-cols-3 gap-4'>
        {items.map((item, index) => (
          <div key={index} className="cart-item bg-white rounded-xl overflow-hidden 
          shadow-md transition duration-300 hover:shadow-lg">
            <img className="h-42 w-52 object-cover" src={item.itemUrl} alt="" />
            <div className="p-2">
              <div className='text-left'>
                <h3 className="text-lg font-semibold capitalize text-gray-800">{item.itemName}</h3>
                <p className="text-gray-600 mt-1">Rs {item.itemPrice}</p>
              </div>
              <div className="mt-15">
                <button onClick={()=>dispatch(addToCart(item))} className="px-2 py-2 bg-indigo-500 
                text-white rounded-md hover:bg-indigo-600 
                focus:outline-none focus:bg-indigo-600">
                ADD TO BUCKET</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-box fixed top-25 right-8 bg-white p-4 shadow-md">
        <OrderDetails/>
      </div>
    </div>
  )
}
