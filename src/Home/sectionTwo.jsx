import React from 'react';
import Call  from '../Assets/Call.svg';
import SectionTwobg  from '../Assets/sectiontwobg.jpg';
import { AiOutlineArrowRight } from "react-icons/ai";

function SectionTwo() {
  return (
    <div className='grid md:grid-cols-2 md:mx-[15rem] my-[4rem] md:mt-[-1rem] mx-[1rem] '>
        <div className='grid grid-cols-1 py-[5rem] mr-[3rem] '>
            <h1 className=' text-[#4D5053] '>We Create The Art Of Stylish Living Stylishly</h1>
            <p className=' my-7 '>It is a long established fact that a reader will
             be distracted by the of readable content of a page
            when lookings at its layouts the points of using
            that it has a more-or-less normal.</p>
            <div className='mt-5 flex align-middle justify-items-center gap-4 '>
                <div className='w-[3rem] h-[3rem] rounded-full bg-[#F4F0EC] relative '>
                    <img src={Call} alt="call logo" className=' absolute object-center w-[1rem] h-[1rem] mt-[1.5rem] ml-[1.5rem]'/>
                </div>
                <div>
                    <h3 className=' font-bold text-[#4D5053] '>012345678</h3>
                    <p>Call Us Anytime</p>
                </div>
            </div>
            <div>
            <button className="  ml-[1rem] bg-[#4D5053] mt-6 p-4 rounded-[.8rem] text-[16px] text-[#FFF] flex ">Get free Estimate &nbsp;&nbsp;<AiOutlineArrowRight className=' mt-[.4rem] text-[#CDA274] '/></button>
         </div>
        </div>
        <div className=' '>
            <img src={SectionTwobg} alt="section two bg" className='my-[3rem] rounded-tr-[18rem] rounded-bl-[7rem]'/>
        </div>
    </div>
  )
}

export default SectionTwo