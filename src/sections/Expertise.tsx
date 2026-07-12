import { useLanguage } from '../context/LanguageContext'
import { expertiseItems } from '../data/content'
import FadeIn from '../components/FadeIn'

export default function Expertise() {
  const { lang, t } = useLanguage()
  const items = expertiseItems[lang]

  return (
    <section
      id="expertise"
      className="relative min-h-screen flex flex-col justify-center overflow-x-clip px-6 sm:px-10 md:px-16 py-20"
    >
      <FadeIn delay={0} y={30}>
        <h2 className="hero-heading font-black text-[clamp(2.5rem,6vw,5rem)] text-center mb-20">
          {t.expertise.title}
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col divide-y divide-[#D7E2EA]/10">
          {items.map((item, i) => (
            <FadeIn key={item.number} delay={i * 0.1} y={20}>
              <div className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10 md:py-12">
                <span
                  className="font-black leading-none text-[#0C0C0C] select-none shrink-0"
                  style={{
                    fontSize: 'clamp(3rem, 10vw, 140px)',
                    WebkitTextStroke: '1px rgba(215,226,234,0.15)',
                  }}
                >
                  {item.number}
                </span>
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
