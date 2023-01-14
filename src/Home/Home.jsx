import React from 'react';
import Header from './Header';
import SectionOne from './sectionone';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';
import Brand from './Brand';

function Home() {
  return (
    <div className='bg-[#fff]'>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Brand />
    </div>
  )
}

export default Home