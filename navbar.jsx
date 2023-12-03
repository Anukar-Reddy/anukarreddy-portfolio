
import React, { useState } from 'react'

import './navbar.css'
import {Link} from 'react-scroll'
import menu from './menu.png'

const Navbar = () => {
   const [showMenu,setshowMenu]=useState(false);
  return (
   
    <div className="navbar">
        <h1 className='logo'>Kanni</h1>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'> Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>Portfolio</Link>
          

        </div>
        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}> 
        Contact me </button>
        <img src={menu} className='mobMenu' onClick={()=>setshowMenu(!showMenu)}alt="menu" />
        <div className="navMenu" style={{display: showMenu?'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}> Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}  className='listItem' onClick={()=>setshowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Contact</Link> 
        </div>
  </div>
  
  )
}

export default Navbar

