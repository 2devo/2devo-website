import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "2devo Digital - Your Partner in Digital Growth",
  description:
    "Dijital dünyada markanızı büyütmek için ihtiyacınız olan tüm hizmetleri tek çatı altında sunuyoruz. Reklam yönetimi, sosyal medya, tasarım ve web çözümleri.",
  keywords: "dijital pazarlama, reklam yönetimi, sosyal medya, web tasarım, Sakarya",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
