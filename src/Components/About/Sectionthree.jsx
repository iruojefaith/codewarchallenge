import React from 'react'
import Card from './card';

import { peoplesay } from './data';

const Sectionthree = () => {


  return (
        <div className='grid md:mx-[15rem] my-[5rem] mx-[1rem]  '>
        <div className='text-center'>
            <h1 className='text-[35px] md:text-[50px] text-[#292F36]'> What the People Thinks About Us</h1>
            <div className='flex gap-4 '>
            {peoplesay.map(({ img}, index) => {
                return (
                   <Card img={img} key={index} index={index}/>
                )
            })}

            </div>
        </div>
    </div>
  )
}

export default Sectionthree