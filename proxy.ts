// proxy.ts
import { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

export function proxy(request: NextRequest) {
  if (request.method !== 'GET') {
    return
  }

  return intlMiddleware(request)
}

export const config = {
  //matcher: '/((?!admin|api|trpc|_next|_vercel|.*\\..*).*)',
  matcher: [
    // next-intl
    '/((?!admin|api|trpc|_next|_vercel|.*\\..*).*)',
  ],
}
