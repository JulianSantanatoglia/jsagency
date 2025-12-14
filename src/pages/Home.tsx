import Hero from '../components/Hero'
import Services from '../components/Services'
import WhySection from '../components/WhySection'
import Testimonials from '../components/Testimonials'
import Process from '../components/Process'
import About from '../components/About'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import PatternBackground from '../components/PatternBackground'

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#FAF9F7] dark:bg-slate-900 transition-colors duration-300">
      <PatternBackground opacity={0.04} />
      <div className="relative z-10">
        <Hero />
        <About />
        <Services />
        <WhySection />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </div>
    </div>
  )
}

export default Home
