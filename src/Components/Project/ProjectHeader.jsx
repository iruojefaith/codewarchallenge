import React from 'react'
import Bg from '../../Assets/Projects.jpg';


 const ProjectHeader = () => {
  return (

     <div className=' '>
    <div className='relative '>
          <img
            src={Bg}
            className=' w-screen absolute object-cover h-[20rem] md:max-h-50  '
          />
           <div className='  grid h-screen place-items-center '>
            <div className='absolute -mt-[7rem] justify-center align-middle '>
              <h3 className='text-[55px] md:text-[50px] leading-8 my-6 bg-[#fff] px-16 md:px-24 py-10 w-50 rounded-tr-3xl rounded-tl-3xl text-center'>Projects <br></br><span className='text-[20px] leading-1 '>Home/Projects</span> </h3>
                 </div>
            </div>
    </div>
    </div>
  )
}
export default ProjectHeader;