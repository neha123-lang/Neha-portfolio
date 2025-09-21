import React from 'react'
import './Footer.css';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer'>
<div className="footer-top">
    <div className="footer-top-left">
        <p>Portfolio</p>
        <p>I am a backend developer from , India with 4 years of experience in technologies like php , laravel , Mysql</p>
    </div>
    <div className="footer-top-right">
        <div className="footer-email-input">
             <a
          href="https://linkedin.com/in/neha-72256a188"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        > < CiLinkedin style={{ color: "white", fontSize: "30px" }}/></a>
         
          <a
          href="https://github.com/neha123-lang"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        > <FaGithub style={{ color: "white", fontSize: "30px" }}/></a>
       
        </div>
    </div>
    <hr/>
    <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Neha. All rights reserved.</p>
    <div className="footer-bottom-right">
        <p>Term of Services</p>
        <p>Provacy policy</p>
        <p>Connect with me</p>

    </div>
    </div>
</div>

    </div>
  )
}

export default Footer