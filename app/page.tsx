import Link from "next/link"

export default function HomePage() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-4">
        AI Tools Directory
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Discover useful AI tools for productivity, design, and development.
      </p>

      <Link
        href="/tools"
        className="inline-block bg-black text-white px-6 py-3 rounded"
      >
        Explore Tools
      </Link>
    </section>
  )
}
