import React from 'react'
import Navbar from '../navbar/navbar'
import PictureSlider from '../picture slider/PictureSlider'
import ExploreMenue from '../pages/ExploreMenue/ExploreMenue'
import Footer from '../pages/footer/Footer'
import BestSeller from '../pages/bestSeller/BestSeller'

export default function Home() {
  return (
    <div>
        <PictureSlider/>
        <ExploreMenue/>
        <BestSeller/>
        <Footer/>
    </div>
  )
}
