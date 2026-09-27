import React from 'react'
import HeroSection from '../components/home/HeroSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import AboutUs from '../components/home/AboutUs'
import OurProjects from '../components/home/OurProjects'
import OurClients from '../components/home/OurClients'
import ContainerTracking from '../components/home/ContainerTracking'
import GetInTouch from '../components/home/GetInTouch'
import WhatWeMove from '../components/home/WhatWeMove'
import GlobalNetwork from '../components/home/GlobalNetwork'








const Home = () => {
  return (
    <div>
        <HeroSection />
      <WhyChooseUs/>
      <AboutUs />
       <ContainerTracking />
         <OurClients />
    
      <OurProjects  />
      <WhatWeMove />
      <GetInTouch />
      {/* <GlobalNetwork /> */}

        {/* <ServiceSectionn />
        <TrackingSection />
        // <Testimonials />
        // <About />
        // <OurProjects /> */}

      

      
    </div>
  )
}

export default Home
