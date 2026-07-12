import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import EducationExperience from './sections/EducationExperience'
import Expertise from './sections/Expertise'
import Projects from './sections/Projects'
import Awards from './sections/Awards'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackgroundOrbs from './components/BackgroundOrbs'
import CustomCursor from './components/CustomCursor'
import BackToTop from './components/BackToTop'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <CustomCursor />
      <ScrollProgress />
      <BackgroundOrbs />
      <BackToTop />

      {!loading && (
        <main className="relative z-10 overflow-x-clip">
          <Navbar />
          <Hero />
          <About />
          <EducationExperience />
          <Expertise />
          <Projects />
          <Awards />
          <Gallery />
          <Contact />
          <Footer />
        </main>
      )}
    </LanguageProvider>
  )
}
