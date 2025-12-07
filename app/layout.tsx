import type { Metadata } from 'next'
import { AppProvider } from '@/lib/context'
import './globals.css'

export const metadata: Metadata = {
  title: 'Open WebUI',
  description: 'Open WebUI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
