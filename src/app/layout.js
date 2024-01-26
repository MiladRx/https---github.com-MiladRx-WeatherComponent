"use client"

import "./globals.css"
import Link from "next/link"

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <header>
         
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
