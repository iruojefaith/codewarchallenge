import React from 'react'
import { article } from './details';


function Article() {
  return (
    <div className='grid md:mx-[15rem] my-[5rem] mx-[1rem] '>
        <div className='text-center'>
            <h1 className=' text-[#292F36]'> Articles & News</h1>
            <h5 className=' text-[#4D5053]'>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</h5>
        </div>
        <div className='grid md:grid-cols-3 justify-items-center  place-items-center gap-4 my-[4rem]w-[40rem] my-[4rem] '>
        {article.map(({exact, img, date, description, title }, index) => {
            return(
        <div key={index}  exact={`${exact}`}  className=" border-[1rem] border-[#f5f5f5]/50 rounded-[3rem] md:h-[25rem] bg-[#fff] hover:bg-[#F4F0EC] hover:border-[#F4F0EC] cursor-pointer" >
        <div className="relative  ">
             <img src={img} alt={title} className="rounded-tl-[2rem] rounded-tr-[2rem] relative" />
             <button className="absolute mt-[-5rem] ml-[1rem] bg-[#Fff] p-4 rounded-[.8rem] text-[#4D5053] ">{title}</button>
        </div>
        <div>
         <h5 className=' my-[1rem] text-[#292F36]'>{description}</h5>
         </div>
             <div className='flex  justify-items-center  justify-between mt-5' >
                <p >{date}</p>
              <button  className='bg-[#F4F0EC] hover:bg-[#fff] w-[3rem] h-[3rem] rounded-full block text-center pointer font-bold  text-[#4D5053] cursor-pointer '>&#62;</button>
             </div>
        </div>
            )
        })}

        </div>
    </div>
  )
}

export default Article