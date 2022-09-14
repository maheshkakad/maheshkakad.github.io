import React from 'react'
import img1 from './Coding.gif'

import"./MyDetails.css"

export default function MyDetails() {
    return (
        <div className='details' id="ABOUT">
            <p className='me'>About Me</p>
            <img src={img1} alt="" />
            <p className='mydetails'>
            Dedicated and efficient aspiring full-stack web developer with the ability to learn and collaborate in rapidly changing environments and compositions. Worked through 1000+ hours of Bootcamp structure, learning MERN Stack and Data Structures and Algorithms along with 5+ collaborative projects and a personal project. Eager to tackle web development challenges to achieve lasting impacts on user experience and to grow technical knowledge simultaneously.
            </p>
        </div>
    )
}
