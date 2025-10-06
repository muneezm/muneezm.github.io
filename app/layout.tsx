import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Muneez Moidu | Cybersecurity Analyst & SIEM Expert",
  description:
    "Dubai-based Cybersecurity Analyst specializing in SIEM management, threat detection, and penetration testing. Currently at The Fifth Element.",
  keywords: [
    "cybersecurity analyst",
    "SIEM expert",
    "penetration testing",
    "Dubai cybersecurity",
    "threat detection",
    "CompTIA Security+",
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
