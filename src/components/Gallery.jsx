import { motion } from 'framer-motion'

const galleryItems = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop',
    label: 'Wedding Ceremony',
    size: 'tall',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop',
    label: 'Estate Dining',
    size: 'wide',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80&auto=format&fit=crop',
    label: 'Vineyard Dusk',
    size: 'square',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80&auto=format&fit=crop',
    label: 'Barrel Room',
    size: 'square',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?w=800&q=80&auto=format&fit=crop',
    label: 'Countryside Vista',
    size: 'wide',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80&auto=format&fit=crop',
    label: 'Corporate Retreat',
    size: 'tall',
  },
]

function GalleryImage({ item, index }) {
  const heightClass = {
    tall:   'aspect-[3/4] md:row-span-2',
    wide:   'aspect-[16/9] md:col-span-2',
    square: 'aspect-square',
  }[item.size]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative overflow-hidden group cursor-pointer ${heightClass}`}
    >
      <motion.img
        src={item.img}
        alt={item.label}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-estate-darkbrown/0 group-hover:bg-estate-darkbrown/60
                      transition-all duration-500 ease-luxury flex items-end p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="opacity-0 group-hover:opacity-100 transition-all duration-400 ease-luxury"
        >
          <div className="w-8 h-px bg-estate-gold mb-3" />
          <p className="font-display text-xl font-light text-estate-cream tracking-wide">
            {item.label}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 md:py-40 bg-estate-warmwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-4"
            >
              Estate Gallery
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="section-heading"
            >
              Life on the <em className="italic text-estate-brown">Estate</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-sans text-sm font-light text-estate-charcoal/60 max-w-xs leading-7 md:text-right"
          >
            Every corner of Wollumbi has been shaped by intentional care — and is best experienced in person.
          </motion.p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-auto">
          {galleryItems.map((item, i) => (
            <GalleryImage key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
