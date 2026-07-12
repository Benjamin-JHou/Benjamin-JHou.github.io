import { useLanguage } from '../context/LanguageContext'
import { ExternalLink } from 'lucide-react'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative border-t border-[#D7E2EA]/5 px-6 sm:px-10 md:px-16 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#D7E2EA]/20 text-xs">
          {t.contact.copyright}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://scholar.google.com/citations?hl=en&user=fsxyotsAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA]/30 hover:text-[#D7E2EA]/70 transition-colors"
            aria-label="Google Scholar"
          >
            <ExternalLink size={16} />
          </a>
          <a
            href="https://orcid.org/0000-0001-5931-1477"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA]/30 hover:text-[#D7E2EA]/70 transition-colors"
            aria-label="ORCID"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
