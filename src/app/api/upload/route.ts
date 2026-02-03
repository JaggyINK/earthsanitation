import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import sharp from 'sharp'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { existsSync } from 'fs'

// POST - Upload et conversion d'image en WebP
export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null
    const type = formData.get('type') as string | null // 'profile' ou 'photo'

    if (!file) {
      return NextResponse.json({ error: 'Aucun fichier fourni' }, { status: 400 })
    }

    // Vérifier le type de fichier
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Format non supporté. Utilisez PNG, JPEG ou WebP.' },
        { status: 400 }
      )
    }

    // Vérifier la taille (max 5MB)
    const maxSize = 5 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'Fichier trop volumineux. Maximum 5MB.' },
        { status: 400 }
      )
    }

    // Lire le fichier
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Générer un nom de fichier unique
    const timestamp = Date.now()
    const random = Math.random().toString(36).substring(2, 8)
    const filename = `${type || 'image'}-${timestamp}-${random}.webp`

    // Définir les options de conversion selon le type
    const isProfile = type === 'profile'
    const sharpOptions = isProfile
      ? { width: 200, height: 200, fit: 'cover' as const }
      : { width: 800, height: 600, fit: 'inside' as const, withoutEnlargement: true }

    // Convertir en WebP avec sharp
    const webpBuffer = await sharp(buffer)
      .resize(sharpOptions)
      .webp({ quality: 85 })
      .toBuffer()

    // Créer le dossier si nécessaire
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'reviews')
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    // Sauvegarder le fichier
    const filePath = path.join(uploadDir, filename)
    await writeFile(filePath, webpBuffer)

    // Retourner l'URL relative
    const url = `/uploads/reviews/${filename}`

    return NextResponse.json({ url, filename })
  } catch (error) {
    console.error('Erreur upload:', error)
    return NextResponse.json(
      { error: 'Erreur lors du traitement de l\'image' },
      { status: 500 }
    )
  }
}
