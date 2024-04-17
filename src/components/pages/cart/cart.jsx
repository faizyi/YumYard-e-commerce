import React, { useEffect, useState } from 'react'
import OrderDetails from '../orderDetails/OrderDetails';
import img from '../../../assets/best seller/1.png'
import {ref,child,getDatabase, get,onValue} from '../../../firebase/firebase'
export default function Cart() { 
  const [items, setItems] = useState([]);
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
          <div key={index} className="cart max-w-xs bg-transparent rounded-xl overflow-hidden transition duration-300 mb-2 flex flex-col items-center">
            <img className="h-32 w-32 object-cover" src={item.itemUrl} alt="" /> {/* Adjust height and width of the image */}
            <div className="p-2 flex flex-col justify-between">
              <div className='flex justify-between'>
                <h3 className="text-lg font-semibold capitalize text-gray-800">{item.itemName}</h3>
                <p className="text-gray-600 mt-1">{item.itemPrice}</p>
              </div>
              <div className="mt-14 flex justify-between">
                <button className="px-2 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Add to Cart</button>
                <div className="flex items-center">
                  <button className="text-gray-500 hover:text-gray-600 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <span className="mx-2 text-lg font-semibold">1</span>
                  <button className="text-gray-500 hover:text-gray-600 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-box fixed top-25 right-8 h-full bg-white p-4 shadow-md">
        <OrderDetails orders={orders} />
      </div>
    </div>
  )
}
