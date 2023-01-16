import React from 'react'
import Footer from '../../Footer/footer';
import AboutHeader from './AboutHeader';
import Sectionthree from './Sectionthree';
import SectionTwo from './Sectiontwo';

function About() {
  return (
    <div className='bg-white'>
    <AboutHeader />
    <SectionTwo />
    <Sectionthree />
    <Footer />
    </div>
  )
}

export default About