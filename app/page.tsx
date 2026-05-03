import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import WhyUs from '../components/WhyUs'
import Services from '../components/Services'
import OurWork from '../components/OurWork'
import HowItWorks from '../components/HowItWorks'
import { Industries, Testimonials, FAQ, CTA, Footer, WAFloat } from '../components/Sections'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <WhyUs />
        <Services />
        <OurWork />
        <HowItWorks />
        <Industries />
        <Testimonials />
        {/* <FAQ /> */}
        <CTA />
      </main>
      <Footer />
      <WAFloat />
    </>
  )
}