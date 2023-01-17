import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import {aboutdata} from './data';

function Sectiontwo() {
  return (
    <div className='grid md:grid-cols-2 mx-9 md:mx-64 my-32 gap-9'>
    {aboutdata.map(({title, description, img, button, id }, index) => {
        return (
                <div key={index} className={`${  id === 1 ? "" : "md:flex-col-reverse  "} flex flex-col gap-6 md:gap-52 align-middle justify-center`}>
                    <div  className={`${ id === 1 ? "" : " md:-mt-20  "} justify-center grid align-top` } >
                     <h1 >{title}</h1>
                    <p >{description}</p>
                      <div>
                        <button className="  ml-[1rem] bg-[#4D5053] mt-6 p-4 rounded-[.8rem] text-[16px] text-[#FFF] flex ">{button} &nbsp;&nbsp;<AiOutlineArrowRight className=' mt-[.4rem] text-[#CDA274] '/></button>
                     </div>
                    </div>

                    <div>
                     <img src={img} className= {`${ id === 1 ? "md:-mt-10" : "  "} rounded-[4rem] `}   />

                    </div>

</div>

        )
    })}

    </div>
  )
}

export default Sectiontwo