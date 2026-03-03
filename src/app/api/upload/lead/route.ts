import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import crypto from 'crypto'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const files = formData.getAll('photos') as File[]

    if (!files.length) {
      return NextResponse.json({ error: 'Aucun fichier' }, { status: 400 })
    }

    if (files.length > 5) {
      return NextResponse.json({ error: 'Maximum 5 photos' }, { status: 400 })
    }

    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'leads')
    await mkdir(uploadDir, { recursive: true })

    const urls: string[] = []

    for (const file of files) {
      if (!file.type.startsWith('image/')) continue
      if (file.size > 5 * 1024 * 1024) continue // 5MB max

      const buffer = Buffer.from(await file.arrayBuffer())
      const ext = file.type.split('/')[1]?.replace('jpeg', 'jpg') || 'jpg'
      const filename = `${crypto.randomUUID()}.${ext}`
      const filepath = path.join(uploadDir, filename)

      await writeFile(filepath, buffer)
      urls.push(`/uploads/leads/${filename}`)
    }

    return NextResponse.json({ urls })
  } catch (error) {
    console.error('Lead upload error:', error)
    return NextResponse.json({ error: 'Erreur upload' }, { status: 500 })
  }
}
