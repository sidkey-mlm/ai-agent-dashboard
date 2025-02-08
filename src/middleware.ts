import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })
  const { data: { session } } = await supabase.auth.getSession()
  const { pathname } = request.nextUrl

  // Public routes that don't require authentication
  const publicRoutes = ['/auth/login', '/auth/signup', '/auth/forgot-password']
  
  // Allow access to auth callback and reset-password without redirection
  if (pathname.startsWith('/auth/callback') || pathname.startsWith('/auth/reset-password')) {
    return res
  }

  // Redirect to dashboard if user is signed in and trying to access auth pages
  if (session && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Redirect to login if user is not signed in and trying to access protected routes
  if (!session && !publicRoutes.includes(pathname) && !pathname.startsWith('/auth/')) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
