import React from 'react'
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      
      <div className="footer">
      <div className="colab">
        <div className="start">Start a project</div>
        <div className="chat">Interesting in working together? We should queue up a chat.<br/>Tea or Coffee?</div>
        <div className="buttonlets">
<button className="LET"><h3>Let's do this</h3></button>        </div>
      </div>
        <div className="lododiv"><div className="logo"></div></div>
        <div className="statement">I have made this portfolio using reactJS and EmailJS</div>
        <div className="links">
        <a href="https://www.instagram.com/aditya9003yadav/"><div className="insta"></div></a>
       <a href="https://www.linkedin.com/in/aditya-yadav-7ab715269/"> <div className="linkdin">
        </div></a>
        <a href="https://www.facebook.com/profile.php?id=100087545650107"><div className="facebook"></div></a>
        <a href="https://github.com/yadukul108"><div className="github"></div></a>
       </div>
              <div className="copywrite">Handcrafted by me @yadukul108</div>
      </div>
    </div>
  )
}

export default Footer
