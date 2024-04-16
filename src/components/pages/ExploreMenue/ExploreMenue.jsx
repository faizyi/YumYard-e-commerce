import React from 'react'
import menuImage1 from '../../../assets/ExploreMenu Images/1.png'
import menuImage2 from '../../../assets/ExploreMenu Images/2.png'
import menuImage3 from '../../../assets/ExploreMenu Images/3.png'
import menuImage4 from '../../../assets/ExploreMenu Images/4.png'
import menuImage5 from '../../../assets/ExploreMenu Images/5.png'
import menuImage6 from '../../../assets/ExploreMenu Images/6.png'
import menuImage7 from '../../../assets/ExploreMenu Images/7.png'
import menuImage8 from '../../../assets/ExploreMenu Images/8.png'
import { Link } from 'react-router-dom'
const menuImages = [menuImage1,menuImage2,menuImage3,menuImage4,menuImage5,menuImage6,menuImage7,menuImage8]
export default function ExploreMenue() {
  return (
    <div className="bg-white overflow-y-auto">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">EXPLORE MENU</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {menuImages.map((img, index) => (
            <Link key={index} to={'/cart'}>
              <div className="group relative ExploreMenu">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-full bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 transform transition duration-500 hover:-rotate-6 hover:shadow-lg">
                  <img
                    src={img}
                    alt="Explore Menu Item"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full menu-image"
                  />
                </div>
                <div className="overlay bg-red-600 bg-opacity-75">
                  <span className='text-white text-lg font-semibold'>Everyday Value</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
