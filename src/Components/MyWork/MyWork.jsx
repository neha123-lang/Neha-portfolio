import React from 'react'
import './MyWork.css';
import My_Work_data from '../../assets/My_Work_data'
import { FaArrowRight } from "react-icons/fa";
const MyWork = () => {
  return (
    <div id = "work"className='mywork'>
       <div className="mywork-title">
        <h1> My Latest Work</h1>

            </div> 
            <div className="mywork-container">
                {My_Work_data.map((work,index)=>{
                    return <img key={index} src={work.w_img} alt=""/>
                })}
            </div>
            {/* <div className="mywork-showmore">
                <p>Show more</p>
                <FaArrowRight />
            </div> */}
    </div>
  )
}

export default MyWork