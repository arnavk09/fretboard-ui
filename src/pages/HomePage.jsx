import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import HowItWorks from '../components/home/HowItWorks'
import Categories from '../components/home/Categories'
import WhyFretboard from '../components/home/WhyFretboard'
import Testimonials from '../components/home/Testimonials'
import CTA from '../components/home/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <Categories />
      <WhyFretboard />
      <Testimonials />
      <CTA />
    </>
  )
}