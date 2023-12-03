

import React from 'react'
import './Skills.css'
import ui from './ui.png'
import web from './web.png'
import java from './java.png'

const Skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually apealing and user-friendly website, I have a strong understanding of design and a keen eye for detail. I am proficient in Html,css,and Javascript</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={ui} alt="ui design" className='skillBarImg' />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p> This is demo text, you can werite own content here </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={web} alt="" className='skillBarImg' />
          <div className="skillBarText">
            <h2>WebSite Design</h2>
            <p>This is demo text, you can werite own content here </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={java} alt="" className='skillBarImg' />
          <div className="skillBarText">
            <h2>Core Java</h2>
            <p>This is demo text, you can werite own content here </p>
          </div>
        </div>
      
      </div>
    </section>
  )
}

export default Skills
