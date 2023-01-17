import React from 'react';
import Bg from '../Assets/Photo.jpg';
import { AiOutlineArrowRight } from "react-icons/ai";
import '../App.css';


function Header() {
  return (
    <div>
    <div className='relative '>
          <img
            src={Bg}
            className='img w-screen object-cover absolute bg-blend-normal md:h-[90vh] h-[80vh]'
          />
          <div className='  grid h-screen place-items-center md:-ml-[25rem]'>
            <div className='absolute mx-3 line '>
              <h1 className=' leading-none my-6 text-[#4D5053]  '>Let Your Home <br></br>Be Unique</h1>
                <p >There are many variations of the passages of lorem Ipsum <br></br> from available,variations of the passages.</p>
                    <button className="  ml-[1rem] bg-[#4D5053] mt-6 p-4 rounded-[.8rem] text-[#FFF] flex ">Get started &nbsp;&nbsp;<AiOutlineArrowRight className=' mt-[.4rem] text-[#CDA274] '/></button>
                    </div>
            </div>
    </div>

</div>
  )
}

export default Header