import React from 'react'
import Footer from '../../Footer/footer';
import AboutHeader from './AboutHeader';
import Email from './Email';
import Sectionthree from './Sectionthree';
import SectionTwo from './Sectiontwo';

function About() {
  return (
    <div className='bg-white'>
    <AboutHeader />
    <SectionTwo />
    <Sectionthree />
    <Email />
    <Footer />
    </div>
  )
}

export default About