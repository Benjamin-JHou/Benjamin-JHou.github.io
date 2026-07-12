import { useLanguage } from '../context/LanguageContext'
import AnimatedText from '../components/AnimatedText'
import { motion } from 'framer-motion'

export default function About() {
  const { t } = useLanguage()

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-x-clip px-6 sm:px-10 md:px-16 py-20"
    >
      <h2 className="hero-heading font-black text-[clamp(2.5rem,6vw,5rem)] text-center mb-12">
        {t.about.title}
      </h2>

      <AnimatedText
        text={t.about.paragraph}
        className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] mx-auto"
        style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
      />

      <div className="mt-20 w-full max-w-3xl">
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#D7E2EA]/60 font-medium text-sm uppercase tracking-widest text-center mb-8"
        >
          {t.about.identityTitle}
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-3">
          {t.identities.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(124, 58, 237, 0.4)' }}
            >
              <span className="inline-block px-4 py-2 rounded-full border border-[#D7E2EA]/15 text-[#D7E2EA]/50 text-xs sm:text-sm font-light transition-all cursor-default hover:text-[#D7E2EA]/80 hover:shadow-lg hover:shadow-purple-900/20">
                {role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
