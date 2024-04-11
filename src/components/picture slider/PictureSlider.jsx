import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import picture1 from '../../assets/home-pictures-slider/8043ab90-ef98-11ee-81f6-83dfec64c5cf-995x356_desktop_image-2024-03-31195436.jpg'
import picture2 from '../../assets/home-pictures-slider/a4214300-f29b-11ee-84d7-dbdd7f31cafb-1copy_desktop_image-2024-04-04155438.jpg'
import picture3 from '../../assets/home-pictures-slider/a4214300-f29b-11ee-9369-4b37f1b69624-995x396_desktop_image-2024-04-04155438.jpg'
import picture4 from '../../assets/home-pictures-slider/a51dcb70-f29b-11ee-b054-e5a9f371a41b-995x356_desktop_image-2024-04-04155439.jpg'
export default function PictureSlider() {
  return (
    <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={picture1} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={picture2} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={picture3} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={picture4} className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
