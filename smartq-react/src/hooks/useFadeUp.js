import { useEffect, useRef } from 'react'

const useFadeUp = () => {
  const ref = useRef(null)
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    )
    const el = ref.current
    if (el) {
      const fadeEls = el.querySelectorAll('.fade-up')
      fadeEls.forEach((el) => observer.observe(el))
    }
    return () => observer.disconnect()
  }, [])
  return ref
}

export default useFadeUp
