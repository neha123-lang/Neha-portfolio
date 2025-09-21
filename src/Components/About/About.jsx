import React from 'react'
import './About.css';
import profile_img from '../../assets/profile_img.png';
import theme_img from '../../assets/theme_pattern.svg';

const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About me</h1>
            {/* need to change  the pic  */}
            {/* <img src={theme_img}  alt = ""/> */}
        </div>
        <div className="about-sections">
            <div className='about-left'>
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I’ve built and maintained backend systems, working on APIs, databases, and authentication to keep applications reliable and secure.</p>
                    <p>Alongside backend, I’ve explored frontend development, connecting both ends to create smoother and more user-friendly experiences.</p>

                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>Core Php</p>
                        <hr style ={{width:"90%"}}></hr>
                    </div>
                    <div className="about-skill">
                        <p>laravel</p>
                        <hr style ={{width:"60%"}}></hr>
                    </div>
                    <div className="about-skill">
                        <p>Mysql</p>
                        <hr style ={{width:"80%"}}></hr>
                    </div>
                    <div className="about-skill">
                        <p>javascript</p>
                        <hr style ={{width:"45%"}}></hr>
                    </div>
                    <div className="about-skill">
                        <p>React js</p>
                        <hr style ={{width:"40%"}}></hr>
                    </div>
                </div>
            </div>

        </div>
        <div className='about-achievements'>
        <div className="achievements">
            <h1>4</h1>
            <p>Years of Experience</p>
        </div>
        <hr />
        <div className="achievements">
            <h1>90+</h1>
            <p>API CREATED</p>
        </div>
        <hr />
        <div className="achievements">
            <h1>15+</h1>
            <p>HAPPY CLIENT</p>
        </div>
        </div>
    </div>
  )
}

export default About