import { useEffect, useState } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import SmartCardShowcase from './components/SmartCardShowcase'
import Services from './components/Services'
import ClientSlider from './components/ClientSlider'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LegalPages from './components/LegalPages'
import CookieBanner from './components/CookieBanner'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'legal'>('home')

  useEffect(() => {
    // Cargar preferencia de modo oscuro desde localStorage
    const darkMode = localStorage.getItem('darkMode')
    if (darkMode === 'true') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // Handle legal page routing
    const handleRoute = () => {
      if (window.location.pathname === '/legal') {
        setCurrentPage('legal')
      } else {
        setCurrentPage('home')
      }
    }

    handleRoute()
    window.addEventListener('popstate', handleRoute)
    
    return () => window.removeEventListener('popstate', handleRoute)
  }, [])

  // Handle navigation to legal pages
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.closest('a[href="/legal"]')) {
        e.preventDefault()
        setCurrentPage('legal')
        window.history.pushState({}, '', '/legal')
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  if (currentPage === 'legal') {
    return (
      <LanguageProvider>
        <div className="app">
          <LegalPages />
        </div>
      </LanguageProvider>
    )
  }

  return (
    <LanguageProvider>
      <div className="app">
        <Header />
                <main id="main-content" role="main">
                  <Hero />
                  <SmartCardShowcase />
                  <Services />
                  <ClientSlider />
                  <Testimonials />
          <Process />
          <About />
          <Contact />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </LanguageProvider>
  )
}

export default App
