import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import { useState } from 'react'

const wines = [
  {
    id: 1,
    name: 'Estate Reserve Red',
    varietal: 'Shiraz Blend',
    description: 'Deep garnet, layered with dark cherry, clove, and a finish that lingers like a long summer evening.',
    price: 92,
    badge: 'Flagship',
    img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Golden Valley Chardonnay',
    varietal: 'Chardonnay',
    description: 'Luminous gold with stone fruit and toasted oak. Crafted for those who appreciate quiet complexity.',
    price: 58,
    badge: null,
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Sunset Rosé',
    varietal: 'Grenache Rosé',
    description: 'Blush-pink and brimming with wild strawberry and rose petal — the perfect companion to golden afternoons.',
    price: 48,
    badge: 'Seasonal',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Heritage Cabernet',
    varietal: 'Cabernet Sauvignon',
    description: 'Bold structure, velvet tannins, and a story that begins in soil tended by the same family for decades.',
    price: 78,
    badge: null,
    img: 'https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Mountain Mist Sauvignon',
    varietal: 'Sauvignon Blanc',
    description: 'Crisp, ethereal, with flint and fresh citrus. Born from elevation and morning mist that rolls through the valley.',
    price: 38,
    badge: null,
    img: 'https://images.unsplash.com/photo-1474722883778-792e7fb1d4b4?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Barrel Aged Signature',
    varietal: 'Bordeaux Blend',
    description: 'Our most coveted expression. Eighteen months in French oak yield a wine of remarkable depth and ceremony.',
    price: 120,
    badge: 'Limited',
    img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&q=80&auto=format&fit=crop',
  },
]

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
}

const card = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function WineCard({ wine }) {
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <motion.article
      variants={card}
      className="group bg-estate-warmwhite border border-estate-beige/60 overflow-hidden
                 hover:shadow-2xl hover:shadow-estate-darkbrown/10 hover:-translate-y-1
                 transition-all duration-500 ease-luxury flex flex-col"
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-estate-beige">
        <motion.img
          src={wine.img}
          alt={wine.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        {/* Badge */}
        {wine.badge && (
          <span className="absolute top-4 left-4 bg-estate-darkbrown text-estate-cream
                           font-sans text-[9px] tracking-widest uppercase px-3 py-1.5">
            {wine.badge}
          </span>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-estate-darkbrown/0 group-hover:bg-estate-darkbrown/20
                        transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 md:p-7">
        <p className="section-label text-estate-stone mb-2">{wine.varietal}</p>
        <h3 className="font-display text-xl md:text-2xl font-light text-estate-darkbrown mb-3 leading-snug">
          {wine.name}
        </h3>
        <p className="font-sans text-sm font-light leading-6 text-estate-charcoal/60 mb-6 flex-1">
          {wine.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-estate-beige/80">
          <span className="font-display text-2xl font-light text-estate-brown">
            ${wine.price}
            <span className="font-sans text-xs text-estate-stone/60 ml-1">/ bottle</span>
          </span>

          <button
            onClick={handleAdd}
            className={`flex items-center gap-2 px-5 py-2.5 font-sans text-xs tracking-widest uppercase
                        transition-all duration-300 ease-luxury
                        ${added
                          ? 'bg-estate-olive text-white'
                          : 'bg-estate-darkbrown text-estate-cream hover:bg-estate-brown'
                        }`}
          >
            <ShoppingCart size={13} />
            <span>{added ? 'Added' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default function WineCollection() {
  return (
    <section id="wines" className="py-28 md:py-40 bg-estate-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            Handcrafted Collection
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="section-heading mb-4"
          >
            Our <em className="italic text-estate-brown">Wines</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans font-light text-estate-charcoal/60 text-sm max-w-lg mx-auto leading-7"
          >
            Six expressions of place, season, and patience. Each wine is produced in limited quantities
            and available exclusively through the estate.
          </motion.p>
        </div>

        {/* Wine grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {wines.map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </motion.div>

        {/* Marquee strip */}
        <div className="mt-24 overflow-hidden border-t border-b border-estate-stone/20 py-5">
          <div className="flex gap-16 animate-marquee whitespace-nowrap select-none">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="font-display text-lg italic text-estate-stone/40 flex-shrink-0">
                Estate Reserve &nbsp;·&nbsp; Golden Valley &nbsp;·&nbsp; Sunset Rosé &nbsp;·&nbsp;
                Heritage Cabernet &nbsp;·&nbsp; Mountain Mist &nbsp;·&nbsp; Barrel Aged Signature
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
