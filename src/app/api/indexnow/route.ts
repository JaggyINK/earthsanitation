import { NextRequest, NextResponse } from 'next/server'

const INDEXNOW_KEY = 'ea7f2c9b4d1e8a3f5c6b0d2e4a8f1c3d'
const SITE_URL = 'https://earth-sanitation.fr'

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization')
  if (auth !== `Bearer ${process.env.INDEXNOW_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const urls: string[] = body.urls ?? []

  if (urls.length === 0) {
    return NextResponse.json({ error: 'No URLs provided' }, { status: 400 })
  }

  const payload = {
    host: 'earth-sanitation.fr',
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls.map(u => u.startsWith('http') ? u : `${SITE_URL}${u}`),
  }

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  })

  return NextResponse.json({
    status: response.status,
    submitted: payload.urlList.length,
    urls: payload.urlList,
  })
}
