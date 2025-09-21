import React, { useRef, useState } from 'react'
import './Navbar.css';
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

import AnchorLink from 'react-anchor-link-smooth-scroll';
const Navbar = () => {
  const[menu,setMenu]= useState("home");
const menuRef= useRef();
const openMenu=()=>{
  menuRef.current.style.right="0";
}
const closeMenu=()=>{
  menuRef.current.style.right="-350px";
  
}
  return (
    <div className='navbar'>
        <b><p>Portfolio</p></b>
        <HiOutlineBars3 style={{fontSize: "30px"}} className='nav-bars' onClick={openMenu}/>
        <ul ref={menuRef} className='nav-menu'>
          <RxCross2  className='nav-cross' style={{fontSize: "30px"}} onClick={closeMenu}/>
            <li><AnchorLink href="#home"  className='anchor-link'><p>Home</p></AnchorLink></li>     
            <li><AnchorLink href="#about" offset={50} className='anchor-link'><p>About me</p></AnchorLink></li>
            <li><AnchorLink href="#service" offset={50} className='anchor-link'><p>Services</p></AnchorLink></li>
            <li><AnchorLink href="#work" offset={50} className='anchor-link'><p>My Work</p></AnchorLink></li>
            <li><AnchorLink href="#contact" offset={50} className='anchor-link'><p>Contact</p></AnchorLink></li>
            </ul>
            <div className="nav-connect"><AnchorLink href="#contact" offset={50} className='anchor-link'>Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar
