import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="border-b bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
        <Link href="/" className="font-bold text-xl">
          AI Tools
        </Link>
        <Link href="/tools" className="text-gray-600 dark:text-gray-300">
          Browse Tools
        </Link>
      </div>
    </nav>
  )
}
