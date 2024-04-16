import React from 'react'
import img1 from '../../../assets/best seller/1.png'
import img2 from '../../../assets/best seller/2.png'
import img3 from '../../../assets/best seller/3.png'
import img4 from '../../../assets/best seller/4.png'
import { Link } from 'react-router-dom'
const images = [
    { img: img1, name: "Krunch Combo", price : "Rs 520" },
    { img: img2, name: "Krunch Chicken Combo", price : "Rs 530"},
    { img: img3, name: "Chicken & Chips", price : "Rs 550" },
    { img: img4, name: "3 Pcs Chicken", price : "Rs 620" }
]
export default function BestSeller() {
  return (
    <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">BEST SELLERS</h2>
  
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {
            images.map((item,index)=>{
                return   <Link to={'/cart'} key={index}>
                <div class="group relative">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img src={item.img} 
                  alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-blue">
                        {/* <span aria-hidden="true" class="absolute inset-0"></span> */}
                        {item.name}
                    </h3>
                  </div>
                  <p class="text-sm font-medium text-gray-900">{item.price}</p>
                </div>
              </div>
              </Link>  
            })
        }
        </div>
    </div>
  </div>
  )
}
