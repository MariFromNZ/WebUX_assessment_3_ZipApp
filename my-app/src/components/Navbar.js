import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "./navStyle.css"
import zipLogoSmall from "../images/zipLogoSmall.svg"

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <img src={zipLogoSmall} alt="small zip logo"/>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Community</a>
                <a href="/#">Upload</a>
                <a href="/#">Profile</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;