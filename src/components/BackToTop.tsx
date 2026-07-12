import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full border border-[#D7E2EA]/20 bg-[#0C0C0C]/80 backdrop-blur-md flex items-center justify-center text-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:border-[#D7E2EA]/40 transition-colors"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
