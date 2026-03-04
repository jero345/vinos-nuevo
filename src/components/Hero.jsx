import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const HERO_IMG = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85&auto=format&fit=crop'

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollY } = useScroll()
  const yBg  = useTransform(scrollY, [0, 700], [0, 180])
  const opac = useTransform(scrollY, [0, 600], [1, 0])
  const yText = useTransform(scrollY, [0, 500], [0, 100])

  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ y: yBg }}
      >
        <img
          src={HERO_IMG}
          alt="Wollumbi Estate — sweeping countryside view"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-estate-darkbrown/60 via-estate-darkbrown/30 to-estate-darkbrown/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-estate-darkbrown/40 to-transparent" />
      </motion.div>

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ y: yText, opacity: opac }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="w-12 h-px bg-estate-gold/60" />
          <span className="section-label text-estate-stone/80">Est. 2019 · Hunter Valley, NSW</span>
          <div className="w-12 h-px bg-estate-gold/60" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display font-light text-estate-cream leading-none mb-6"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
        >
          Where Nature
          <br />
          <em className="italic text-estate-gold">Hosts Elegance</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-sans font-light text-estate-stone/80 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed tracking-wide"
        >
          A sanctuary of handcrafted wines, lush countryside vistas,
          and intimate spaces crafted for life's most unforgettable moments.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScroll('#contact')}
            className="btn-primary group"
          >
            <span>Reserve Your Event</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => handleScroll('#wines')}
            className="btn-outline group"
          >
            <span>Explore Our Wines</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
        onClick={() => handleScroll('#about')}
      >
        <span className="section-label text-estate-stone/50 text-[10px]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-estate-gold/70" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40
                      bg-gradient-to-t from-estate-warmwhite to-transparent" />
    </section>
  )
}
