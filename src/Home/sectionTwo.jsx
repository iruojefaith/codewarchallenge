import React from 'react';
import Call  from '../Assets/Call.svg';
import SectionTwobg  from '../Assets/sectiontwobg.jpg'

function SectionTwo() {
  return (
    <div className='grid md:grid-cols-2 md:mx-[15rem] my-[5rem] mx-[1rem] '>
        <div className='grid grid-cols-1 py-[5rem] mr-[3rem] '>
            <h1 className='text-[50px] text-[#4D5053] '>We Create The Art<br></br> Of Stylish Living <br></br>Stylishly</h1>
            <p className='text-[22px] my-7 '>It is a long established fact that a reader will
             be distracted by the of readable content of a page
            when lookings at its layouts the points of using
            that it has a more-or-less normal.</p>
            <div className='mt-5 flex align-middle justify-items-center gap-4 '>
                <div className='w-[5rem] h-[5rem] rounded-full bg-[#F4F0EC] relative '>
                    <img src={Call} alt="call logo" className=' absolute object-center w-[2rem] h-[2rem] mt-[1.5rem] ml-[1.5rem]'/>
                </div>
                <div>
                    <h3 className='text-[24px] font-bold text-[#4D5053] '>012345678</h3>
                    <p>Call Us Anytime</p>
                </div>
            </div>
        </div>
        <div className=' '>
            <img src={SectionTwobg} alt="section two bg" className='my-[3rem] rounded-tr-[18rem] rounded-bl-[7rem]'/>
        </div>
    </div>
  )
}

export default SectionTwo