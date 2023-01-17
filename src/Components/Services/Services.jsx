import React from 'react'
import Footer from '../../Footer/footer';
import Contact from '../../Home/Contact';
import HeaderServices  from './HeaderServices'
import Work from './Work';

function Services() {
  return (
    <div className='bg-[#Fff]'>
      <HeaderServices />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default Services;