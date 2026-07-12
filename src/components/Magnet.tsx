import { useRef, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface MagnetProps {
  children: ReactNode
  className?: string
  padding?: number
  strength?: number
}

export default function Magnet({
  children,
  className,
  padding = 100,
  strength = 4,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    if (
      Math.abs(distanceX) < rect.width / 2 + padding &&
      Math.abs(distanceY) < rect.height / 2 + padding
    ) {
      setIsHovering(true)
      setPosition({ x: distanceX / strength, y: distanceY / strength })
    } else {
      setIsHovering(false)
      setPosition({ x: 0, y: 0 })
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setIsHovering(false)
        setPosition({ x: 0, y: 0 })
      }}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      className={className}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  )
}
