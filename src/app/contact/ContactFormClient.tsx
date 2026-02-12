'use client'

import { useState } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { services } from '@/data/services'
import { cities } from '@/data/cities'

export default function ContactFormClient() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    const emailValue = (data.get('email') as string)?.trim()

    try {
      const payload: Record<string, unknown> = {
        name: data.get('name'),
        phone: data.get('phone'),
        message: [
          `[Sujet: ${data.get('subject')}]`,
          `[Service: ${data.get('service') || 'Non précisé'}]`,
          `[Ville: ${data.get('ville') || 'Non précisée'}]`,
          '',
          data.get('message'),
        ].join('\n'),
        type: 'CONTACT',
      }

      // Only include email if actually filled
      if (emailValue) {
        payload.email = emailValue
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
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
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Sujet */}
      <div className="flex flex-col gap-1">
        <label htmlFor="subject" className="text-sm font-medium text-forest">Sujet de votre demande *</label>
        <select
          id="subject"
          name="subject"
          required
          className="px-4 py-3 rounded-lg border border-sand bg-white text-forest focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
        >
          <option value="">Sélectionnez un sujet</option>
          <option value="Demande d'information">Demande d&apos;information</option>
          <option value="Demande de devis">Demande de devis</option>
          <option value="Urgence">Urgence / Intervention rapide</option>
          <option value="Réclamation">Réclamation</option>
          <option value="Partenariat">Partenariat / Professionnel</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      {/* Coordonnées */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input label="Nom complet *" name="name" required placeholder="Votre nom et prénom" />
        <Input label="Téléphone *" name="phone" type="tel" required placeholder="06 XX XX XX XX" />
      </div>
      <Input label="Email" name="email" type="email" placeholder="votre@email.com" />

      {/* Service et ville */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="service" className="text-sm font-medium text-forest">Service concerné</label>
          <select
            id="service"
            name="service"
            className="px-4 py-3 rounded-lg border border-sand bg-white text-forest focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
          >
            <option value="">Optionnel</option>
            {services.map(s => (
              <option key={s.slug} value={s.shortTitle}>{s.title}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="ville" className="text-sm font-medium text-forest">Ville</label>
          <select
            id="ville"
            name="ville"
            className="px-4 py-3 rounded-lg border border-sand bg-white text-forest focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
          >
            <option value="">Optionnel</option>
            {cities.filter(c => c.priority === 'high').map(c => (
              <option key={c.slug} value={c.name}>{c.name}</option>
            ))}
            {cities.filter(c => c.priority === 'medium').map(c => (
              <option key={c.slug} value={c.name}>{c.name}</option>
            ))}
            <option value="Autre">Autre</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-medium text-forest">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Décrivez votre demande en détail..."
          className="px-4 py-3 rounded-lg border border-sand bg-white text-forest placeholder:text-sand focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent resize-none"
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
      </Button>

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <p className="text-green-700 font-medium">Message envoyé avec succès !</p>
          <p className="text-green-600 text-sm mt-1">Nous vous recontacterons dans les plus brefs délais.</p>
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-700 font-medium">Une erreur est survenue.</p>
          <p className="text-red-600 text-sm mt-1">Veuillez réessayer ou nous contacter directement par WhatsApp.</p>
        </div>
      )}
    </form>
  )
}
