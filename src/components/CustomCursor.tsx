import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { damping: 25, stiffness: 200 })
  const springY = useSpring(y, { damping: 25, stiffness: 200 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setIsVisible(true)
    }
    const leave = () => setIsVisible(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
    }
  }, [x, y])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%', background: '#fff' }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998] border border-white/20"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 0.05 }}
      />
    </>
  )
}
