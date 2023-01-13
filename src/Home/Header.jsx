import React from 'react';
import Bg from '../Assets/Photo.jpg';
import '../App.css';
import { details } from "./details";

function Header() {
  return (
    <div>
    <div className='relative '>
          <img
            src={Bg}
            className='img w-full object-cover absolute bg-blend-normal h-[90vh] '
          />
          <div class='  grid h-screen place-items-center md:-ml-[25rem]'>
            <div className='absolute '>
              <h3 className='text-[75px] leading-none my-6  '>Let Your Home <br></br> Be Unique</h3>
                <p>There are many variations of the passages of lorem Ipsum <br></br>fromavailable,variations of the passages.</p>

                    <button className='bg-[#292F36] text-#fff p-3 px-10 text-white ml-auto hover:scale-95 transition rounded-md shadow-xl my-6'>
                        Get Started
                </button> </div>
            </div>
    </div>

    <div className=' mx-5rem '>
        <div className='bg-[#F4F0EC] py-5 grid grid-cols-1  md:grid-cols-3 -gap-2 place-items-middle'>
      {details.map(({title, description }, index) => {
        return (
        <div className='mx-5 flex align-middle  gap-2 justify-center flex-col my-3 h-30'>
             <div key={index} className=" w-full  p-2"  >
                 <h3>{title}</h3>
                <p className=' p-5 text-[#292F36] bg-white w-full -mt-3 '> {description}</p>
            </div>
            <div>


            </div>

        </div>
        );
     })}
    </div>
    </div>
</div>
  )
}

export default Header