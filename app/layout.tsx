import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Watermark from '@/components/Watermark'
import Background3D from '@/components/Background3D'

export const metadata: Metadata = {
  title: 'Aiana Builders - Real Estate Consultants in Faridabad',
  description: 'Aiana Builders - Reputed Real estate consultant in Faridabad. Serving clients since 1990 with property sale, purchase, and renting services in Faridabad and NCR.',
  keywords: 'real estate, property, faridabad, NCR, property sale, property rent, property purchase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Background3D />
        <Watermark />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

