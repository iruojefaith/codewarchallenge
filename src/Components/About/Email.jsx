import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

function Email() {
  return (
    <div className='md:mx-[15rem] my-20'>
        <h1 className='text-[35px] md:text-[50px] text-[#292F36] text-center'> Creative project? Let's have a productive talk.</h1>


<form className='px-4'>
  <div className='md:flex gap-8 mt-[5rem] '>
  <div class="relative z-0 w-full mb-6 group">
      <input type="text" name="floating_password" id="floating_Name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-none leading-10 border-0 border-b-2  appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-[#CDA274] peer" placeholder="Name " required />

  </div>
  <div class="relative z-0 w-full mb-6 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-none leading-10 border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border[#CDA274] focus:outline-none focus:ring-0 focus:border-[#CDA274] peer" placeholder="Email " required />

  </div>

</div>
    <div class="relative z-0 w-full mb-6 group h-52 ">
        <input type="text" name="floating_message" id="floating_message" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-none leading-10 border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border[#CDA274] focus:outline-none focus:ring-0 focus:border-[#CDA274] peer" placeholder=" Hello Iam Intrested in.." required />
    </div>

<div className='flex place-items-center w-32 h-32'>
  <button type="submit" class=" text-white dark:bg-[#292F36]  focus:ring-4 focus:outline-none focus:ring-[#292F36]/50 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:hover:bg-[#cda274] flex  ">Send Now &nbsp;&nbsp;<AiOutlineArrowRight className=' mt-[.3rem] text-[#CDA274] hover:text-white '/></button>
</div>
</form>

    </div>
  )
}

export default Email