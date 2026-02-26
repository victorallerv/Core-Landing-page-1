import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter_Tight } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { MagneticCursor } from "@/components/ui/magnetic-cursor"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
})

export const metadata: Metadata = {
  title: "CORE | Biohacking as a Service",
  description: "Rendimiento cognitivo dinamico. CORE conecta tus datos de sueno y carga laboral para decirte exactamente que nutrientes necesita tu cerebro cada manana.",
  keywords: ["biohacking", "nootropicos", "rendimiento cognitivo", "suplementos", "high performance", "CORE"],
  authors: [{ name: "CORE Performance" }],
  openGraph: {
    title: "CORE | Biohacking as a Service",
    description: "Sincroniza tu biologia con tu agenda. Rendimiento cognitivo dinamico para High Performers.",
    type: "website",
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#faf9f6",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.className} font-sans antialiased`}>
        <MagneticCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
