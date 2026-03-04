import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let ringX = 0, ringY = 0
    let mouseX = 0, mouseY = 0
    let frame

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.top  = `${mouseX}px`
      dot.style.left = `${mouseY}px`
      // rAF handles ring lag
    }

    const tick = () => {
      ringX += (mouseX - ringX) * 0.1
      ringY += (mouseY - ringY) * 0.1
      ring.style.top  = `${ringX}px`
      ring.style.left = `${ringY}px`
      frame = requestAnimationFrame(tick)
    }

    const onEnter = () => ring.classList.add('hovering')
    const onLeave = () => ring.classList.remove('hovering')

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    frame = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  style={{ top: '-20px', left: '-20px' }} />
      <div ref={ringRef} className="cursor-ring" style={{ top: '-40px', left: '-40px' }} />
    </>
  )
}
