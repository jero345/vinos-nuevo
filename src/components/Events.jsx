import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const EVENTS_IMG = 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85&auto=format&fit=crop'

const eventTypes = [
  {
    icon: '♡',
    title: 'Weddings',
    desc: 'Exchange vows amid wildflower meadows and heritage timbers. Our estate provides the perfect canvas for a ceremony that is entirely, intimately yours.',
  },
  {
    icon: '◈',
    title: 'Corporate Retreats',
    desc: 'Step away from the ordinary. Our secluded grounds inspire clarity, connection, and conversation that moves far beyond the boardroom.',
  },
  {
    icon: '◉',
    title: 'Private Gatherings',
    desc: 'From milestone birthdays to intimate long-table dinners under the stars — Wollumbi turns any occasion into a memory held forever.',
  },
]

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Events() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const yBg = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  const { ref: cardRef, inView: cardInView } = useScrollReveal({ threshold: 0.1 })

  const handleContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="events" ref={sectionRef} className="relative py-40 overflow-hidden bg-estate-darkbrown">
      {/* Parallax bg */}
      <motion.div className="absolute inset-0" style={{ y: yBg }}>
        <img
          src={EVENTS_IMG}
          alt="Estate event setting"
          className="w-full h-full object-cover opacity-25"
        />
      </motion.div>
      <div className="absolute inset-0 bg-estate-darkbrown/80" />

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-label text-estate-stone/60 mb-4"
          >
            Private Event Hire
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display font-light text-estate-cream leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            The Estate Is Yours
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-16 h-px bg-estate-gold mx-auto"
          />
        </div>

        {/* Event type cards */}
        <motion.div
          ref={cardRef}
          variants={container}
          initial="hidden"
          animate={cardInView ? 'show' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {eventTypes.map((evt) => (
            <motion.div
              key={evt.title}
              variants={item}
              className="border border-estate-stone/20 p-8 md:p-10 group
                         hover:border-estate-gold/40 hover:bg-estate-cream/5
                         transition-all duration-500 ease-luxury cursor-default"
            >
              <span className="font-display text-3xl text-estate-gold/50 group-hover:text-estate-gold
                               transition-colors duration-300 block mb-6">
                {evt.icon}
              </span>
              <h3 className="font-display text-2xl font-light text-estate-cream mb-4 tracking-wide">
                {evt.title}
              </h3>
              <p className="font-sans text-sm font-light leading-7 text-estate-stone/70">
                {evt.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16
                     border-t border-b border-estate-stone/20 py-10"
        >
          {[
            { num: '200+', label: 'Guests Capacity' },
            { num: '5 ac', label: 'Private Grounds' },
            { num: '100%', label: 'Exclusive Hire' },
            { num: '24/7', label: 'Dedicated Support' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-light text-estate-gold mb-1">{s.num}</p>
              <p className="section-label text-estate-stone/50">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onClick={handleContact}
            className="btn-outline"
          >
            <span>Check Availability</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  )
}
