import { useLanguage } from '../context/LanguageContext'
import { motion } from 'framer-motion'

export default function Awards() {
  const { t } = useLanguage()

  return (
    <section
      id="awards"
      className="relative min-h-screen flex flex-col justify-center overflow-x-clip px-6 sm:px-10 md:px-16 py-20"
    >
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <h2 className="hero-heading font-black text-[clamp(2.5rem,6vw,5rem)] text-center mb-16">
          {t.awards.title}
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto w-full relative">
        {/* Vertical timeline line */}
        <motion.div
          className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D7E2EA]/15 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ originY: 0 }}
        />

        <div className="flex flex-col gap-5">
          {t.awards.list.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '50px' }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative pl-16 sm:pl-20"
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-4 sm:left-6 top-4 w-3 h-3 rounded-full border-2 border-[#D7E2EA]/20 bg-[#0C0C0C]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.4, type: 'spring' }}
              >
                {award.isLatest && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#7c3aed]"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>

              <motion.div
                className="relative p-4 sm:p-6 rounded-2xl border border-[#D7E2EA]/8 hover:border-[#D7E2EA]/20 transition-all group hover:shadow-lg hover:shadow-purple-900/10"
                whileHover={{ x: 4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-[#D7E2EA] font-black text-2xl sm:text-3xl leading-none shrink-0 w-12 sm:w-16 text-right">
                    {award.year}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-2">
                      <h3 className="text-[#D7E2EA] font-medium text-[clamp(0.9rem,1.2vw,1.1rem)] leading-snug">
                        {award.title}
                      </h3>
                      {award.isLatest && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium border border-[#7c3aed]/30 text-[#7c3aed]/70 shrink-0 mt-0.5">
                          {t.awards.latest}
                        </span>
                      )}
                    </div>
                    <p className="text-[#D7E2EA]/40 text-xs sm:text-sm mt-1 tracking-wide uppercase">
                      {award.level}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
