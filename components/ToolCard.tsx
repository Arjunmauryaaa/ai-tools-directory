import Link from "next/link"
import { Tool } from "@/data/tools"

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="block border rounded p-4 hover:shadow transition bg-white dark:bg-gray-800"
    >
      <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
      <p className="text-sm text-gray-500">{tool.category}</p>
      <p className="mt-2 text-sm">{tool.pricing}</p>
    </Link>
  )
}
