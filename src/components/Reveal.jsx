import { useEffect, useRef, useState } from 'react'

/**
 * Envuelve children en un contenedor con "revelado al hacer scroll".
 * Añade `.is-visible` la primera vez que el elemento entra en el viewport,
 * disparando una transición CSS de fade + translateY (ver `.reveal` en index.css).
 */
export default function Reveal({ children, className = '', delay = 0, style }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}
