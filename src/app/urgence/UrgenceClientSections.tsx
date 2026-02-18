'use client'

import { useEffect, useState } from 'react'
import { getWhatsAppUrl, PHONE_NUMBER, PHONE_HREF } from '@/lib/utils'
import AnimatedCounter from '@/components/shared/AnimatedCounter'

interface CounterData {
  end: number
  suffix: string
  label: string
  prefix?: string
  displayText?: string
}

interface UrgenceClientSectionsProps {
  section: 'liveBadge' | 'heroCTA' | 'counter' | 'ctaButton' | 'finalCTA'
  data?: CounterData
}

function LiveBadge() {
  const [time, setTime] = useState('')

  useEffect(() => {
    function updateTime() {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
        })
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-bold px-5 py-2 rounded-full mb-6 border border-white/20">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
      </span>
      {time ? (
        <>Il est {time} — Nous sommes disponibles</>
      ) : (
        <>Disponible maintenant</>
      )}
    </div>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href={getWhatsAppUrl({ type: 'urgence' })}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold text-xl px-10 py-5 rounded-xl hover:bg-[#1da851] active:bg-[#178a43] transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02]"
      >
        <WhatsAppIcon className="w-7 h-7" />
        Contacter par WhatsApp
      </a>
      <a
        href={PHONE_HREF}
        className="inline-flex items-center justify-center gap-3 bg-white/15 backdrop-blur-sm text-white font-bold text-xl px-10 py-5 rounded-xl border-2 border-white/30 hover:bg-white/25 transition-all"
      >
        <PhoneIcon className="w-7 h-7" />
        {PHONE_NUMBER}
      </a>
    </div>
  )
}

function CounterBlock({ data }: { data: CounterData }) {
  return (
    <div>
      <div className="text-3xl sm:text-4xl font-heading font-extrabold">
        {data.displayText ? (
          data.displayText
        ) : (
          <AnimatedCounter end={data.end} suffix={data.suffix} prefix={data.prefix} />
        )}
      </div>
      <div className="text-cream/70 text-sm mt-1">{data.label}</div>
    </div>
  )
}

function CTAButton() {
  return (
    <a
      href={getWhatsAppUrl({ type: 'urgence' })}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-white text-red-700 font-bold text-xl px-10 py-4 rounded-xl hover:bg-cream transition-colors shadow-lg"
    >
      <WhatsAppIcon className="w-6 h-6" />
      Contacter maintenant
    </a>
  )
}

function FinalCTA() {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href={getWhatsAppUrl({ type: 'urgence' })}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-3 bg-white text-red-700 font-bold text-2xl px-10 py-5 rounded-xl hover:bg-cream active:bg-sand transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02]"
      >
        <WhatsAppIcon className="w-8 h-8" />
        WhatsApp — Réponse immédiate
      </a>
      <a
        href={PHONE_HREF}
        className="inline-flex items-center justify-center gap-3 bg-white/15 backdrop-blur-sm text-white font-bold text-xl px-10 py-5 rounded-xl border-2 border-white/30 hover:bg-white/25 transition-all"
      >
        <PhoneIcon className="w-7 h-7" />
        {PHONE_NUMBER}
      </a>
    </div>
  )
}

export default function UrgenceClientSections({ section, data }: UrgenceClientSectionsProps) {
  switch (section) {
    case 'liveBadge':
      return <LiveBadge />
    case 'heroCTA':
      return <HeroCTA />
    case 'counter':
      return data ? <CounterBlock data={data} /> : null
    case 'ctaButton':
      return <CTAButton />
    case 'finalCTA':
      return <FinalCTA />
    default:
      return null
  }
}
