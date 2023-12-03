
import React, { useRef } from 'react'
import './Contact.css'
import facebook from './facebook.png'
import insta from './insta.jpeg'
import linkedin from './linkedin.png'
import twitter from './twitter.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8pp3lfw', 'template_cn23vpo', form.current, 'Z6drHxqHdwdAyzLGyDcD6')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent !');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id='contact'>
      <h1 className="contactPageTitle">Contact </h1>
      <span className="contactDesc">Please fill out the form below to discuss any work </span>
      <form  className="contactForm" ref={form} onsubmit={sendEmail}>
        <input type="text" className="name" placeholder='Your Name' name='your_name'/>
        <input type="email" className="email" placeholder='Your Email' name='your_email'/>
        <textarea className='msg' name="message"   rows="5" placeholder='Your Message'></textarea>
        <button type='submit' value='Send' className="submitBtn">Submit</button>
        <div className="links">
          <img src={facebook} alt="facebook" className="link" />
          <img src={insta} alt="insta" className="link" />
          <img src={linkedin} alt="linkedin" className="link" />
          <img src={twitter} alt="twitter" className="link" />
        </div>
      </form>
      
      
    </div>
  )
}

export default Contact
