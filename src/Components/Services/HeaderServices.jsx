
import React from 'react'
import Bg from '../../Assets/Services.jpg';
import { details } from './details';
import { AiOutlineArrowRight } from "react-icons/ai";

const HeaderServices = () => {
  return (

     <div className=' '>
    <div className='relative '>
          <img
            src={Bg} alt={Bg}
            className=' w-screen absolute object-cover h-[20rem] md:max-h-50 mb-[5rem] '
          />
           <div className='  grid h-screen place-items-center '>
            <div className='absolute -mt-[7rem] justify-center align-middle '>
              <h1 className=' md:text-[50px] leading-8 my-6 bg-[#fff] px-16 md:px-24 py-10 w-50 rounded-tr-3xl rounded-tl-3xl text-center'>Services <br></br><span className='text-[20px] leading-1 '>Home/Services</span> </h1>
                 </div>
            </div>
    </div>

        <div className=' grid md:grid-cols-2 lg:grid-cols-3  place-items-middle md:mx-[15rem]  mx-1rem  -my-52'>
      {details.map(({title, description, button }, index) => {
        return (
            <div className='flex  gap-2  m-3 h-30 justify-center align-middle '>
             <div key={index} className=" w-full  p-2 flex  flex-col text-center justify-items-center items-center "  >
                 <h3 className='font-bold '>{title}</h3>
                <p className=' mt-5 text-[#292F36]  w-full '> {description}</p>
                 <button className=' text-[#292F36]  hover:scale-95 transition rounded-md my-6 flex flex-cols  '>{button  }&nbsp;&nbsp;<AiOutlineArrowRight className='text-[#CDA274] mt-[.4rem] '/></button>
            </div>
            </div>
      )})}
            </div>

    </div>
  )
}

export default HeaderServices;