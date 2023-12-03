

import React from 'react'
import './intro.css'
import reddy1 from './reddy1.jpg'
import {Link} from 'react-scroll'
const Intro = () => {
  return (
   <section id='intro'>
    <img src={reddy1} alt='img' className='bg'/>
 
    <div className="introContent">
     <span className='hello'>Hello,</span>
     <span className='introText'>I'm <span className="introName">Kanni</span><br />Website Designer</span>
     <p className='introPara'>I am a skilled web designer with experience in creating <br /> visually appealing and user friendly websites</p>
     <Link ><button className='btn'> Hire Me</button></Link>
    </div>
    
    
    
    

   </section>
  )
}

export default Intro
