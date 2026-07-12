import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { zh, en, fr, ko, type LangContent } from '../data/content'

type Lang = 'zh' | 'en' | 'fr' | 'ko'

const langOrder: Lang[] = ['zh', 'en', 'fr', 'ko']
const langLabel: Record<Lang, string> = { zh: 'ZH', en: 'EN', fr: 'FR', ko: 'KO' }
const langHtml: Record<Lang, string> = { zh: 'zh-CN', en: 'en', fr: 'fr', ko: 'ko' }

interface LanguageContextValue {
  lang: Lang
  toggleLang: () => void
  langLabel: string
  t: LangContent
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const validLangs = new Set<string>(langOrder)

function getInitialLang(): Lang {
  const saved = localStorage.getItem('site-lang')
  if (saved && validLangs.has(saved)) return saved as Lang
  return 'en'
}

const contentMap: Record<Lang, LangContent> = { zh, en, fr, ko }

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    localStorage.setItem('site-lang', lang)
    document.documentElement.lang = langHtml[lang]
  }, [lang])

  const toggleLang = () => {
    setLang((prev) => {
      const idx = langOrder.indexOf(prev)
      return langOrder[(idx + 1) % langOrder.length]
    })
  }

  const t = contentMap[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, langLabel: langLabel[lang], t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
