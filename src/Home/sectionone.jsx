import React from 'react'
import { details } from "./details";
import { AiOutlineArrowRight } from "react-icons/ai";
function SectionOne() {
  return (
    <div className=' md:mx-[15rem] my-[5rem] mx-1rem '>

        <div className=' grid grid-cols-1  md:grid-cols-3  place-items-middle  '>
      {details.map(({title, description, button }, index) => {
        return (
            <div className='flex  gap-2  m-3 h-30 justify-center align-middle '>
             <div key={index} className=" w-full  p-2 flex  flex-col text-center justify-items-center items-center "  >
                 <h3 className='text-[25px]  font-bold '>{title}</h3>
                <p className=' mt-5 text-[#292F36]  w-full text-[22px] '> {description}</p>
                 <button className=' text-[#292F36]  hover:scale-95 transition rounded-md my-6 flex flex-cols  '>{button  }&nbsp;&nbsp;<AiOutlineArrowRight className='text-[#CDA274] mt-[.4rem] '/></button>
            <div>
            </div>
            </div>

</div>
        );
     })};
     </div>
    </div>

  )
}

export default SectionOne;