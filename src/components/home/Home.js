import React from 'react'
import { useEffect } from 'react';
import Typed from 'typed.js';

import "./Home.css"

   
const Home = () => {
  

  
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings:["MERN Stack Developer","DSA enthusiast","IITian"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1000,
    loop:true,
  
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []); 
  


 
  return (
    <div>

      <section id="intro">
        <div className="introcontent">
<span className='Hello'>Hello,</span>
<span className="intoText">I am <span className="introName">Aditya</span> <br /><div className="type">      <span ref={el} />
</div></span>
      <p className="intopara"style={{fontWeight:"600",fontFamily:"initial"}}>Eager to contribute my skills and passion for innovation to a dynamic team and make a meaningful impact in the world of web development.</p>
      <a href="/"style={{width:"10rem"}}><button className='hireBtn'><div className="hireImage"></div>Hire Me</button></a>  </div>
    
        <div className="profilepic"></div>
        </section>
      
    </div>
  )
}

export default Home
