import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, MapPin, Phone, Mail } from 'lucide-react'

const eventTypes = [
  'Wedding',
  'Corporate Retreat',
  'Private Dinner',
  'Birthday Celebration',
  'Engagement Party',
  'Other',
]

const ESTATE_IMG = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=85&auto=format&fit=crop'

const inputClass = `
  w-full bg-transparent border-b border-estate-stone/30 py-4 px-0 font-sans text-sm font-light
  text-estate-darkbrown placeholder-estate-stone/50 outline-none
  focus:border-estate-darkbrown transition-colors duration-300 ease-luxury
`

const labelClass = `
  font-sans text-xs tracking-widest uppercase text-estate-stone block mb-2
`

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', date: '', eventType: '', message: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1800)
  }

  return (
    <section id="contact" className="py-28 md:py-40 bg-estate-warmwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-4"
            >
              Reserve & Enquire
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="section-heading mb-8"
            >
              Begin Your
              <br />
              <em className="italic text-estate-brown">Story Here</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans font-light text-estate-charcoal/65 text-sm leading-8 mb-12 max-w-md"
            >
              Whether you're planning a wedding, curating a retreat, or simply curious about our
              wines — we'd love to hear from you. Our team responds within 24 hours.
            </motion.p>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative aspect-[4/3] overflow-hidden mb-12"
            >
              <img src={ESTATE_IMG} alt="Estate contact" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-estate-darkbrown/40 to-transparent" />
            </motion.div>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              {[
                { Icon: MapPin, text: 'Wollombi Road, Hunter Valley NSW 2325' },
                { Icon: Phone, text: '+61 2 4998 0000' },
                { Icon: Mail,  text: 'hello@wollumbiestate.com.au' },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-estate-stone/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-estate-brown" />
                  </div>
                  <span className="font-sans text-sm font-light text-estate-charcoal/70">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-16 h-16 border border-estate-gold flex items-center justify-center mb-8">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8963E" strokeWidth="1.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl font-light text-estate-darkbrown mb-4">
                  Thank You
                </h3>
                <p className="font-sans text-sm font-light text-estate-charcoal/60 leading-7 max-w-sm">
                  Your enquiry has been received. Our team will be in touch within 24 hours to begin crafting your experience.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass} htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Date + Event Type */}
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass} htmlFor="date">Event Date</label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="eventType">Type of Event</label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={form.eventType}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer appearance-none bg-no-repeat`}
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C4B5A0' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundPosition: 'right 0.5rem center' }}
                    >
                      <option value="">Select type...</option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass} htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your vision..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary group disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <span>Sending</span>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-t border-estate-cream/60 rounded-full"
                        />
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="font-sans text-xs text-estate-stone/50 mt-4 leading-5">
                    We respect your privacy. Your details are never shared.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
