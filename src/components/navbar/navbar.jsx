import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import addToCart from '../../assets/addtocart.png'
export default function Navbar() {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-0 lg:px-8" aria-label="Global">
                <span  className="nav-bar-icon">
                <FontAwesomeIcon icon={faBarsStaggered} />
                </span>
                <div className="flex lg:flex-1">
                    <Link to={'/'} className="-m-1.5 p-1">
                        <h1 className="nav-logo">YumYard</h1>
                    </Link>
                </div>
                <img className="nav-addToCart" src={addToCart} alt="" />
                <div className="py-10">
                    <Link to={'/login'} className="nav-login">                    
                        Login
                    </Link>
                </div>
            </nav>
        </header>
    )
}
