import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const ABOUT_IMG = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=85&auto=format&fit=crop'

const values = [
  {
    label: 'Heritage',
    desc:  'Three generations of stewardship have shaped this land into a living legacy of care and craft.',
    icon:  '⬡',
  },
  {
    label: 'Craftsmanship',
    desc:  'Every bottle, every stone, every timber beam reflects the devotion of hands that knew no shortcuts.',
    icon:  '◇',
  },
  {
    label: 'Exclusivity',
    desc:  'Wollumbi welcomes only those who seek something genuinely rare — an experience that cannot be replicated.',
    icon:  '○',
  },
]

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function About() {
  const { ref: imgRef, inView: imgInView }   = useScrollReveal({ threshold: 0.2 })
  const { ref: textRef, inView: textInView } = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="about" className="py-28 md:py-40 bg-estate-warmwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image side */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -60 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Main image */}
            <div className="aspect-[4/5] overflow-hidden">
              <motion.img
                src={ABOUT_IMG}
                alt="The Estate grounds"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={imgInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="absolute -bottom-8 -right-6 md:-right-10 bg-estate-darkbrown text-estate-cream
                         px-8 py-6 max-w-[200px]"
            >
              <p className="font-display text-4xl font-light leading-none mb-1">5+</p>
              <p className="font-sans text-xs tracking-widest uppercase text-estate-stone/70">
                Years of Harvest
              </p>
            </motion.div>

            {/* Gold border accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-estate-gold/30 pointer-events-none" />
          </motion.div>

          {/* Text side */}
          <motion.div
            ref={textRef}
            variants={container}
            initial="hidden"
            animate={textInView ? 'show' : 'hidden'}
          >
            <motion.p variants={item} className="section-label mb-4">Our Story</motion.p>

            <motion.h2 variants={item} className="section-heading mb-6">
              A Place Where
              <br />
              <em className="italic text-estate-brown">Time Softens</em>
            </motion.h2>

            <motion.div variants={item} className="divider-ornament">
              <span className="text-estate-gold text-xs">◆</span>
            </motion.div>

            <motion.p variants={item}
              className="font-sans font-light text-estate-charcoal/70 leading-8 text-base mb-6 text-balance"
            >
              Nestled within the ancient ridgelines of the Hunter Valley, Wollumbi Estate was
              born from a quiet conviction — that the finest moments in life deserve a setting
              that honours them. Our historic stable grounds, restored with meticulous care,
              now serve as the backdrop for weddings, private gatherings, and corporate retreats
              that leave a permanent impression.
            </motion.p>

            <motion.p variants={item}
              className="font-sans font-light text-estate-charcoal/70 leading-8 text-base mb-12 text-balance"
            >
              Alongside these living spaces, our estate vines produce six handcrafted wines —
              each bottle a distillation of soil, season, and the patient artistry of our winemakers.
            </motion.p>

            {/* Value pillars */}
            <motion.div variants={container} className="grid grid-cols-3 gap-6">
              {values.map((v) => (
                <motion.div key={v.label} variants={item} className="group">
                  <span className="font-display text-xl text-estate-gold/60 mb-3 block">{v.icon}</span>
                  <h4 className="font-display text-lg font-medium text-estate-darkbrown mb-2">{v.label}</h4>
                  <p className="font-sans text-xs font-light leading-5 text-estate-charcoal/60">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
