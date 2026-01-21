import { Suspense } from "react"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { MountIndicator } from "@/components/mount-indicator"
import { RouteNav } from "@/components/route-nav"

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
          <main className="grid grid-cols-[520px_1fr]">
            <aside className="border-r min-h-[calc(100vh-4rem)] p-6 overflow-auto">
              <RouteNav />
            </aside>
            <div className="p-6">
              <Suspense>{children}</Suspense>
            </div>
          </main>
          <a
            href="https://github.com/ignaciogiri/parallel-routes-header-slots"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-full shadow-lg hover:opacity-80 transition-opacity text-sm"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            See how the header changes with parallel routes
          </a>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
