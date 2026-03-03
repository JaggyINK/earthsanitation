import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { withAuth } from 'next-auth/middleware'

const CANONICAL_HOST = 'earth-sanitation.fr'

const authMiddleware = withAuth({
  pages: {
    signIn: '/admin/login',
  },
})

export default function middleware(req: NextRequest) {
  const host = req.headers.get('host') ?? ''

  // Redirect .com and .org to .fr (301 permanent)
  if (host && !host.includes(CANONICAL_HOST) && !host.includes('localhost')) {
    const url = new URL(req.url)
    url.host = CANONICAL_HOST
    url.protocol = 'https'
    url.port = ''
    return NextResponse.redirect(url, 301)
  }

  // Admin routes: require auth
  if (req.nextUrl.pathname.startsWith('/admin/') && !req.nextUrl.pathname.startsWith('/admin/login')) {
    return (authMiddleware as any)(req)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.txt$).*)'],
}
