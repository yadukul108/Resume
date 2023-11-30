import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll'
const Navbar = () => {
  const[showMenu,setShowMenu]=useState(false);
  return (
    <div>
      <nav className='navbar'>
        <div className="logo"></div>
        <div className="navitems">
            <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-150} duration={500} className="navitemstext">Home</Link>
            <Link activeClass='active' to="SkillSection" spy={true} smooth={true} offset={0} duration={500}className="navitemstext">Skills</Link>
            <Link activeClass='active' to="Projects" spy={true} smooth={true} offset={0} duration={500}className="navitemstext">Portfolio</Link>
            <Link className="navitemstext">Resume</Link>

        </div>
        <button className="btn" onClick={()=>{
  document.getElementById('ContactTitle').scrollIntoView({ behavior: 'smooth' });
}}>
            <div className="Contact"></div>Contact Me
        </button>

        <div className="logodrop" onClick={()=>setShowMenu(!showMenu)}></div>
        <div className="navitemsmobile" style={{display : showMenu? "flex":"none"}}>
            <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-150} duration={500} onClick={()=>setShowMenu(false)}className="navitemstextmobile">Home</Link>
            <Link activeClass='active' to="SkillSection" spy={true} smooth={true} offset={0} duration={500}onClick={()=>setShowMenu(false)}className="navitemstextmobile">Skills</Link>
            <Link activeClass='active' to="Projects" spy={true} smooth={true} offset={0} duration={500}onClick={()=>setShowMenu(false)}className="navitemstextmobile">Portfolio</Link>
            <Link activeClass='active' to="ContactTitle" spy={true} smooth={true} offset={-10} duration={500}onClick={()=>setShowMenu(false)}className="navitemstextmobile">Contact</Link>

        </div>

      </nav>
    </div>
  )
}

export default Navbar
