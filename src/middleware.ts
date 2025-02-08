import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })
  const { data: { session } } = await supabase.auth.getSession()
  const { pathname } = request.nextUrl

  // Allow static files and api routes
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') ||
    pathname.startsWith('/static')
  ) {
    return res
  }

  // Public routes that don't require authentication
  const publicRoutes = ['/auth/login', '/auth/signup', '/auth/forgot-password']
  
  // Special auth routes that need special handling
  if (pathname.startsWith('/auth/callback') || pathname.startsWith('/auth/reset-password')) {
    return res
  }

  // If trying to access protected routes without session, redirect to login
  if (!session && !publicRoutes.includes(pathname) && !pathname.startsWith('/auth/')) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  // If trying to access auth pages with session, redirect to dashboard
  if (session && (publicRoutes.includes(pathname) || pathname === '/')) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
