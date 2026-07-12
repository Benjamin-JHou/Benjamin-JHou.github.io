import { motion } from 'framer-motion'

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
          top: '10%',
          left: '10%',
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          top: '50%',
          right: '5%',
        }}
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 80, -30, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
          bottom: '15%',
          left: '30%',
        }}
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -50, 70, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}
