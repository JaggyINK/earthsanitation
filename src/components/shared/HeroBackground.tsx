'use client'

import { useEffect, useState } from 'react'

export default function HeroBackground() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      {/* ── Gradient blobs ── */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gold/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-sage/25 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-sage)_0%,transparent_50%)] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-gold)_0%,transparent_50%)] opacity-15" />

      {/* ── Pipe network SVG ── */}
      <svg
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main horizontal pipes — thick, visible */}
        <g stroke="rgba(82,121,111,0.35)" strokeWidth="12" strokeLinecap="round">
          <line x1="-20" y1="80" x2="400" y2="80" />
          <line x1="500" y1="80" x2="1220" y2="80" />
          <line x1="-20" y1="320" x2="700" y2="320" />
          <line x1="800" y1="320" x2="1220" y2="320" />
        </g>

        {/* Secondary horizontal pipes */}
        <g stroke="rgba(82,121,111,0.25)" strokeWidth="8" strokeLinecap="round">
          <line x1="200" y1="180" x2="600" y2="180" />
          <line x1="700" y1="200" x2="1100" y2="200" />
          <line x1="80" y1="260" x2="450" y2="260" />
        </g>

        {/* Vertical connector pipes */}
        <g stroke="rgba(82,121,111,0.3)" strokeWidth="8" strokeLinecap="round">
          <line x1="400" y1="80" x2="400" y2="180" />
          <line x1="700" y1="200" x2="700" y2="320" />
          <line x1="1000" y1="80" x2="1000" y2="200" />
          <line x1="200" y1="180" x2="200" y2="260" />
        </g>

        {/* Curved elbows */}
        <g stroke="rgba(82,121,111,0.3)" strokeWidth="8" fill="none">
          <path d="M400 80 Q400 130 450 130 L500 130 Q500 80 500 80" />
          <path d="M700 200 Q700 260 750 260 L800 260 Q800 320 800 320" />
          <path d="M200 260 Q200 290 230 290 L270 290 Q300 290 300 320" />
        </g>

        {/* Pipe joints / flanges */}
        <g stroke="rgba(245,241,235,0.2)" strokeWidth="2" fill="rgba(82,121,111,0.15)">
          <rect x="385" y="68" width="30" height="24" rx="4" />
          <rect x="485" y="68" width="30" height="24" rx="4" />
          <rect x="685" y="308" width="30" height="24" rx="4" />
          <rect x="785" y="308" width="30" height="24" rx="4" />
          <rect x="985" y="68" width="30" height="24" rx="4" />
          <rect x="985" y="188" width="30" height="24" rx="4" />
        </g>

        {/* Valves — clearly visible */}
        <g stroke="rgba(245,241,235,0.25)" strokeWidth="2.5" fill="rgba(82,121,111,0.2)">
          <rect x="830" y="60" width="50" height="40" rx="6" />
          <line x1="855" y1="38" x2="855" y2="60" strokeWidth="3" />
          <circle cx="855" cy="32" r="12" fill="none" />
          <line x1="843" y1="24" x2="867" y2="24" strokeWidth="3" />

          <rect x="340" y="300" width="50" height="40" rx="6" />
          <line x1="365" y1="278" x2="365" y2="300" strokeWidth="3" />
          <circle cx="365" cy="272" r="12" fill="none" />
          <line x1="353" y1="264" x2="377" y2="264" strokeWidth="3" />
        </g>

        {/* Pressure gauges */}
        <g stroke="rgba(245,241,235,0.22)" strokeWidth="2.5" fill="none">
          <circle cx="600" cy="180" r="22" />
          <circle cx="600" cy="180" r="14" />
          <line x1="600" y1="180" x2="612" y2="169" strokeWidth="3" />
          <line x1="600" y1="164" x2="600" y2="160" />
          <line x1="616" y1="180" x2="620" y2="180" />
          <line x1="584" y1="180" x2="580" y2="180" />
          <line x1="600" y1="196" x2="600" y2="200" />

          <circle cx="950" cy="140" r="18" />
          <circle cx="950" cy="140" r="11" />
          <line x1="950" y1="140" x2="959" y2="132" strokeWidth="2.5" />
        </g>

        {/* T-junction connectors */}
        <g stroke="rgba(82,121,111,0.28)" strokeWidth="8" strokeLinecap="round">
          <line x1="450" y1="260" x2="450" y2="320" />
          <line x1="900" y1="80" x2="900" y2="150" />
        </g>

        {/* Water flow indicators (gold dashes) */}
        <g stroke="rgba(139,105,20,0.2)" strokeWidth="3" strokeDasharray="8 12">
          <line x1="50" y1="80" x2="350" y2="80" />
          <line x1="550" y1="80" x2="800" y2="80" />
          <line x1="50" y1="320" x2="330" y2="320" />
          <line x1="850" y1="320" x2="1150" y2="320" />
          <line x1="250" y1="180" x2="550" y2="180" />
        </g>

        {/* Pipe end caps / connection dots */}
        <g fill="rgba(245,241,235,0.15)">
          <circle cx="400" cy="80" r="8" />
          <circle cx="500" cy="80" r="8" />
          <circle cx="700" cy="320" r="8" />
          <circle cx="800" cy="320" r="8" />
          <circle cx="200" cy="180" r="6" />
          <circle cx="600" cy="180" r="6" />
          <circle cx="450" cy="260" r="6" />
          <circle cx="450" cy="320" r="6" />
          <circle cx="900" cy="150" r="6" />
        </g>

        {/* Wrench icon — bottom center */}
        <g transform="translate(550, 330) scale(1.8)" stroke="rgba(245,241,235,0.15)" strokeWidth="1.5" fill="none">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
        </g>
      </svg>

      {/* ── Floating water drops ── */}
      <div className="absolute top-[18%] right-[22%] w-5 h-7 hidden lg:block animate-bounce" style={{ animationDuration: '3s' }}>
        <svg viewBox="0 0 24 32" fill="rgba(139,105,20,0.3)" className="w-full h-full">
          <path d="M12 0C12 0 0 14.4 0 22c0 6.627 5.373 10 12 10s12-3.373 12-10C24 14.4 12 0 12 0z" />
        </svg>
      </div>
      <div className="absolute bottom-[25%] left-[18%] w-4 h-5 hidden lg:block animate-bounce" style={{ animationDuration: '4s', animationDelay: '1.5s' }}>
        <svg viewBox="0 0 24 32" fill="rgba(245,241,235,0.2)" className="w-full h-full">
          <path d="M12 0C12 0 0 14.4 0 22c0 6.627 5.373 10 12 10s12-3.373 12-10C24 14.4 12 0 12 0z" />
        </svg>
      </div>
      <div className="absolute top-[50%] right-[38%] w-3 h-4 hidden lg:block animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.8s' }}>
        <svg viewBox="0 0 24 32" fill="rgba(82,121,111,0.25)" className="w-full h-full">
          <path d="M12 0C12 0 0 14.4 0 22c0 6.627 5.373 10 12 10s12-3.373 12-10C24 14.4 12 0 12 0z" />
        </svg>
      </div>
      <div className="absolute top-[35%] left-[50%] w-3 h-4 hidden lg:block animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>
        <svg viewBox="0 0 24 32" fill="rgba(139,105,20,0.22)" className="w-full h-full">
          <path d="M12 0C12 0 0 14.4 0 22c0 6.627 5.373 10 12 10s12-3.373 12-10C24 14.4 12 0 12 0z" />
        </svg>
      </div>

      {/* ── Corner pipe decorations ── */}
      <svg
        className={`absolute top-3 left-3 w-32 h-32 hidden lg:block transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}
        viewBox="0 0 80 80" fill="none" stroke="rgba(82,121,111,0.35)" strokeWidth="5"
      >
        <path d="M10 0v50a20 20 0 0020 20h50" />
        <path d="M0 0v50a30 30 0 0030 30h50" />
      </svg>
      <svg
        className={`absolute bottom-3 right-3 w-36 h-36 hidden lg:block transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
        viewBox="0 0 80 80" fill="none" stroke="rgba(82,121,111,0.35)" strokeWidth="5"
      >
        <path d="M70 80V30a20 20 0 00-20-20H0" />
        <path d="M80 80V30a30 30 0 00-30-30H0" />
      </svg>

      {/* ── Gold accent lines ── */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
    </>
  )
}
