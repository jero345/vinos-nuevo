import { motion } from 'framer-motion'

const navLinks = [
  { label: 'About the Estate', href: '#about' },
  { label: 'Event Hire',       href: '#events' },
  { label: 'Wine Collection',  href: '#wines' },
  { label: 'Gallery',          href: '#gallery' },
  { label: 'Pricing',          href: '#pricing' },
  { label: 'Contact',          href: '#contact' },
]

const legalLinks = [
  { label: 'Privacy Policy',   href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Responsible Service', href: '#' },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/wollumbiestate',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Pinterest',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.498 1.806 1.476 1.806 1.771 0 3.134-1.867 3.134-4.562 0-2.387-1.715-4.055-4.163-4.055-2.833 0-4.497 2.124-4.497 4.32 0 .856.33 1.774.741 2.274a.3.3 0 0 1 .069.285c-.076.315-.244.995-.277 1.134-.044.183-.145.222-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.938.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const handleNav = (href) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-estate-darkbrown text-estate-cream relative overflow-hidden">
      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      {/* Top CTA band */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-b border-estate-stone/15 py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row
                        items-center justify-between gap-8">
          <div>
            <p className="section-label text-estate-stone/50 mb-3">Ready to begin?</p>
            <h3 className="font-display text-3xl md:text-4xl font-light text-estate-cream">
              Let's create something <em className="italic text-estate-gold">extraordinary.</em>
            </h3>
          </div>
          <button
            onClick={() => handleNav('#contact')}
            className="btn-outline flex-shrink-0"
          >
            <span>Start Your Enquiry</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="font-display text-2xl font-light tracking-wide mb-0.5">Wollumbi</span>
              <span className="font-sans text-[9px] tracking-widest3 text-estate-stone/50 uppercase">Estate</span>
            </div>
            <p className="font-sans text-xs font-light leading-6 text-estate-stone/50 mb-8 max-w-xs">
              A luxury countryside estate offering private event hire and premium handcrafted wines
              in the heart of Hunter Valley, NSW.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-estate-stone/50 hover:text-estate-gold transition-colors duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="section-label text-estate-stone/40 mb-6">Navigate</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-sans text-sm font-light text-estate-stone/60
                               hover:text-estate-cream transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <p className="section-label text-estate-stone/40 mb-6">Visit</p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase text-estate-stone/40 mb-1">Address</p>
                <p className="font-sans text-sm font-light text-estate-stone/60 leading-6">
                  Wollombi Road<br />Hunter Valley NSW 2325
                </p>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase text-estate-stone/40 mb-1">Cellar Door Hours</p>
                <p className="font-sans text-sm font-light text-estate-stone/60 leading-6">
                  Fri – Sun: 10am – 5pm<br />
                  Public Hols: 10am – 4pm
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label text-estate-stone/40 mb-6">Contact</p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase text-estate-stone/40 mb-1">Phone</p>
                <p className="font-sans text-sm font-light text-estate-stone/60">+61 2 4998 0000</p>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase text-estate-stone/40 mb-1">Email</p>
                <p className="font-sans text-sm font-light text-estate-stone/60">hello@wollumbiestate.com.au</p>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase text-estate-stone/40 mb-1">Events</p>
                <p className="font-sans text-sm font-light text-estate-stone/60">events@wollumbiestate.com.au</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-estate-stone/15 pt-8 flex flex-col md:flex-row
                        items-center justify-between gap-4">
          <p className="font-sans text-xs text-estate-stone/30">
            © {new Date().getFullYear()} Wollumbi Estate. All rights reserved.
            &nbsp;Drink responsibly. Must be 18+ to purchase alcohol.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-xs text-estate-stone/30 hover:text-estate-stone/60
                           transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
