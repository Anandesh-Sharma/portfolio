import "@/styles/globals.css"

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
      <body className="antialiased">{children}</body>
    </html>
  )
}



import './globals.css'