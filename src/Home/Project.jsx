import React from 'react'
import { projectdetails } from './details'
function Project() {
  return (
    <div className='grid md:mx-[15rem] my-[5rem] mx-[1rem]  '>
        <div className='text-center'>
            <h1 className='text-[35px] md:text-[50px] text-[ #292F36]'>Follow Our Projects</h1>
            <p className='text-[22px]'>It is a long established fact that a reader will be distracted by the of readable<br></br>
            content of page  lookings at its layouts  points.</p>
        </div>
        <div className='grid grid-cols-2 justify-items-center  place-items-center  my-[4rem]'>
        {projectdetails.map(({title, img, description}, index) => {
            return (
            <div key={index} className="w-[30rem] gap-4 ">
                <img src={img} alt={title} />
                <p>{title}</p>
                <p>{description}</p>
            </div>)
        })}
        </div>
    </div>
  )
}

export default Project