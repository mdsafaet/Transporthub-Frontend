import React from 'react'
import HeroSection from '../components/home/HeroSection'
import ServiceSectionn from '../components/home/ServiceSectionn'
import Testimonials from '../components/home/Testimonials'
import Contact from '../components/home/Contact'

import TrackingSection from '../components/home/TrackingSection'



const Home = () => {
  return (
    <div>
        <HeroSection />
        <ServiceSectionn />
        <TrackingSection />
        <Testimonials />

        <Contact />

      
    </div>
  )
}

export default Home
