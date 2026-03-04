import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const duration = 2200
    const interval = 30
    const steps = duration / interval
    let current = 0

    const timer = setInterval(() => {
      current++
      setProgress(Math.min(Math.round((current / steps) * 100), 100))
      if (current >= steps) {
        clearInterval(timer)
        setTimeout(() => {
          setVisible(false)
          setTimeout(onComplete, 800)
        }, 300)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-estate-darkbrown flex flex-col items-center justify-center"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }}
        >
          {/* Grain overlay */}
          <div className="grain-overlay" />

          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-6 mb-16"
          >
            {/* Ornamental SVG */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="opacity-60">
              <circle cx="24" cy="24" r="22" stroke="#B8963E" strokeWidth="0.5" />
              <circle cx="24" cy="24" r="14" stroke="#B8963E" strokeWidth="0.5" />
              <line x1="24" y1="2" x2="24" y2="46" stroke="#B8963E" strokeWidth="0.5" />
              <line x1="2" y1="24" x2="46" y2="24" stroke="#B8963E" strokeWidth="0.5" />
              <circle cx="24" cy="24" r="3" fill="#B8963E" />
            </svg>

            <div className="text-center">
              <p className="section-label text-estate-stone/60 mb-3">Est. 2019</p>
              <h1 className="font-display text-4xl md:text-5xl font-light text-estate-cream tracking-wide">
                Wollumbi Estate
              </h1>
              <p className="font-display text-sm italic text-estate-stone/70 mt-2 tracking-widest">
                Where Nature Hosts Elegance
              </p>
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-48 flex flex-col items-center gap-3"
          >
            <div className="w-full h-px bg-estate-stone/20 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-estate-gold"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.03 }}
              />
            </div>
            <span className="font-sans text-xs tracking-widest text-estate-stone/40">
              {String(progress).padStart(2, '0')}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
