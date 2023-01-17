import React from 'react';
import Bg from '../../Assets/about.png';
import Pattern from '../../Assets/Pattern.png';
import Patterntwo from '../../Assets/Pattern(1).png';
import Quote from '../../Assets/qoute.png'
import '../../App.css';


function Header() {
  return (
    <div className=' '>
    <div className='relative '>
          <img
            src={Bg}
            className=' w-screen absolute object-cover h-[20rem] md:max-h-50  '
          />
          <div className='  grid h-screen place-items-center '>
            <div className='absolute -mt-[7rem] justify-center align-middle '>
              <h3 className=' leading-8 my-6 bg-[#fff] px-16 md:px-24 py-10 w-50 rounded-tr-3xl rounded-tl-3xl text-center'>About Us <br></br><span className='text-[20px] leading-1 '>Home/About Us</span> </h3>
                 </div>
            </div>
    </div>
<div className='relative -mt-52 '>
<div className='flex align-middle justify-center md:gap-96  gap-10'>
    <img src={Pattern}/>
    <img src={Patterntwo}/>
    <div className='absolute text-center grid place-items-center justify-center leading-loose  align-middle my-32 gap-6 md:gap-2 '>
        <img src={Quote} />
        <h3 className='italic  text-[#292F36]' >I like an interior that defies labeling. I don't <br></br>really want someone to walk into a room and<br></br> know that I did it </h3>
        <p className=' text-[#4D5053]'>-BUNNY WILLIAMS</p>
    </div>
</div>

</div>
</div>
  )
}

export default Header