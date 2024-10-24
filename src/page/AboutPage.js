import React from 'react';
import '../asset/style/AboutPage.css'
import AboutBanner from '../components/about-section/AboutBanner';
import AboutStates from '../components/about-section/AboutStates';
import AboutDrag from '../components/about-section/AboutDrag';
import LogoGroup from '../components/about-section/LogoGroup';

function AboutPage() {
  return (
    <div className='about'>
      <AboutBanner />
      <AboutStates />
      <AboutDrag />
      <LogoGroup />
    </div>
  )
}

export default AboutPage
