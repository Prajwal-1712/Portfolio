import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prajwal Pawar ',
  description: 'Portfolio of Prajwal Pawar, a full stack developer and backend engineer building scalable digital experiences.',
  openGraph: {
    title: 'Prajwal Pawar — Full Stack Developer',
    description: 'Backend systems, full stack products and thoughtful digital experiences.',
    type: 'website',
    images: ['/profile-prajwal.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prajwal Pawar — Full Stack Developer',
    description: 'Backend systems, full stack products and thoughtful digital experiences.',
    images: ['/profile-prajwal.png'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon-dark-32x32.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
