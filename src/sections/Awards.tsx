import { useLanguage } from '../context/LanguageContext'
import FadeIn from '../components/FadeIn'

export default function Awards() {
  const { t } = useLanguage()

  return (
    <section
      id="awards"
      className="relative min-h-screen flex flex-col justify-center overflow-x-clip px-6 sm:px-10 md:px-16 py-20"
    >
      <FadeIn delay={0} y={30}>
        <h2 className="hero-heading font-black text-[clamp(2.5rem,6vw,5rem)] text-center mb-16">
          {t.awards.title}
        </h2>
      </FadeIn>

      <div className="max-w-3xl mx-auto w-full flex flex-col gap-4">
        {t.awards.list.map((award, i) => (
          <FadeIn key={i} delay={i * 0.15} y={20}>
            <div className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/20 transition-colors">
              <div className="text-[#D7E2EA] font-black text-2xl sm:text-3xl leading-none shrink-0 w-12 sm:w-16 text-right">
                {award.year}
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  <h3 className="text-[#D7E2EA] font-medium text-[clamp(0.9rem,1.2vw,1.1rem)] leading-snug">
                    {award.title}
                  </h3>
                  {award.isLatest && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium border border-[#D7E2EA]/20 text-[#D7E2EA]/50 shrink-0 mt-0.5">
                      {t.awards.latest}
                    </span>
                  )}
                </div>
                <p className="text-[#D7E2EA]/40 text-xs sm:text-sm mt-1 tracking-wide uppercase">
                  {award.level}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
