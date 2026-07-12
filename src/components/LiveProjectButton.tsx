import { type ReactNode } from 'react'
import Magnet from './Magnet'

interface LiveProjectButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function LiveProjectButton({
  children,
  className = '',
  onClick,
}: LiveProjectButtonProps) {
  return (
    <Magnet padding={50} strength={6}>
      <button
        onClick={onClick}
        className={`
          rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
          font-medium uppercase tracking-widest
          px-8 py-3 sm:px-10 sm:py-3.5
          text-sm sm:text-base
          transition-colors hover:bg-[#D7E2EA]/10
          ${className}
        `}
      >
        {children}
      </button>
    </Magnet>
  )
}
