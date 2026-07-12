import { useLanguage } from '../context/LanguageContext'
import FadeIn from '../components/FadeIn'

export default function EducationExperience() {
  const { t } = useLanguage()

  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col justify-center overflow-x-clip px-6 sm:px-10 md:px-16 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black text-[clamp(2.5rem,6vw,5rem)] text-center mb-16">
            {t.education.title}
          </h2>
        </FadeIn>

        <div className="relative pl-8 sm:pl-12 border-l border-[#D7E2EA]/10">
          {t.education.list.map((edu, i) => (
            <FadeIn key={i} delay={i * 0.15} y={20}>
              <div className="relative pb-10 sm:pb-12">
                <div className="absolute -left-[calc(2rem+4px)] sm:-left-[calc(3rem+4px)] top-0 w-3 h-3 rounded-full bg-[#D7E2EA]/20 border-2 border-[#D7E2EA]/10" />

                <span className="text-[#D7E2EA]/30 text-xs sm:text-sm tracking-wider uppercase">
                  {edu.period}
                </span>
                <div className="flex items-center gap-3 mt-1">
                  {edu.isPhD && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium border border-[#D7E2EA]/20 text-[#D7E2EA]/50">
                      {t.education.phdBadge}
                    </span>
                  )}
                </div>
                <p className="text-[#D7E2EA] font-medium text-[clamp(1rem,1.5vw,1.25rem)] mt-1">
                  {edu.degree}  ·  {edu.major}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} y={30}>
          <h2 className="hero-heading font-black text-[clamp(2.5rem,6vw,5rem)] text-center mt-20 mb-12">
            {t.experience.title}
          </h2>
        </FadeIn>

        <div className="relative pl-8 sm:pl-12 border-l border-[#D7E2EA]/10">
          {t.experience.list.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.15} y={20}>
              <div className="relative pb-8">
                <div className="absolute -left-[calc(2rem+4px)] sm:-left-[calc(3rem+4px)] top-0 w-3 h-3 rounded-full bg-[#D7E2EA]/20 border-2 border-[#D7E2EA]/10" />

                <span className="text-[#D7E2EA]/30 text-xs sm:text-sm tracking-wider uppercase">
                  {exp.period}
                </span>
                <div className="flex items-center gap-3 mt-1">
                  <h3 className="text-[#D7E2EA] font-medium text-[clamp(1rem,1.5vw,1.25rem)]">
                    {exp.title}
                  </h3>
                  {exp.isCurrent && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium border border-[#D7E2EA]/20 text-[#D7E2EA]/50">
                      {t.experience.current}
                    </span>
                  )}
                </div>
                <p className="text-[#D7E2EA]/50 font-light text-[clamp(0.85rem,1vw,1rem)] mt-1">
                  {exp.type}  ·  {exp.subtitle}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
