import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2';
import {ref,
  set,db,uploadBytesResumable,storage,getDownloadURL,sRef } from '../../../firebase/firebase'
export default function AddProducts() {
  const [foodName, setFoodName] = useState('');
  const [foodPrice, setFoodPrice] = useState('');
  const foodImageRef = useRef(null);

  const randomId = Math.random() * 2222222222222222;
  const itemId = randomId.toFixed(0)
  const handleSubmit = async(e) => {
    e.preventDefault();
    const foodPics = foodImageRef.current.files[0].name
    const storageRef = sRef(storage, `FoodPics/${foodPics}`);
    const uploadTask = uploadBytesResumable(storageRef, foodImageRef.current.files[0]);
    uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      try {
        await set(ref(db, 'foodItems/'+ itemId), {
          itemName : foodName,
          itemPrice : `Rs ${foodPrice}`,
          itemUrl : downloadURL
            });
            Swal.fire("Item Add");
            setFoodName("")
            setFoodPrice("")
            foodImageRef = ""
      } catch (error) {
        console.log(error);
      }
    })
  })
}
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Add Food Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="group">
          <label htmlFor="foodName" className="block text-sm font-medium text-gray-700">Food Name</label>
          <input type="text" required id="foodName" value={foodName} onChange={(e)=>setFoodName(e.target.value)} 
          className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 
          focus:border-indigo-500 transition duration-300 ease-in-out group-hover:border-indigo-600 
          outline-none bg-gray-200" />
        </div>
        <div className="group">
          <label htmlFor="foodPrice" className="block text-sm font-medium text-gray-700">Food Price ($)</label>
          <input type="number" required id="foodPrice" value={foodPrice} onChange={(e)=>setFoodPrice(e.target.value)} 
          className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 
          focus:border-indigo-500 transition duration-300 ease-in-out group-hover:border-indigo-600 
          outline-none bg-gray-200" />
        </div>
        <div className="group">
          <label htmlFor="foodImage"  className="block text-sm font-medium text-gray-700">Food Image</label>
          <input type="file" required accept="image/*" id="foodImage" ref={foodImageRef} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out group-hover:border-indigo-600 outline-none bg-gray-200" />
        </div>
        <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Add Food Item</button>
      </form>
    </div>
  )
}
