import Magnet from './Magnet'
import { useLanguage } from '../context/LanguageContext'

interface ContactButtonProps {
  className?: string
  onClick?: () => void
  href?: string
}

export default function ContactButton({ className = '', onClick, href }: ContactButtonProps) {
  const { t } = useLanguage()
  const label = t.contact.actionBtn
  const button = (
    <button
      onClick={onClick}
      className={`
        relative rounded-full font-medium uppercase tracking-widest text-white
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
        text-xs sm:text-sm md:text-base
        transition-opacity hover:opacity-90
        ${className}
      `}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: `
          0px 4px 4px rgba(181, 1, 167, 0.25),
          4px 4px 12px #7721B1 inset,
          0 0 0 2px white,
          0 0 0 5px transparent
        `,
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </button>
  )

  if (href) {
    return (
      <Magnet padding={50} strength={6}>
        <a href={href}>{button}</a>
      </Magnet>
    )
  }

  return (
    <Magnet padding={50} strength={6}>
      {button}
    </Magnet>
  )
}
