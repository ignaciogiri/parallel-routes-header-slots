import { Suspense } from "react"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { MountIndicator } from "@/components/mount-indicator"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  headerLeft,
  headerCenter,
  headerRight,
  params,
}: {
  children: React.ReactNode
  headerLeft: React.ReactNode
  headerCenter: React.ReactNode
  headerRight: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className="antialiased bg-background text-foreground">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <header className="border-b sticky top-0 bg-background z-50 px-4">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-4 min-w-[200px]">
                <Suspense>{headerLeft}</Suspense>
              </div>
              <div className="flex-1 flex justify-center max-w-xl mx-4">
                <Suspense>{headerCenter}</Suspense>
              </div>
              <div className="flex items-center gap-4 min-w-[200px] justify-end">
                <Suspense>{headerRight}</Suspense>
                <div className="flex items-center gap-2 pl-4 border-l">
                  <MountIndicator />
                  <LocaleSwitcher />
                </div>
              </div>
            </div>
          </header>
          <main>
            <Suspense>{children}</Suspense>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
