import { NextResponse } from 'next/server'

export default async function middleware(req) {
  const { cookies, geo, nextUrl } = req
  const { locale, defaultLocale: nextDefaultLocale, origin, pathname } = nextUrl

  return NextResponse.rewrite(`${origin}/rewrite`)
}
