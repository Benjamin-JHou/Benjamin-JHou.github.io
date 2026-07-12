import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-[#0C0C0C] flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-[#D7E2EA] font-bold text-2xl sm:text-3xl tracking-widest"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        JUNYU ZHOU
      </motion.div>
      <motion.div
        className="mt-6 w-48 h-[2px] bg-[#D7E2EA]/10 rounded overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="h-full rounded"
          style={{ background: 'linear-gradient(90deg, #7c3aed, #3b82f6, #ec4899)' }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}
