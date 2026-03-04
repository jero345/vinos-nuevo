import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const eventPackages = [
  {
    name:  'Weekday Hire',
    price: '2,500',
    unit:  'per day',
    tag:   null,
    features: [
      'Full stable & grounds access',
      'Dedicated event coordinator',
      'Guest capacity up to 80',
      'Catering setup space',
      'Complimentary estate wine tasting',
      'Weekday only (Mon – Thu)',
    ],
    cta: 'Enquire Now',
    dark: false,
  },
  {
    name:  'Weekend Package',
    price: '4,500',
    unit:  'per weekend day',
    tag:   'Most Popular',
    features: [
      'Full stable & grounds access',
      'Dedicated event coordinator',
      'Guest capacity up to 150',
      'Professional sound & lighting',
      'Bridal suite access',
      'Estate wine pairing dinner option',
    ],
    cta: 'Reserve Weekend',
    dark: true,
  },
  {
    name:  'Full Estate Buyout',
    price: '8,900',
    unit:  'per weekend',
    tag:   'Exclusive',
    features: [
      'Complete estate exclusivity',
      'Fri – Sun full access',
      'Accommodation for 12 guests',
      'Private chef consultation',
      'Customised wine selection',
      'Complimentary engagement shoot',
    ],
    cta: 'Enquire Now',
    dark: false,
  },
]

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
}

const card = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Pricing() {
  const handleContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-28 md:py-40 bg-estate-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            Transparent Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="section-heading mb-6"
          >
            Investment in <em className="italic text-estate-brown">Memory</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans font-light text-estate-charcoal/60 text-sm max-w-md mx-auto leading-7"
          >
            All packages include estate access, coordinator support, and complimentary wine tasting.
            Custom packages available on request.
          </motion.p>
        </div>

        {/* Pricing cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-6 md:gap-8 mb-24"
        >
          {eventPackages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={card}
              className={`relative p-8 md:p-10 flex flex-col transition-transform duration-300
                          hover:-translate-y-1
                          ${pkg.dark
                            ? 'bg-estate-darkbrown text-estate-cream shadow-2xl shadow-estate-darkbrown/30'
                            : 'bg-estate-warmwhite border border-estate-stone/20'
                          }`}
            >
              {/* Badge */}
              {pkg.tag && (
                <span className="absolute -top-3 left-8 bg-estate-gold text-estate-darkbrown
                                 font-sans text-[9px] tracking-widest uppercase px-4 py-1.5">
                  {pkg.tag}
                </span>
              )}

              <div className="mb-8">
                <p className={`section-label mb-2 ${pkg.dark ? 'text-estate-stone/60' : ''}`}>
                  {pkg.name}
                </p>
                <div className="flex items-end gap-2 mb-1">
                  <span className={`font-display text-5xl font-light ${pkg.dark ? 'text-estate-cream' : 'text-estate-darkbrown'}`}>
                    ${pkg.price}
                  </span>
                </div>
                <p className={`font-sans text-xs ${pkg.dark ? 'text-estate-stone/50' : 'text-estate-stone/60'}`}>
                  AUD {pkg.unit}
                </p>
              </div>

              <div className={`h-px mb-8 ${pkg.dark ? 'bg-estate-stone/20' : 'bg-estate-beige'}`} />

              <ul className="flex flex-col gap-4 mb-10 flex-1">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${pkg.dark ? 'text-estate-gold' : 'text-estate-olive'}`}
                    />
                    <span className={`font-sans text-sm font-light leading-5
                                      ${pkg.dark ? 'text-estate-stone/80' : 'text-estate-charcoal/70'}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleContact}
                className={`w-full py-3.5 font-sans text-xs tracking-widest uppercase
                             transition-all duration-400 ease-luxury
                             ${pkg.dark
                               ? 'bg-estate-gold text-estate-darkbrown hover:bg-estate-cream'
                               : 'bg-estate-darkbrown text-estate-cream hover:bg-estate-brown'
                             }`}
              >
                {pkg.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Wine pricing strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-estate-darkbrown/5 border border-estate-stone/20 p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="section-label mb-3">Wine Collection</p>
              <h3 className="font-display text-3xl font-light text-estate-darkbrown mb-2">
                $38 — $120 <em className="italic text-estate-brown">per bottle</em>
              </h3>
              <p className="font-sans text-sm font-light text-estate-charcoal/60 leading-6 max-w-md">
                Six limited-edition expressions available for purchase at the estate cellar door or
                shipped directly to your door within Australia.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <button
                onClick={() => document.querySelector('#wines')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary py-3"
              >
                <span>Shop Wines</span>
              </button>
              <button
                onClick={handleContact}
                className="border border-estate-darkbrown text-estate-darkbrown px-8 py-3
                           font-sans text-xs tracking-widest uppercase
                           hover:bg-estate-darkbrown hover:text-estate-cream transition-all duration-400"
              >
                Wholesale Enquiry
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
