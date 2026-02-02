'use client'

import { useState } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { services } from '@/data/services'

export default function DevisFormClient() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          message: `[Service: ${data.get('service')}] ${data.get('message')}`,
          type: 'QUOTE',
        }),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input label="Nom complet" name="name" required placeholder="Votre nom" />
      <Input label="Téléphone" name="phone" type="tel" required placeholder="06 XX XX XX XX" />
      <Input label="Email" name="email" type="email" placeholder="votre@email.com" />
      <div className="flex flex-col gap-1">
        <label htmlFor="service" className="text-sm font-medium text-forest">Service souhaité</label>
        <select
          id="service"
          name="service"
          required
          className="px-4 py-3 rounded-lg border border-sand bg-white text-forest focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
        >
          <option value="">Sélectionnez un service</option>
          {services.map(s => (
            <option key={s.slug} value={s.shortTitle}>{s.title}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-medium text-forest">Description du besoin</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Décrivez votre problème ou votre besoin..."
          className="px-4 py-3 rounded-lg border border-sand bg-white text-forest placeholder:text-sand focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent resize-none"
        />
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi en cours...' : 'Demander un devis gratuit'}
      </Button>
      {status === 'success' && (
        <p className="text-green-600 font-medium">Demande envoyée ! Nous vous recontacterons sous 24h.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 font-medium">Erreur. Veuillez réessayer ou nous appeler directement.</p>
      )}
    </form>
  )
}
