import React from 'react'
import './Services.css';
import Service_data from '../../assets/Service_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <div id = "service" className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            </div>
        <div className="service-container">
            {Service_data.map((services,index)=>{
                return <div key={index} className='service-format'>
                    <h3>{services.s_no}</h3>
                    <h2>{services.s_name}</h2>
                    <p>{services.s_desc}</p>
                    <div className="services-readmore">
                        
                    </div>

                </div>
            })}
        </div>
    </div>
  )
}

export default Services