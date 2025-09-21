import React from 'react'
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/backend_Development_neha_resume.pdf';
import profile_img from '../../assets/profile_img.png';
const Hero = () => {
  return (
    <div id ="home"className='hero'>
        <img src={profile_img} alt=""/>
        <h1><span>I'm Neha ,</span>  Backend Developer</h1>
        <p>I'm a Backend developer with 4 years of hands-on experience, steadily expanding skills into frontend development. Skilled in building reliable, scalable, and efficient solutions.</p>
        <div className="hero-action">
            <div className="hero-connect">
               <AnchorLink href="#contact" offset={50} className='anchor-link'> Connect with me </AnchorLink>
            </div>
            <div className="hero-resume"><a href={resume} download>My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero