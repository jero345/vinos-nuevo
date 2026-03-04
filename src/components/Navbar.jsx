import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About',   href: '#about' },
  { label: 'Events',  href: '#events' },
  { label: 'Wines',   href: '#wines' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive]     = useState('')

  // Cambio de fondo al scrollear
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Detecta sección activa con IntersectionObserver
  useEffect(() => {
    const sections = navLinks
      .map(l => document.querySelector(l.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach(s => observer.observe(s))
    return () => sections.forEach(s => observer.unobserve(s))
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury
          ${scrolled
            ? 'bg-estate-darkbrown/95 backdrop-blur-md py-4 shadow-lg shadow-black/20'
            : 'bg-transparent py-7'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-8">

          {/* Logo — izquierda */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col items-start group flex-shrink-0"
          >
            <span className="font-display text-xl md:text-2xl font-light text-estate-cream
                             tracking-wide leading-none group-hover:text-estate-gold transition-colors duration-300">
              Wollumbi
            </span>
            <span className="font-sans text-[9px] tracking-widest3 text-estate-stone/60 uppercase mt-0.5">
              Estate
            </span>
          </button>

          {/* Nav — centro */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = active === link.href
              return (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="relative flex flex-col items-center gap-1 group"
                >
                  <span className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300
                    ${isActive
                      ? 'text-estate-gold'
                      : 'text-estate-stone/70 group-hover:text-estate-cream'
                    }`}>
                    {link.label}
                  </span>
                  <span className={`h-px bg-estate-gold transition-all duration-400 ease-luxury
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  />
                </button>
              )
            })}
          </nav>

          {/* CTA — derecha */}
          <div className="hidden lg:flex flex-shrink-0">
            <button
              onClick={() => handleNav('#contact')}
              className="btn-primary py-2.5 px-6 text-xs"
            >
              <span>Reserve Now</span>
            </button>
          </div>

          {/* Hamburger mobile */}
          <button
            className="lg:hidden text-estate-cream p-1.5 flex-shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu — full screen */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[60] bg-estate-darkbrown flex flex-col items-center justify-center"
          >
            <div className="grain-overlay" />

            {/* Header dentro del menú */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-6">
              <div className="flex flex-col">
                <span className="font-display text-xl font-light text-estate-cream tracking-wide leading-none">
                  Wollumbi
                </span>
                <span className="font-sans text-[9px] tracking-widest3 text-estate-stone/50 uppercase mt-0.5">
                  Estate
                </span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-estate-stone/60 hover:text-estate-cream transition-colors duration-300 p-1"
                aria-label="Cerrar menú"
              >
                <X size={22} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => {
                const isActive = active === link.href
                return (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    onClick={() => handleNav(link.href)}
                    className={`font-display text-3xl font-light tracking-wide transition-colors duration-300
                      ${isActive ? 'text-estate-gold' : 'text-estate-cream hover:text-estate-gold'}`}
                  >
                    {link.label}
                  </motion.button>
                )
              })}
            </div>

            {/* Divider + CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: navLinks.length * 0.06 + 0.1 }}
              className="absolute bottom-12 flex flex-col items-center gap-6"
            >
              <div className="w-10 h-px bg-estate-stone/25" />
              <button
                onClick={() => handleNav('#contact')}
                className="btn-outline"
              >
                <span>Reserve Now</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
