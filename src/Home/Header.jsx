import React from 'react';
import Bg from '../Assets/Photo.jpg';
import '../App.css';


function Header() {
  return (
    <div>
    <div className='relative '>
          <img
            src={Bg}
            className='img w-screen object-cover absolute bg-blend-normal h-[90vh] '
          />
          <div class='  grid h-screen place-items-center md:-ml-[25rem]'>
            <div className='absolute mx-3 line '>
              <h3 className='text-[55px] md:text-[75px] leading-none my-6 text-[#4D5053]  '>Let Your Home <br></br> Be Unique</h3>
                <p>There are many variations of the passages of lorem Ipsum <br></br>fromavailable,variations of the passages.</p>

                    <button className='bg-[#292F36] text-#fff p-3 px-10 text-white ml-auto hover:scale-95 transition rounded-md shadow-xl my-6'>
                        Get Started
                </button> </div>
            </div>
    </div>

</div>
  )
}

export default Header