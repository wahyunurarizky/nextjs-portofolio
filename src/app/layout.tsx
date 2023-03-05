import Head from 'next/head'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wahyu Nur Arizky',
  description: 'Wahyu nur arizky portfolio',
  authors: {
    name: 'wahyu nur arizky',
    url: 'https://wahyunurarizky.github.io',
  },
  applicationName: 'Wahyu Nur Arizky Portfolio',
  icons: '/favicon.ico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
