import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import WhoWeAre from '../components/WhoWeAre'
import WhyWeExist from '../components/WhyWeExist'
import WhatWeDo from '../components/WhatWeDo'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import PartnersSection from '../components/PartnersSection'
import DonateCTA from '../components/DonateCTA'

const Home = () => {
  return (
    <main>
      <Hero />
      <StatsSection />
      <WhoWeAre />
      <WhyWeExist />
      <WhatWeDo />
      <HowItWorks />
      <Testimonials />
      <PartnersSection />
      <DonateCTA />
    </main>
  )
}

export default Home