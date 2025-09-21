import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCall } from "react-icons/md";
import './Contact.css';
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d3ba8b5f-672f-42f0-9c0f-c6a70a929a0b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();

    if (data.success) {
      alert("Form is succesfully Submited");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id = "contact"className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I’m open to new job opportunities and collaborations. Feel free to reach out if you think I’d be a good fit for your team or project.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <HiOutlineMail /><p>nehakumari39584@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <MdOutlineCall /> <p>8920396189</p>    
                    </div>
                    <div className="contact-detail">
                        <CiLocationOn /><p>Gurgaon , India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor='' >Your Name</label>
                <input type="text" placeholder ="Please Enter Your Name" name="name" />
                <label htmlFor='' >Your Email</label>
                <input type="email" placeholder ="Please Enter Your Email" name="email" />
                <label htmlFor='' >Write Your Message Here</label>
                <textarea rows="8" placeholder ="Please Enter Your Email" name="message" />
                <button type = "submit"className='contact-submit'>Submit Now</button>
            </form>
        </div>

    </div>
  )
}

export default Contact