import "./globals.css"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "AI Tools Directory",
  description: "A directory of popular AI tools"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  )
}
