import { useLanguage } from '../context/LanguageContext'
import AnimatedText from '../components/AnimatedText'
import FadeIn from '../components/FadeIn'

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
        <FadeIn delay={0.2} y={20}>
          <h3 className="text-[#D7E2EA]/60 font-medium text-sm uppercase tracking-widest text-center mb-8">
            {t.about.identityTitle}
          </h3>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-3">
          {t.identities.map((role, i) => (
            <FadeIn key={i} delay={0.05 * i} y={15}>
              <span className="inline-block px-4 py-2 rounded-full border border-[#D7E2EA]/15 text-[#D7E2EA]/50 text-xs sm:text-sm font-light transition-colors hover:border-[#D7E2EA]/30 hover:text-[#D7E2EA]/70">
                {role}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
