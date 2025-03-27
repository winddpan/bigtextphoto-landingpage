import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "大字照片 - 文字与图像的创意工坊",
  description:
    "大字照片，一款专为文字与图像融合而生的创意编辑利器。让文字为你的照片注入灵魂，轻松将你的想法、情感和故事，优雅地呈现在方寸之间。",
  appleWebApp: {
    title: "大字照片",
    statusBarStyle: "black-translucent",
  },
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'