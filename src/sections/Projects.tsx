import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { patents } from '../data/content'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'

function ProjectCard({
  patent,
  index,
  total,
  scrollYProgress,
  t,
}: {
  patent: { name: string; field: string; desc: string }
  index: number
  total: number
  scrollYProgress: MotionValue<number>
  t: { title: string; patent: string; viewDetails: string }
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [index * 0.2, 1], [1, targetScale])

  return (
    <div
      className="sticky top-24 md:top-32 h-[85vh] flex items-center justify-center"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-4xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-6 md:p-8"
      >
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
          <div className="flex-1">
            <span className="text-[#D7E2EA]/40 font-medium text-xs sm:text-sm uppercase tracking-widest">
              {patent.field}
            </span>
            <h3 className="text-[#D7E2EA] font-bold text-[clamp(1.3rem,2.5vw,2rem)] mt-2 leading-tight">
              {patent.name}
            </h3>
            <p className="text-[#D7E2EA]/60 font-light text-[clamp(0.85rem,1vw,1rem)] mt-4 leading-relaxed">
              {patent.desc}
            </p>
            <div className="mt-6">
              <LiveProjectButton>{t.viewDetails}</LiveProjectButton>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Projects() {
  const { lang, t } = useLanguage()
  const patentList = patents[lang]
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 overflow-x-clip"
    >
      <div className="px-6 sm:px-10 md:px-16 pt-16 sm:pt-20 md:pt-24 pb-8">
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black text-[clamp(2.5rem,6vw,5rem)] text-center">
            {t.projects.title}
          </h2>
        </FadeIn>
      </div>

      <div className="relative px-6 sm:px-10 md:px-16">
        {patentList.map((patent, i) => (
          <ProjectCard
            key={i}
            patent={patent}
            index={i}
            total={patentList.length}
            scrollYProgress={scrollYProgress}
            t={t.projects}
          />
        ))}

        <div className="h-[20vh]" />
      </div>
    </section>
  )
}
