import React from 'react';
import Header from '../Home/Header';
import SectionOne from './sectionone';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';
import Brand from './Brand';
import Project from './Project';
import Experience from './Experience';
import Article from './Article';
import Contact from './Contact';
import Footer from '../Footer/footer';


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
      <Contact />
       <Footer />
    </div>
  )
}

export default Home