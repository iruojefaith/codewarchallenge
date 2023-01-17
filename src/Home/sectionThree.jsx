import React from 'react'
import { aboutdetails } from './details'



function SectionThree() {
  return (
    <div className=' bg-[#F4F0EC] grid grid-cols-1 md:mx-[15rem] mx-[2rem] align-middle justify-items-center  relative px-[2rem] h-[100%] rounded-[2rem] '>
    <div className='mt-[5rem]'>
         <h1 className=' text-[35px] md:text-[50px] text-[#4D5053] text-center mx-6 md:mx-24 '> What the People Thinks About Us </h1>
    </div>

        <div className='grid grid-cols-1 md:grid-cols-3  gap-4 mt-[2rem] mb-[4rem] '>
        {aboutdetails.map(({name, country, description, img }, index)=> {
            return (
                 <div key={index} className=" bg-white  rounded-3xl   p-5">
                    <div className='flex gap-4  mt-[1rem] '>
                        <img src={img} alt={name} className=" rounded-full "/>
                        <div className='text-[16px]'>
                            <h1 className=' text-[#292F36] font-bold'>{name}</h1>
                            <p className='text-[ #4D5053]'>{country}</p>
                        </div>
                    </div>
                    <p className='mt-5 text-[16px] text-[ #4D5053]'>{description}</p>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default SectionThree;