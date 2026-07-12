import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { expertiseItems } from '../data/content'
import { motion, useInView } from 'framer-motion'

function ExpertiseNumber({ number }: { number: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <span ref={ref} className="relative inline-block leading-none select-none shrink-0" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
      <span
        className="text-[#0C0C0C]"
        style={{ WebkitTextStroke: '1px rgba(215,226,234,0.15)' }}
      >
        {number}
      </span>
      <motion.span
        className="absolute inset-0 bg-clip-text text-transparent"
        style={{
          backgroundImage: 'linear-gradient(180deg, #7c3aed 0%, #3b82f6 50%, #ec4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        initial={{ clipPath: 'inset(100% 0 0 0)' }}
        animate={inView ? { clipPath: 'inset(0 0 0 0)' } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {number}
      </motion.span>
    </span>
  )
}

export default function Expertise() {
  const { lang, t } = useLanguage()
  const items = expertiseItems[lang]

  return (
    <section
      id="expertise"
      className="relative min-h-screen flex flex-col justify-center overflow-x-clip px-6 sm:px-10 md:px-16 py-20"
    >
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-20">
        <h2 className="hero-heading font-black text-[clamp(2.5rem,6vw,5rem)] text-center">
          {t.expertise.title}
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col divide-y divide-[#D7E2EA]/10">
          {items.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '50px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10 md:py-12">
                <ExpertiseNumber number={item.number} />
                <div className="flex flex-col gap-2 pt-2">
                  <h3
                    className="font-medium uppercase text-[#D7E2EA]"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#D7E2EA]/60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
