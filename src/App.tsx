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

export default function App() {
  return (
    <LanguageProvider>
      <main className="overflow-x-clip">
        <Navbar />
        <Hero />
        <About />
        <EducationExperience />
        <Expertise />
        <Projects />
        <Awards />
        <Gallery />
        <Contact />
      </main>
    </LanguageProvider>
  )
}
