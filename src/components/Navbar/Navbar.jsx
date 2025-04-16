import React , { useState, useEffect }from 'react';
import {Link} from 'react-scroll';
import "./navbar.css"
import Logo from '../../assets/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

  // Mobile Menu State
  const [sidenav, setSidenav] = useState(false);
  // Desktop fixed menu
  const [sticky, setSticky] = useState(false);


  // Mobile icon click
  const menuIcon = <FontAwesomeIcon icon={faBars} />
  // SideNav click
  const sidenavShow = () =>{
    setSidenav(!sidenav);
  }

  // Scroll Fixed Navbar
  useEffect(() =>{
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    }

    window.addEventListener('scroll', handleScroll);
    return() => window.removeEventListener("scroll", handleScroll);
  })
  return (
    <>
    
    <header id='site_header' className={`${sticky ? 'sticky' : ''}`}>
      <div className='container'>
        <nav className='navbar' id='Navbar'>
          <div className="navbar_brand">
            <a href="#">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="navbar_toggler" onClick={sidenavShow}>
            {menuIcon}
          </div>
          <div className={`menu_items ${sidenav === true ? 'active' : ''}`}>
            <ul>
                <li>
                  <Link activeClass="active" to="home" spy={true} smooth={true} >
                    Home
                  </Link> 
                </li>
                <li>
                  <Link  to="about" spy={true} smooth={true} >
                    About US
                  </Link> 
                </li>
                <li>
                  <Link  to="servise" spy={true} smooth={true} >
                    Servise
                  </Link> 
                </li>
                <li>
                  <Link  to="blog" spy={true} smooth={true} >
                    Blog
                  </Link> 
                </li>
                <li>
                  <Link  to="contact" spy={true} smooth={true} >
                   Contact
                  </Link> 
                </li>
            </ul>
          </div>

        </nav>
      </div>
     
    </header>

    <div style={{height: "1000px"}} >

    </div>
    </>
  )
}
