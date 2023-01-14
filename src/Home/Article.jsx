import React from 'react'
import { article } from './details';


function Article() {
  return (
    <div className='grid md:mx-[15rem] my-[5rem] mx-[1rem]  '>
        <div className='text-center'>
            <h1 className='text-[35px] md:text-[50px] text-[#292F36]'> Articles & News</h1>
            <p className='text-[22px] text-[#4D5053]'>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
        </div>
        <div className='grid md:grid-cols-3 justify-items-center  place-items-center gap-8 my-[4rem]'>
        {article.map(({img, date, description, title }, index) => {
            return(
        <div key={index}>
        <div>
             <img src={img} alt={title}/>
             <button>{date}</button>
        </div>
             <div className='flex  justify-items-center  justify-between mt-5' >
              <p className='text-[#4D5053]'>{description}</p>
              <button  className='bg-[#F4F0EC] w-[3rem] h-[3rem] rounded-full block text-center pointer font-bold text-[#292F36] text-[22px] '>&#62;</button>
             </div>
        </div>
            )
        })}

        </div>
    </div>
  )
}

export default Article