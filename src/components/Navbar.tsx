import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
export const Navbar = () => {
  return (
    <header className="header">
    <nav className="nav bd-container">
        <a href="#" className="nav__logo">
        <Image
              src="/logo/H_logo_w.svg"
              alt="Home Logo"
              width={50}
              height={50}
            />

        </a>
        
        <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
                <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Explore</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Destinations</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Hotels</a></li>
            </ul>
        </div>
        
        <div className="nav__toggle" id="nav-toggle">
            <i className='bx bx-menu'><HiMenuAlt3 /></i>
        </div>
    </nav>
</header>
  )
}
