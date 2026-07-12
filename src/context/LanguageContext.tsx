import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { zh, en, type LangContent } from '../data/content'

type Lang = 'zh' | 'en'

interface LanguageContextValue {
  lang: Lang
  toggleLang: () => void
  t: LangContent
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLang(): Lang {
  const saved = localStorage.getItem('site-lang')
  if (saved === 'zh' || saved === 'en') return saved
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    localStorage.setItem('site-lang', lang)
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [lang])

  const toggleLang = () => setLang((prev) => (prev === 'zh' ? 'en' : 'zh'))

  const t = lang === 'zh' ? zh : en

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
