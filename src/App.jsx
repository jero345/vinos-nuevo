import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LoadingScreen  from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor   from './components/CustomCursor'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import About          from './components/About'
import Events         from './components/Events'
import WineCollection from './components/WineCollection'
import Gallery        from './components/Gallery'
import Pricing        from './components/Pricing'
import Contact        from './components/Contact'
import Footer         from './components/Footer'
import SectionDivider from './components/SectionDivider'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  // Disable scroll during loading
  useEffect(() => {
    if (!loaded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [loaded])

  return (
    <>
      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Loading screen */}
      <AnimatePresence>
        {!loaded && (
          <LoadingScreen onComplete={() => setLoaded(true)} />
        )}
      </AnimatePresence>

      {/* Main site */}
      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Grain texture overlay */}
            <div className="grain-overlay" />

            {/* Scroll progress bar */}
            <ScrollProgress />

            {/* Navigation */}
            <Navbar />

            {/* Page content */}
            <main>
              <Hero />
              <About />
              <SectionDivider />
              <Events />
              <SectionDivider light />
              <WineCollection />
              <SectionDivider />
              <Gallery />
              <SectionDivider light />
              <Pricing />
              <SectionDivider />
              <Contact />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
