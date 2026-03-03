'use client'

import { useState } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { services } from '@/data/services'
import { cities } from '@/data/cities'

export default function DevisFormClient() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [clientType, setClientType] = useState<'particulier' | 'professionnel'>('particulier')
  const [photos, setPhotos] = useState<File[]>([])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    const emailValue = (data.get('email') as string)?.trim()

    try {
      // Upload photos first if any
      let photoUrls: string[] = []
      if (photos.length > 0) {
        try {
          const uploadData = new FormData()
          photos.forEach(f => uploadData.append('photos', f))
          const uploadRes = await fetch('/api/upload/lead', { method: 'POST', body: uploadData })
          if (uploadRes.ok) {
            const uploadJson = await uploadRes.json()
            photoUrls = uploadJson.urls || []
          }
        } catch {
          // Photo upload failed — continue without photos
        }
      }

      const payload: Record<string, unknown> = {
        name: data.get('name'),
        phone: data.get('phone'),
        message: data.get('message'),
        type: 'QUOTE',
        service: data.get('service') || undefined,
        city: data.get('ville') || undefined,
        address: data.get('address') || undefined,
        urgency: data.get('urgency') || undefined,
        clientType,
        photos: photoUrls,
      }

      if (emailValue) payload.email = emailValue
      if (clientType === 'professionnel') {
        payload.company = data.get('company') || undefined
        payload.siret = data.get('siret') || undefined
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
        setPhotos([])
        setClientType('particulier')
      } else {
        const errData = await res.json().catch(() => null)
        console.error('Contact API error:', res.status, errData)
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setPhotos(prev => [...prev, ...newFiles].slice(0, 5))
    }
  }

  function removePhoto(index: number) {
    setPhotos(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Type de client */}
      <div>
        <label className="text-sm font-medium text-forest block mb-3">Vous êtes</label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setClientType('particulier')}
            className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
              clientType === 'particulier'
                ? 'border-forest bg-forest text-cream'
                : 'border-sand bg-white text-forest hover:border-sage'
            }`}
          >
            <svg className="w-5 h-5 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Particulier
          </button>
          <button
            type="button"
            onClick={() => setClientType('professionnel')}
            className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
              clientType === 'professionnel'
                ? 'border-forest bg-forest text-cream'
                : 'border-sand bg-white text-forest hover:border-sage'
            }`}
          >
            <svg className="w-5 h-5 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Professionnel
          </button>
        </div>
      </div>

      {/* Coordonnées */}
      <div className="bg-cream/50 rounded-xl p-5 space-y-4">
        <h3 className="font-heading font-bold text-forest">Vos coordonnées</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Nom complet *" name="name" required placeholder="Votre nom et prénom" />
          <Input label="Téléphone *" name="phone" type="tel" required placeholder="06 XX XX XX XX" />
        </div>
        <Input label="Email" name="email" type="email" placeholder="votre@email.com" />

        {clientType === 'professionnel' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-sand/30">
            <Input label="Nom de l'entreprise *" name="company" required placeholder="Raison sociale" />
            <Input label="SIRET *" name="siret" required placeholder="XXX XXX XXX XXXXX" maxLength={17} />
          </div>
        )}
      </div>

      {/* Détails de la demande */}
      <div className="bg-cream/50 rounded-xl p-5 space-y-4">
        <h3 className="font-heading font-bold text-forest">Votre demande</h3>

        <div className="flex flex-col gap-1">
          <label htmlFor="service" className="text-sm font-medium text-forest">Service souhaité *</label>
          <select id="service" name="service" required className="px-4 py-3 rounded-lg border border-sand bg-white text-forest focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent">
            <option value="">Sélectionnez un service</option>
            {services.map(s => (
              <option key={s.slug} value={s.shortTitle}>{s.title}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="ville" className="text-sm font-medium text-forest">Ville d&apos;intervention *</label>
          <select id="ville" name="ville" required className="px-4 py-3 rounded-lg border border-sand bg-white text-forest focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent">
            <option value="">Sélectionnez une ville</option>
            <optgroup label="Villes principales">
              {cities.filter(c => c.priority === 'high').map(c => (
                <option key={c.slug} value={c.name}>{c.name} ({c.cp})</option>
              ))}
            </optgroup>
            <optgroup label="Hérault">
              {cities.filter(c => c.priority === 'medium' && c.department === 'Hérault').map(c => (
                <option key={c.slug} value={c.name}>{c.name} ({c.cp})</option>
              ))}
            </optgroup>
            <optgroup label="Gard">
              {cities.filter(c => c.priority === 'medium' && c.department === 'Gard').map(c => (
                <option key={c.slug} value={c.name}>{c.name} ({c.cp})</option>
              ))}
            </optgroup>
            <optgroup label="Aude">
              {cities.filter(c => c.department === 'Aude').map(c => (
                <option key={c.slug} value={c.name}>{c.name} ({c.cp})</option>
              ))}
            </optgroup>
            <option value="Autre">Autre (précisez dans le message)</option>
          </select>
        </div>

        <Input label="Adresse précise" name="address" placeholder="Numéro et rue (optionnel)" />

        <div className="flex flex-col gap-1">
          <label htmlFor="urgency" className="text-sm font-medium text-forest">Niveau d&apos;urgence</label>
          <select id="urgency" name="urgency" className="px-4 py-3 rounded-lg border border-sand bg-white text-forest focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent">
            <option value="normal">Normal — sous quelques jours</option>
            <option value="rapide">Rapide — sous 24-48h</option>
            <option value="urgent">Urgent — intervention dans la journée</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm font-medium text-forest">Description du besoin *</label>
          <textarea id="message" name="message" rows={4} required placeholder="Décrivez votre problème : depuis quand, type de canalisation, symptômes observés..." className="px-4 py-3 rounded-lg border border-sand bg-white text-forest placeholder:text-sand focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent resize-none" />
        </div>

        {/* Upload photos */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-forest">Photos (optionnel, max 5)</label>
          <div className="flex flex-wrap gap-3">
            {photos.map((photo, i) => (
              <div key={i} className="relative w-20 h-20 rounded-lg overflow-hidden border border-sand bg-white">
                <img src={URL.createObjectURL(photo)} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
                <button type="button" onClick={() => removePhoto(i)} className="absolute top-0.5 right-0.5 w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">x</button>
              </div>
            ))}
            {photos.length < 5 && (
              <label className="w-20 h-20 rounded-lg border-2 border-dashed border-sand hover:border-sage bg-white flex flex-col items-center justify-center cursor-pointer transition-colors">
                <svg className="w-6 h-6 text-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-xs text-sand mt-0.5">Photo</span>
                <input type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} multiple />
              </label>
            )}
          </div>
          <p className="text-xs text-sage">Ajoutez des photos pour un devis plus précis.</p>
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi en cours...' : 'Demander mon devis gratuit'}
      </Button>

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <p className="text-green-700 font-medium">Demande envoyée avec succès !</p>
          <p className="text-green-600 text-sm mt-1">Nous vous recontacterons sous 24h avec votre devis.</p>
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-700 font-medium">Erreur lors de l&apos;envoi.</p>
          <p className="text-red-600 text-sm mt-1">Veuillez réessayer ou nous contacter directement par WhatsApp.</p>
        </div>
      )}
    </form>
  )
}
