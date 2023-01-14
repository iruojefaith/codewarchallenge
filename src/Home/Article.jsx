import React from 'react'

function Article() {
  return (
    <div className='grid md:mx-[15rem] my-[5rem] mx-[1rem]  '>
        <div className='text-center'>
            <h1 className='text-[35px] md:text-[50px] text-[#292F36]'> Articles & News</h1>
            <p className='text-[22px] text-[#4D5053]'>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
        </div>
        <div className='grid md:grid-cols-3 justify-items-center  place-items-center gap-8 my-[4rem]'>
        </div>
    </div>
  )
}

export default Article