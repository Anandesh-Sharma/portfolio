import "@/styles/globals.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Anandesh S. - Software Engineer",
  description: "Portfolio of Anandesh S., a software engineer specializing in enterprise architecture and modern web technologies",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

