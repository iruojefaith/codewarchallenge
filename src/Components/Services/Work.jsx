import React from 'react'
import { work } from './details'
const Work = () => {
  return (
     <div className=' bg-[#F4F0EC] grid gap-6 md:mx-[15rem] h-[100%] rounded-[4rem] mt-60 pt-20 px-16 '>
    <div className=' text-center '>
         <h1 >How We Work</h1>
         <h5 >It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of <br></br>the printing and typesetting industry.</h5>
    </div>
   <div className=' '>
    {work.map(({img, title, description, image, number, id }, index) => {
        return (
                <div key={index} className={`${  id === 1 || id === 3 ? " " : " flex-row-reverse "} md:flex flex-row my-20 `}>
                    <div className='place-items-center'>
                    <div className='flex justify-between  '>
                    <img src={img} className=" w-20 h-20 justify-evenly "/>
                    <img src={number} className=" w-24 h-24"/>
                    </div>
                    <div className='flex flex-col align-middle justify-center my-7 '>
                     <h1 className=' my-3 '>{title}</h1>
                    <p className=" ">{description}</p>
                    </div>
                    </div>
                     <img src={image} className= "rounded-bl-[5rem] md:rounded-bl-[17rem] rounded-tr-[10rem] px-8 md:w-96 md:h-96  " />
</div>

        )
    })}

    </div>
    </div>
  )
}

export default Work