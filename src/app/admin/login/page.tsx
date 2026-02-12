'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function AdminLoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = new FormData(e.currentTarget)
    const result = await signIn('credentials', {
      email: form.get('email') as string,
      password: form.get('password') as string,
      redirect: false,
    })

    if (result?.error) {
      setError(
        result.error.includes('Trop de tentatives')
          ? 'Trop de tentatives. Réessayez dans 15 minutes.'
          : 'Email ou mot de passe incorrect.'
      )
      setLoading(false)
    } else {
      router.push('/admin/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <Image src="/images/logo.svg" alt="Earth Sanitation" fill className="object-contain" />
          </div>
          <h1 className="text-2xl font-heading font-bold text-forest">Administration</h1>
          <p className="text-sage text-sm mt-1">Connectez-vous à votre espace admin</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Email" name="email" type="email" required placeholder="admin@earthsanitation.fr" />
          <Input label="Mot de passe" name="password" type="password" required placeholder="••••••••" />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? 'Connexion...' : 'Se connecter'}
          </Button>
        </form>
      </div>
    </div>
  )
}
