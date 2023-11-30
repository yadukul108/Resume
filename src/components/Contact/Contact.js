import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';import "./Contact.css"
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hnjzxfr', 'template_owetbm8', form.current, 'Xi6hfMVtAcgsGuoME')
      .then((result) => {
          console.log(result.text);
          alert("Email sent sucessfully")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    
    <div>
      <div id="ContactTitle">
        <h1 className='title'>Contact Me</h1>
        <span className="descriptionContact">Please fill out the form below to discuss any work opportunity</span>
        <form action="" className="contactform" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name"name="user_name" placeholder='Your Name'/>
            <input type="email" className="email" name="user_email"placeholder='Your Email'/>
            <textarea name="message" placeholder="Any Message" id="" cols="30" rows="10" className="msg"></textarea>
       <button className="submit">Submit</button>
       <div className="links">
        <a href="https://www.instagram.com/aditya9003yadav/"><div className="insta"></div></a>
       <a href="https://www.linkedin.com/in/aditya-yadav-7ab715269/"> <div className="linkdin">
        </div></a>
        <a href="https://www.facebook.com/profile.php?id=100087545650107"><div className="facebook"></div></a>
        <a href="https://github.com/yadukul108"><div className="github"></div></a>
       </div>
        </form>

      </div>
    </div>
  )
}

export default Contact
