import '@/app/styles/application.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navigation from '@/app/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal Portfolio',
  description: 'My personal portfolio for my software projects, articles, and noteworthy events.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
