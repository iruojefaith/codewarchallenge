import React from 'react'
import POne from "../Assets/P1.png";
import PTwo from "../Assets/P2.png";
import PThree from "../Assets/P3.png";
import PFour from "../Assets/P4.png";

function Project() {
  return (
    <div className='grid md:mx-[15rem] my-[5rem] mx-[1rem]  '>
        <div className='text-center'>
            <h1 className='  text-[#292F36]'> Follow Our Projects</h1>
            <p className=' text-[#4D5053]'>It is a long established fact that a reader will be distracted by the of readable<br></br>
            content of page  lookings at its layouts  points.</p>
        </div>
        <div className='grid md:grid-cols-2 justify-items-center  place-items-center gap-10 my-[4rem]'>
            <div className="w-[25rem]  ">
             <img src={POne} alt="title" className='rounded-tr-[3rem] '/>
             <div className='flex  justify-items-center  place-items-center justify-between mt-5'>
             <div>
               <p>Modern Kitchan</p>
              <p className='text-[#4D5053]'>Decor / Artchitecture</p>
             </div>
              <button  className='bg-[#F4F0EC] w-[3rem] h-[3rem] rounded-full block text-center pointer font-bold text-[#292F36]  '>&#62;</button>
             </div>
            </div>
             <div className="w-[25rem] ">
             <img src={PTwo} alt="title" className='rounded-tl-[3rem] '/>
            <div className='flex  justify-items-center  place-items-center justify-between mt-5'>
             <div>
               <p>Modern Kitchan</p>
              <p className='text-[#4D5053]'>Decor / Artchitecture</p>
             </div>
              <button  className='bg-[#F4F0EC] w-[3rem] h-[3rem] rounded-full block text-center pointer font-bold text-[#292F36]  '>&#62;</button>
             </div>
            </div>
             <div className="w-[25rem] ">
             <img src={PThree} alt="title" className='rounded-br-[3rem] ' />
               <div className='flex  justify-items-center  place-items-center justify-between mt-5'>
             <div>
               <p>Modern Kitchan</p>
              <p className='text-[#4D5053]' >Decor / Artchitecture</p>
             </div>
              <button  className='bg-[#F4F0EC] w-[3rem] h-[3rem] rounded-full block text-center pointer font-bold text-[#292F36]  '>&#62;</button>
             </div>
            </div>
             <div className="w-[25rem] ">
             <img src={PFour} alt="title" className='rounded-bl-[3rem] '/>
                 <div className='flex  justify-items-center  place-items-center justify-between mt-5'>
             <div>
               <p>Modern Kitchan</p>
              <p className='text-[#4D5053]' >Decor / Artchitecture</p>
             </div>
              <button  className='bg-[#F4F0EC] w-[3rem] h-[3rem] rounded-full block text-center pointer font-bold text-[#292F36]  '>&#62;</button>
             </div>
            </div>
        </div>
    </div>

  )


}

export default Project;
