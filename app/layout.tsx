import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ruedatec',
  description: 'ruedatecs website',
  generator: 'david',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
