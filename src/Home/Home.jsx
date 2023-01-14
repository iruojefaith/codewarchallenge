import React from 'react';
import Header from './Header';
import SectionOne from './sectionone';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';
import Brand from './Brand';
import Project from './Project';
import Experience from './Experience';
import Article from './Article';

function Home() {
  return (
    <div className='bg-[#fff]'>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Brand />
      <Project />
      <Experience />
      <Article />
    </div>
  )
}

export default Home