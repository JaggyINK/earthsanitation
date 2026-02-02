'use client'

import { useState } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function SettingsPage() {
  const [saved, setSaved] = useState(false)

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-heading font-bold text-gray-900">Paramètres</h1>
        <p className="text-gray-500 text-sm mt-1">Configuration de votre espace admin</p>
      </div>

      <div className="max-w-2xl space-y-8">
        {/* Informations entreprise */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-heading font-bold text-lg text-gray-900 mb-4">Informations entreprise</h2>
          <form onSubmit={handleSave} className="space-y-4">
            <Input label="Nom de l'entreprise" defaultValue="Earth Sanitation" />
            <Input label="Téléphone principal" defaultValue="06 23 12 20 57" />
            <Input label="Email" type="email" defaultValue="contact@earthsanitation.fr" />
            <Input label="Adresse" defaultValue="" placeholder="Adresse complète" />
            <Input label="SIRET" defaultValue="" placeholder="XXX XXX XXX XXXXX" />
            <Button type="submit">Enregistrer</Button>
            {saved && <p className="text-green-600 text-sm">Paramètres enregistrés !</p>}
          </form>
        </div>

        {/* API Keys */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-heading font-bold text-lg text-gray-900 mb-4">Clés API</h2>
          <form className="space-y-4">
            <Input label="Google Places API Key" type="password" defaultValue="" placeholder="AIzaSy..." />
            <p className="text-xs text-gray-400">
              Nécessaire pour récupérer automatiquement les avis Google.{' '}
              <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-forest underline">
                Obtenir une clé
              </a>
            </p>
          </form>
        </div>

        {/* Sécurité */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-heading font-bold text-lg text-gray-900 mb-4">Sécurité</h2>
          <form onSubmit={handleSave} className="space-y-4">
            <Input label="Ancien mot de passe" type="password" />
            <Input label="Nouveau mot de passe" type="password" />
            <Input label="Confirmer le mot de passe" type="password" />
            <Button type="submit">Changer le mot de passe</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
