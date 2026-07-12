import { useState, useCallback, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Gallery() {
  const { t } = useLanguage()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const open = (i: number) => setLightboxIndex(i)
  const close = () => setLightboxIndex(null)

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % t.gallery.photos.length)
  }, [lightboxIndex, t.gallery.photos.length])

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex(
      (lightboxIndex - 1 + t.gallery.photos.length) % t.gallery.photos.length
    )
  }, [lightboxIndex, t.gallery.photos.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, goNext, goPrev])

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  return (
    <section
      id="gallery"
      className="relative min-h-screen flex flex-col justify-center overflow-x-clip px-6 sm:px-10 md:px-16 py-20"
    >
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
        <h2 className="hero-heading font-black text-[clamp(2.5rem,6vw,5rem)]">
          {t.gallery.title}
        </h2>
        <p className="text-[#D7E2EA]/40 text-sm sm:text-base mt-2 tracking-wider">
          {t.gallery.subtitle}
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto w-full mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {t.gallery.photos.map((photo, i) => {
          const aspectClass =
            photo.aspect === 'aspect-square'
              ? 'aspect-square'
              : photo.aspect === 'aspect-3-4'
                ? 'aspect-[3/4]'
                : 'aspect-[4/5]'

          const spanClass =
            i === 0
              ? 'col-span-2 sm:col-span-1 row-span-1'
              : i === 1
                ? 'row-span-2'
                : ''

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '30px' }}
              transition={{ delay: i * 0.1, duration: 0.5, type: 'spring', stiffness: 150 }}
            >
              <div
                onClick={() => open(i)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${aspectClass} ${spanClass}`}
              >
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#7c3aed]/30 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                  <span className="text-white/90 text-xs sm:text-sm font-medium">
                    {photo.label}
                  </span>
                  <span className="text-white/60 text-xs mt-0.5">
                    {photo.desc}
                  </span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) close()
            }}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-4 sm:left-10 text-white/60 hover:text-white transition-colors z-10"
            >
              <ChevronLeft size={36} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-4 sm:right-10 text-white/60 hover:text-white transition-colors z-10"
            >
              <ChevronRight size={36} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            >
              <img
                src={t.gallery.photos[lightboxIndex].src}
                alt={t.gallery.photos[lightboxIndex].label}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <p className="text-white text-sm sm:text-base font-medium">
                  {t.gallery.photos[lightboxIndex].label}
                </p>
                <p className="text-white/50 text-xs sm:text-sm mt-1">
                  {t.gallery.photos[lightboxIndex].desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
