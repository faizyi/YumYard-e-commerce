import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () =>{
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    } 
  return (
    <footer className="bg-red-600 text-white py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl mb-4">About YumYard</h2>
            <p className="text-sm">Learn more about YumYard history, values, and commitment to quality.</p>
          </div>
          <div>
            <h2 className="text-xl mb-4">Explore</h2>
            <ul className="text-sm">
              <li>Menu</li>
              <li>Deals</li>
              <li>Locations</li>
              <li>Order Online</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl mb-4">Connect With Us</h2>
            <div className="flex items-center">
              <Link to={'/'} onClick={scrollToTop} className='text-blue mr-4'>
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </Link>
              <Link to={'/'} onClick={scrollToTop} className='text-black mr-4'>
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
                </Link>
              <Link to={'/'} onClick={scrollToTop} className='text-#e4405f mr-4'>
                <FontAwesomeIcon icon={faInstagram} size="lg" />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
