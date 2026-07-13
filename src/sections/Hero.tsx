import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import { ArrowDown, Award, BookOpen, FileText } from 'lucide-react'

export default function Hero() {
  const { t } = useLanguage()

  const scrollToAbout = () => {
    const el = document.getElementById('about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-x-clip px-6 sm:px-10 md:px-16"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-10 lg:gap-16 max-w-7xl mx-auto w-full mt-20">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black text-[clamp(3rem,10vw,7rem)] leading-none">
              {t.hero.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.25} y={20}>
            <p className="text-[#D7E2EA]/80 font-light text-[clamp(0.9rem,1.6vw,1.2rem)] mt-4 leading-relaxed">
              {t.hero.title}
            </p>
            <p className="text-[#D7E2EA]/50 font-light text-[clamp(0.8rem,1.2vw,0.95rem)] mt-2">
              {t.hero.affiliation}
            </p>
          </FadeIn>

          <FadeIn delay={0.3} y={15}>
            <div className="flex gap-6 sm:gap-10 mt-6">
              <div className="text-center">
                <div className="text-[#D7E2EA] font-black text-[clamp(1.5rem,3vw,2.5rem)] leading-none">
                  {t.hero.papersValue}
                </div>
                <div className="text-[#D7E2EA]/40 font-light text-xs sm:text-sm mt-1 tracking-wide">
                  {t.hero.papersLabel}
                </div>
              </div>
              <div className="text-center">
                <div className="text-[#D7E2EA] font-black text-[clamp(1.5rem,3vw,2.5rem)] leading-none">
                  {t.hero.citationsValue}
                </div>
                <div className="text-[#D7E2EA]/40 font-light text-xs sm:text-sm mt-1 tracking-wide">
                  {t.hero.citationsLabel}
                </div>
              </div>
              <div className="text-center">
                <div className="text-[#D7E2EA] font-black text-[clamp(1.5rem,3vw,2.5rem)] leading-none">
                  {t.hero.hIndexValue}
                </div>
                <div className="text-[#D7E2EA]/40 font-light text-xs sm:text-sm mt-1 tracking-wide">
                  {t.hero.hIndexLabel}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.35} y={20}>
            <p className="text-[#D7E2EA]/60 font-light text-[clamp(0.85rem,1.2vw,1.05rem)] mt-6 max-w-md leading-relaxed">
              {t.hero.intro}
            </p>
          </FadeIn>

          <FadeIn delay={0.4} y={15}>
            <div className="mt-4 px-4 py-3 border border-[#D7E2EA]/10 rounded-xl max-w-md">
              <div className="flex items-start gap-2">
                <Award size={16} className="text-[#D7E2EA]/40 mt-0.5 shrink-0" />
                <div>
                  <span className="text-[#D7E2EA]/30 text-xs uppercase tracking-wider">
                    {t.hero.achievementTitle}
                  </span>
                  <p className="text-[#D7E2EA]/60 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    {t.hero.achievementText}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2 pt-2 border-t border-[#D7E2EA]/5">
                <FileText size={14} className="text-[#D7E2EA]/30 shrink-0" />
                <p className="text-[#D7E2EA]/40 text-xs">{t.hero.publications}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <div className="mt-6">
              <ContactButton href={`mailto:${t.contact.email}`} />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6} y={30} x={30}>
          <div className="relative shrink-0">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, rgba(59,130,246,0.1) 50%, transparent 70%)',
                filter: 'blur(20px)',
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-[#D7E2EA]/20">
              <img
                src="/avatar.jpg"
                alt={t.hero.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="flex justify-center mt-12 lg:mt-8">
        <FadeIn delay={0.65} y={20}>
          <div className="flex gap-4">
            <a
              href="https://scholar.google.com/citations?hl=en&user=fsxyotsAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#D7E2EA]/40 hover:text-[#D7E2EA]/70 transition-colors text-xs sm:text-sm"
            >
              <BookOpen size={16} />
              {t.contact.googleScholar}
            </a>
            <a
              href="https://orcid.org/0000-0001-5931-1477"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#D7E2EA]/40 hover:text-[#D7E2EA]/70 transition-colors text-xs sm:text-sm"
            >
              <Award size={16} />
              {t.contact.orcid}
            </a>
          </div>
        </FadeIn>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#D7E2EA]/40 hover:text-[#D7E2EA]/80 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  )
}
