'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  separator?: string
  end2?: number
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  separator,
  end2,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let cancelled = false
    let timer: ReturnType<typeof setTimeout> | null = null
    const mountTime = Date.now()

    function runAnimation() {
      if (cancelled) return
      const startTime = performance.now()

      function tick(now: number) {
        if (cancelled) return
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = easeOutCubic(progress)
        setCount(Math.round(eased * end))
        if (end2 !== undefined) setCount2(Math.round(eased * end2))
        if (progress < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !cancelled) {
            observer.disconnect()
            const timeSinceMount = Date.now() - mountTime

            // If observer fires very quickly (element was already in viewport on page load),
            // add a longer delay so user has time to see the page before counting starts.
            // If it fires after user scrolled, use a short delay for the parent ScaleIn.
            const delay = timeSinceMount < 800 ? 1500 : 400

            timer = setTimeout(() => {
              if (!cancelled) runAnimation()
            }, delay)
          }
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)

    return () => {
      cancelled = true
      if (timer) clearTimeout(timer)
      observer.disconnect()
    }
  }, [end, end2, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{separator !== undefined && <>{separator}{count2}</>}{suffix}
    </span>
  )
}
