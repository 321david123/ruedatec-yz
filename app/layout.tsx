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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YQ9964FP7G"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YQ9964FP7G');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
