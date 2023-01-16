import React from 'react'
import { work } from './details'
const Work = () => {
  return (
     <div className=' bg-[#F4F0EC]] grid gap-6 md:mx-[15rem] my-40 align-middle justify-items-center  p-[1rem] h-[100%] rounded-[2rem] '>
    <div className='mt-[5rem] text-center'>
         <h1 className=' text-[35px] md:text-[50px] '>How We Work</h1>
         <p className='text-[20px]'>It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of <br></br>the printing and typesetting industry.</p>
    </div>
   <div className=' my-20 h-[vh]'>
    {work.map(({img, title, description, image, number, id }, index) => {
        return (
                <div key={index} className={`${  id === 1 || id === 3 ? "" : " "} grid grid-cols-2 gap-2 `}>
                    <div  className={`${ id === 1 ? "" : "  "} place-items-center `} >
                    <div className='flex jusitfy-between gap-x-60 md:mt-20 '>
                    <img src={img} className=" w-20 h-20 justify-evenly "/>
                    <img src={number} className=" w-24 h-24"/>
                    </div>
                     <h1 className='text-[35px]'>{title}</h1>
                    <p className="text-[20px]">{description}</p>
                    </div>
                    <div className='md:mt-20'>
                     <img src={image} className= {`${ id === 1 ? "md:-mt-30" : "  "} rounded-bl-[17rem] rounded-tr-[10rem] `}   />
                    </div>
</div>

        )
    })}

    </div>
    </div>
  )
}

export default Work