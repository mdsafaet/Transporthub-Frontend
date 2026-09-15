import React from 'react'
import HeroSection from '../components/home/HeroSection'
import ServiceSectionn from '../components/home/ServiceSectionn'
import Testimonials from '../components/home/Testimonials'
import Contact from '../components/home/Contact'

import TrackingSection from '../components/home/TrackingSection'
import About from '../components/home/About'
import OurProjects from '../components/home/OurProjects'
import WhyChooseUs from '../components/home/WhyChooseUs'




const Home = () => {
  return (
    <div>
        <HeroSection />
       <WhyChooseUs />
        <ServiceSectionn />
        <TrackingSection />
        <Testimonials />
        <About />
        <OurProjects />

        <Contact />

      
    </div>
  )
}

export default Home
