import React from 'react'
import {aboutdata} from './data'

function Sectiontwo() {
  return (
    <div className='grid md:grid-cols-2 mx-9 md:mx-64 my-32 gap-9'>
    {aboutdata.map(({title, description, img, id }, index) => {
        return (
                <div key={index} className={`${  id === 1 ? "" : "md:flex-col-reverse  "} flex flex-col gap-6 md:gap-52 align-middle justify-center`}>
                    <div  className={`${ id === 1 ? "" : " md:-mt-20  "} justify-center grid align-top`} >
                     <h1 className='text-[50px]'>{title}</h1>
                    <p className="text-[22px]">{description}</p>
                    </div>

                    <div>
                     <img src={img} className= {`${ id === 1 ? "md:-mt-10" : "  "} rounded-[4rem] `}   />
                    </div>
</div>

        )
    })}

    </div>
  )
}

export default Sectiontwo