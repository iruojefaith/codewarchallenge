import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

function Contact() {
  return (
    <div className='grid md:mx-[15rem] my-[5rem] mx-[1rem] justify-items-center  place-items-center bg-[#292F36]  h-[20rem] rounded-[4rem]'>
    <div className='text-center  '>
        <h1 className='text-[50px] text-[#fff]'>Wanna join the interno?</h1>
        <p className='text-[20px] text-[#fff] py-3 '>It is a long established fact  will be distracted.</p>
    </div>

        <button className=" mt-[-4rem] ml-[1rem] bg-[#CDA274] p-4 rounded-[.8rem] text-[16px] text-[#FFF] flex fles-cols ">Contact With Us &nbsp;&nbsp;<AiOutlineArrowRight className='text-[#4D5053] mt-[.4rem] '/></button>

    </div>
  )
}

export default Contact;