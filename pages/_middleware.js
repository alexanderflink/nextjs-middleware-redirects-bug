import { NextResponse } from 'next/server'

export default async function middleware(req) {
  const { cookies, geo, nextUrl } = req
  const { locale, defaultLocale: nextDefaultLocale, origin, pathname } = nextUrl

  // return NextResponse.next()
  return NextResponse.redirect(`${origin}/source`)
}
