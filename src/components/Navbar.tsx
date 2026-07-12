import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import ContactButton from './ContactButton'

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 md:px-16 py-4 md:py-6"
    >
      <button
        onClick={() => scrollTo('hero')}
        className="text-[#D7E2EA] font-bold text-lg sm:text-xl tracking-wide"
      >
        Junyu Zhou
      </button>

      <div className="hidden md:flex items-center gap-6">
        <button
          onClick={() => scrollTo('about')}
          className="text-[#D7E2EA]/70 hover:text-[#D7E2EA] transition-colors text-sm uppercase tracking-wider"
        >
          {t.nav.about}
        </button>
        <button
          onClick={() => scrollTo('education')}
          className="text-[#D7E2EA]/70 hover:text-[#D7E2EA] transition-colors text-sm uppercase tracking-wider"
        >
          {t.nav.education}
        </button>
        <button
          onClick={() => scrollTo('expertise')}
          className="text-[#D7E2EA]/70 hover:text-[#D7E2EA] transition-colors text-sm uppercase tracking-wider"
        >
          {t.nav.expertise}
        </button>
        <button
          onClick={() => scrollTo('projects')}
          className="text-[#D7E2EA]/70 hover:text-[#D7E2EA] transition-colors text-sm uppercase tracking-wider"
        >
          {t.nav.projects}
        </button>
        <button
          onClick={() => scrollTo('gallery')}
          className="text-[#D7E2EA]/70 hover:text-[#D7E2EA] transition-colors text-sm uppercase tracking-wider"
        >
          {t.nav.gallery}
        </button>
        <button
          onClick={() => scrollTo('contact')}
          className="text-[#D7E2EA]/70 hover:text-[#D7E2EA] transition-colors text-sm uppercase tracking-wider"
        >
          {t.nav.contact}
        </button>

        <button
          onClick={toggleLang}
          className="ml-2 text-[#D7E2EA]/80 hover:text-[#D7E2EA] text-xs font-medium border border-[#D7E2EA]/30 rounded px-2.5 py-1 transition-colors"
        >
          {lang === 'zh' ? 'EN' : '中'}
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleLang}
          className="md:hidden text-[#D7E2EA]/80 hover:text-[#D7E2EA] text-xs font-medium border border-[#D7E2EA]/30 rounded px-2.5 py-1 transition-colors"
        >
          {lang === 'zh' ? 'EN' : '中'}
        </button>
        <ContactButton href={`mailto:${t.contact.email}`} />
      </div>
    </motion.nav>
  )
}
