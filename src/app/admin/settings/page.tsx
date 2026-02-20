'use client'

import { useState, useEffect } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function SettingsPage() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [companyEmail, setCompanyEmail] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [saveError, setSaveError] = useState('')
  const [loading, setLoading] = useState(true)
  const [passwordMsg, setPasswordMsg] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [changingPassword, setChangingPassword] = useState(false)

  useEffect(() => {
    fetch('/api/admin/settings')
      .then(res => res.json())
      .then(data => {
        setPhoneNumber(data.phoneNumber || '')
        setCompanyEmail(data.companyEmail || '')
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setSaved(false)
    setSaveError('')

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber, companyEmail }),
      })

      if (!res.ok) {
        const data = await res.json()
        setSaveError(data.error || 'Erreur lors de la sauvegarde.')
      } else {
        setSaved(true)
        setTimeout(() => setSaved(false), 3000)
      }
    } catch {
      setSaveError('Erreur de connexion au serveur.')
    } finally {
      setSaving(false)
    }
  }

  async function handlePasswordChange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPasswordMsg('')
    setPasswordError(false)
    setChangingPassword(true)

    const form = new FormData(e.currentTarget)
    const currentPassword = form.get('currentPassword') as string
    const newPassword = form.get('newPassword') as string
    const confirmPassword = form.get('confirmPassword') as string

    if (newPassword !== confirmPassword) {
      setPasswordMsg('Les mots de passe ne correspondent pas.')
      setPasswordError(true)
      setChangingPassword(false)
      return
    }

    if (newPassword.length < 8) {
      setPasswordMsg('Le mot de passe doit faire au moins 8 caractères.')
      setPasswordError(true)
      setChangingPassword(false)
      return
    }

    try {
      const res = await fetch('/api/admin/change-password', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword }),
      })

      const data = await res.json()

      if (!res.ok) {
        setPasswordMsg(data.error || 'Erreur lors du changement de mot de passe.')
        setPasswordError(true)
      } else {
        setPasswordMsg('Mot de passe modifié avec succès !')
        setPasswordError(false)
        e.currentTarget.reset()
      }
    } catch {
      setPasswordMsg('Erreur de connexion au serveur.')
      setPasswordError(true)
    } finally {
      setChangingPassword(false)
    }
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
          {loading ? (
            <p className="text-gray-400 text-sm">Chargement...</p>
          ) : (
            <form onSubmit={handleSave} className="space-y-4">
              <Input
                label="Téléphone principal"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Input
                label="Email"
                type="email"
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
              />
              <Button type="submit" disabled={saving}>
                {saving ? 'Enregistrement...' : 'Enregistrer'}
              </Button>
              {saved && <p className="text-green-600 text-sm">Paramètres enregistrés !</p>}
              {saveError && <p className="text-red-600 text-sm">{saveError}</p>}
            </form>
          )}
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
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <Input label="Ancien mot de passe" name="currentPassword" type="password" required />
            <Input label="Nouveau mot de passe" name="newPassword" type="password" required />
            <Input label="Confirmer le mot de passe" name="confirmPassword" type="password" required />
            <Button type="submit" disabled={changingPassword}>
              {changingPassword ? 'Modification...' : 'Changer le mot de passe'}
            </Button>
            {passwordMsg && (
              <p className={`text-sm ${passwordError ? 'text-red-600' : 'text-green-600'}`}>
                {passwordMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
