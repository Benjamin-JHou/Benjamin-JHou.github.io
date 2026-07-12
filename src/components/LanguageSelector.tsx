import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { ChevronDown, Check } from 'lucide-react'

const langs = [
  { code: 'zh' as const, label: '中文', flag: '🇨🇳' },
  { code: 'en' as const, label: 'English', flag: '🇬🇧' },
  { code: 'fr' as const, label: 'Français', flag: '🇫🇷' },
  { code: 'ko' as const, label: '한국어', flag: '🇰🇷' },
]

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const current = langs.find((l) => l.code === lang)!

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-[#D7E2EA]/80 hover:text-[#D7E2EA] text-xs font-medium border border-[#D7E2EA]/30 rounded px-2.5 py-1 transition-colors"
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <ChevronDown size={12} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 min-w-[140px] bg-[#141414] border border-[#D7E2EA]/10 rounded-xl overflow-hidden shadow-xl shadow-black/50 z-50"
          >
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  if (l.code !== lang) setLang(l.code)
                  setOpen(false)
                }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs transition-colors ${
                  l.code === lang ? 'text-[#D7E2EA] bg-[#D7E2EA]/5' : 'text-[#D7E2EA]/50 hover:text-[#D7E2EA] hover:bg-[#D7E2EA]/5'
                }`}
              >
                <span>{l.flag}</span>
                <span className="flex-1 text-left">{l.label}</span>
                {l.code === lang && <Check size={12} className="text-[#7c3aed]" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
