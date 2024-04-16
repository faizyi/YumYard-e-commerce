import { Link,useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered,faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import addToCart from '../../assets/addtocart.png'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toogleTheme } from "../../redux/themeSlice";
export default function Navbar() {   
    const dispatch = useDispatch()
    const theme = useSelector(state=>state.theme)
    const bgColor = useSelector(state=>state.backgroundColor)
    const color = useSelector(state=>state.color)
    const [isActive, setIsActive] = useState(false);
    const navbarIcon = () =>{
        setIsActive(true)
    }
    const overlay = () =>{
        setIsActive(false)
    }
    return (
        <>
        <header className={`bg-${bgColor} text-${color} header sticky top-0 z-50`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-0 lg:px-8" aria-label="Global">
                <span onClick={navbarIcon}  className="nav-bar-icon">
                <FontAwesomeIcon icon={faBarsStaggered} />
                </span>
                <div className="flex lg:flex-1">
                    <Link to={'/'} className="-m-1.5 p-1">
                        <h1 className="nav-logo">YumYard</h1>
                    </Link>
                </div>

            <div onClick={overlay} className={isActive ? "navbar-overlay" : ""}></div>
                <div className={isActive ? `bg-${bgColor} navbar active` : `bg-${bgColor} navbar`}>
                    <div  className={`navbar-show`}>
                        <div>
                            <h1 className={`text-${color} text-black`}>YumYard</h1>
                        </div>
                <Link onClick={overlay} to={'/auth?mode=login'} className="nav-login">                    
                        Login
                    </Link>
                    <span onClick={()=>dispatch(toogleTheme())} className={`text-${color} icon`}>{theme}</span>
                    <div  className="nav-links">
                        <Link className={`text-${color}`} onClick={overlay} >Store Location</Link>
                        <Link className={`text-${color}`} onClick={overlay} >Track Order</Link>
                        <Link className={`text-${color}`} to={'/cart'} onClick={overlay} >Explore Menu</Link>
                    </div>
                    <hr className="text-white"/>
                    <div className="nav-links">
                        <Link className={`text-${color}`} to={'/'} onClick={overlay} >Home</Link>
                        <Link className={`text-${color}`} onClick={overlay} >About</Link>
                        <Link className={`text-${color}`} onClick={overlay}>Contact us</Link>
                    </div>
                    </div>
                </div>


                <Link to={'/cart'}><img className="nav-addToCart" src={addToCart} alt="" /></Link>
                <div className="py-10">
                    <Link to={'/auth?mode=login'} className="nav-login">                    
                        Login
                    </Link>
                </div>
            </nav>
        </header>
        </>
    )
}
