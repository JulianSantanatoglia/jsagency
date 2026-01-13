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
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'

function App() {
  return (
    <DarkModeProvider>
      <LanguageProvider>
        <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/legal" element={
              <>
                <SEO 
                  title="Información Legal | .js agency"
                  description="Términos y condiciones, política de privacidad y política de cookies de .js agency"
                  keywords="términos y condiciones, política de privacidad, política de cookies, legal"
                  url="https://jsagency.com/legal"
                />
                <Header />
                <main id="main-content" role="main">
                  <LegalPages />
                </main>
                <Footer />
                <CookieBanner />
                <FloatingButtons />
              </>
            } />
            <Route path="/legal/terms" element={
              <>
                <SEO 
                  title="Términos y Condiciones | .js agency"
                  description="Términos y condiciones de uso del sitio web y servicios de .js agency"
                  keywords="términos y condiciones, condiciones de uso, legal"
                  url="https://jsagency.com/legal/terms"
                />
                <Header />
                <main id="main-content" role="main">
                  <TermsAndConditions />
                </main>
                <Footer />
                <CookieBanner />
                <FloatingButtons />
              </>
            } />
            <Route path="/legal/privacy" element={
              <>
                <SEO 
                  title="Política de Privacidad | .js agency"
                  description="Política de privacidad de .js agency. Cómo recopilamos, usamos y protegemos su información personal"
                  keywords="política de privacidad, privacidad, protección de datos, RGPD"
                  url="https://jsagency.com/legal/privacy"
                />
                <Header />
                <main id="main-content" role="main">
                  <PrivacyPolicy />
                </main>
                <Footer />
                <CookieBanner />
                <FloatingButtons />
              </>
            } />
            <Route path="/legal/cookies" element={
              <>
                <SEO 
                  title="Política de Cookies | .js agency"
                  description="Política de cookies de .js agency. Información sobre el uso de cookies en nuestro sitio web"
                  keywords="política de cookies, cookies, privacidad"
                  url="https://jsagency.com/legal/cookies"
                />
                <Header />
                <main id="main-content" role="main">
                  <CookiePolicy />
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
