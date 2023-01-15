import React from 'react';
import Bg from '../Assets/article3.png';
import '../App.css';


function Header() {
  return (
    <div>
    <div className='relative '>
          <img
            src={Bg}
            className='img w-screen absolute bg-blend-normal h-[50vh] bg-cover '
          />
          <div class='  grid h-screen place-items-center md:-ml-[25rem]'>
            <div className='absolute mx-3 line justify-center align-middle '>
              <h3 className='text-[55px] md:text-[75px] leading-none my-6 bg-[#fff]  '>About Us <br></br><span>Home/About Us</span> </h3>
                 </div>
            </div>
    </div>

</div>
  )
}

export default Header