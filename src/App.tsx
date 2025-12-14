import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { DarkModeProvider } from './contexts/DarkModeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import FloatingButtons from './components/FloatingButtons'
import LegalPages from './components/LegalPages'
import SEO from './components/SEO'
import Home from './pages/Home'
import Fhoto from './pages/Fhoto'

function App() {
  return (
    <DarkModeProvider>
      <LanguageProvider>
        <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/legal" element={
              <>
                <LegalPages />
                <FloatingButtons />
              </>
            } />
            <Route path="/proyectos/fhoto" element={
              <>
                <SEO 
                  title="Fhoto — Tours Virtuales y Servicios de Drone | .js agency"
                  description="Tours virtuales 360° y servicios de drone profesional para inmobiliarias, hostelería y negocios. Captura con Insta360 X5, fotografía y video con drones certificados. Soluciones visuales premium."
                  keywords="tours virtuales, Insta360, servicios de drone, drones, fotografía aérea, inmobiliarias, hoteles, Almería"
                  url="https://jsagency.com/proyectos/fhoto"
                />
                <Header />
                <main id="main-content" role="main">
                  <Fhoto />
                </main>
                <Footer />
                <CookieBanner />
                <FloatingButtons />
              </>
            } />
            <Route path="*" element={
              <>
                <SEO 
                  title=".js agency — Diseño Web y Automatizaciones con IA"
                  description="Agencia de desarrollo web y automatizaciones con IA en Almería. Especialistas en React, diseño UI moderno, performance, SEO técnico e integraciones. Soluciones digitales profesionales."
                  keywords="desarrollo web, diseño web, React, JavaScript, Almería, España, agencia digital, automatización IA, landing pages, webs corporativas, SEO técnico, Core Web Vitals"
                  url="https://jsagency.com"
                />
                <Header />
                <main id="main-content" role="main">
                  <Home />
                </main>
                <Footer />
                <CookieBanner />
                <FloatingButtons />
              </>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
    </DarkModeProvider>
  )
}

export default App
