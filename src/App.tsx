import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Cargar preferencia de modo oscuro desde localStorage
    const darkMode = localStorage.getItem('darkMode')
    if (darkMode === 'true') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
