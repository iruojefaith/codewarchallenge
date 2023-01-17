import React from 'react';
import { experiencedetails } from './details';

function Experience() {
  return (

    <div className='bg-[#F4F0EC] w-[100%] h-[20rem] '>
    <div className='grid grid-cols-4 md:mx-[15rem] my-[2rem] mx-[1rem] justify-items-center align-middle  '>
    {experiencedetails.map(({title, number, id}, index) => {

        return (
            <div key={index} className={`${
            id === 1 ||
            id === 2 ||
            id === 3
            ?  "border-[#CDA274] md:border-r-4  "  : " " }
            h-[8rem]  my-[5rem] pr-[3rem] text-center `}>
    <h1 className='md:text-[85px] text-[50px] text-[#CDA274]'>{number}</h1>
    <p className='md:text-[18px] text-[16px]  text-center ' >{title}</p>
    </div>
)})}

    </div>
    </div>


  )
}

export default Experience