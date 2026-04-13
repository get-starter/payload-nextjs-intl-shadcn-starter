import './globals.css'
import type { Metadata } from 'next'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { Inter } from 'next/font/google'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { getPayloadClient } from '@/payload/payload'
import { AppProvider } from '@/features/app/app.provider'
import { setRequestLocale } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const payload = await getPayloadClient()

  const settings = await payload.findGlobal({ slug: 'settings', locale: locale as any, depth: 1 })

  const title = settings.meta?.title || 'Default Title'
  const slogan = settings.meta?.slogan || ''

  return {
    title: {
      template: `%s | ${title}`,
      default: slogan ? `${title} | ${slogan}` : title,
    },
    description: settings.meta?.desc || null,
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)

  const payload = await getPayloadClient()

  /// initial data
  const [settings, nav] = await Promise.all([
    payload.findGlobal({ slug: 'settings', locale: locale as any }),
    payload.findGlobal({ slug: 'nav', locale: locale as any }),
  ])
  const initialState = { globalData: { settings, nav } }

  return (
    <html lang={locale} suppressHydrationWarning className={`${inter.variable} antialiased`}>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale}>
          <AppProvider initialState={initialState}>
            <ThemeProvider attribute={'class'}>{children}</ThemeProvider>
          </AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
