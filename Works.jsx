
import React from 'react'
import './Works.css'
import image1 from './image1.jpeg' 
import image2 from './image2.jpeg'
import images3 from './images3.png'  
import image4 from './image4.jpeg' 
import images5 from './images5.jpeg' 
import images6 from './images6.jpeg' 
const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">
            My Portfolio
        </h2>
        <span className="workDesc">I take pride in payinr attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and my experience to help businesses achieve their goals and create a strong online presence</span>
        <div className="workImgs">
            <img src={image1} alt="" className="worksImg" />
            <img src={image2} alt="" className="worksImg" />
            <img src={images3} alt="" className="worksImg" />
            <img src={image4} alt="" className="worksImg" />
            <img src={images5} alt="" className="worksImg" />
            <img src={images6} alt="" className="worksImg" />
        </div>
        <button className="workBtn">See more</button>
    </section>
  )
}

export default Works
