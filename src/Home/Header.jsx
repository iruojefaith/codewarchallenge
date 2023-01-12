import React from 'react';
import Bg from '../Assets/Photo.jpg'

function Header() {
  return (
    <div>
    <div className='] relative'>
          <img
            src={Bg}
            className='h-full w-full object-cover absolute bg-blend-normal h-[90vh]'
          />
          <div className='py-6 absolute flex justify-center  align-middle '>
            <div className=' justify-center  '>
              <h1 className='text-[75px]'>Let Your Home <br></br> Be Unique</h1>
        <p>There are many variations of the passages of lorem Ipsum <br></br>fromavailable,variations of the passages.</p>
        <button className='bg-[#292F36] text-#fff p-3 px-10 text-white ml-auto hover:scale-95 transition rounded-md shadow-xl my-6'>
             Get Started
        </button>
            </div>
            </div>


    </div>
    </div>

  )
}

export default Header