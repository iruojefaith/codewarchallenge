import React from 'react'
import Vs  from '../Assets/02.svg';
import BranD  from '../Assets/03.svg';
import NatureHome  from '../Assets/04.svg';
import DesignStudio  from '../Assets/05.svg';
import Home  from '../Assets/home.png';


function Brand() {
  return (
    <div className='grid md:grid-cols-5 md:mx-[15rem] my-[5rem] mx-[1rem] place-items-center justify-items-center '>
        <img src={Home}/>
        <img src={Vs}/>
        <img src={BranD}/>
        <img src={NatureHome}/>
        <img src={DesignStudio}/>
    </div>
  )
}

export default Brand