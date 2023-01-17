import React from 'react'
import Card from './card';

import { peoplesay } from './data';

const Sectionthree = () => {


  return (
        <div className='grid md:mx-[15rem] mt-[5rem] mx-[1rem]  '>
        <div className='text-center'>
            <h1 className='text-[#292F36]'> What the People Thinks <br></br>About Us</h1>
            <div className='grid gap-4 my-6 md:grid-cols-4 align-middle justify-items-center '>
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