import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'RuedaTec — La movilidad, reinventada',
    template: '%s · RuedaTec',
  },
  description:
    'Convertimos sillas de ruedas manuales en sistemas eléctricos, solares e inteligentes. Independencia real con energía limpia, hecho en México.',
  generator: 'david',
  keywords: [
    'silla de ruedas eléctrica',
    'energía solar',
    'movilidad',
    'inclusión',
    'accesibilidad',
    'RuedaTec',
  ],
  openGraph: {
    title: 'RuedaTec — La movilidad, reinventada',
    description:
      'Sistema modular que convierte cualquier silla de ruedas manual en eléctrica y solar. Ganadores de Invention Convention Americas 2023.',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`dark ${spaceGrotesk.variable} ${inter.variable}`}>
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
