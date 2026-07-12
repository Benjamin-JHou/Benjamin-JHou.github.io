import { useLanguage } from '../context/LanguageContext'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import { Mail, MapPin } from 'lucide-react'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center overflow-x-clip px-6 sm:px-10 md:px-16 py-20"
    >
      <FadeIn delay={0} y={30}>
        <h2 className="hero-heading font-black text-[clamp(2.5rem,6vw,5rem)] text-center mb-4">
          {t.contact.title}
        </h2>
      </FadeIn>

      <div className="max-w-lg mx-auto w-full mt-12">
        <FadeIn delay={0.1} y={20}>
          <div className="rounded-[40px] border-2 border-[#D7E2EA]/10 p-8 sm:p-10 text-center">
            <h3 className="text-[#D7E2EA] font-bold text-2xl sm:text-3xl">
              {t.contact.name}
            </h3>
            <div className="flex items-center justify-center gap-2 mt-2 text-[#D7E2EA]/50 text-sm">
              <MapPin size={14} />
              <span>{t.contact.affiliation}</span>
            </div>

            <div className="mt-8 flex flex-col items-center gap-2">
              <span className="text-[#D7E2EA]/30 text-xs uppercase tracking-widest">
                {t.contact.emailLabel}
              </span>
              <div className="flex items-center gap-2 text-[#D7E2EA]/60 text-sm sm:text-base">
                <Mail size={16} />
                <span>{t.contact.email}</span>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <a href={`mailto:${t.contact.email}`}>
                <ContactButton />
              </a>
            </div>

            <p className="mt-10 text-[#D7E2EA]/20 text-xs">
              {t.contact.copyright}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
