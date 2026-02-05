import { tools } from "@/data/tools"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function ToolDetailPage({ params }: Props) {
  const { slug } = await params

  const tool = tools.find(t => t.slug === slug)

  if (!tool) {
    notFound()
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>

      <p className="text-gray-500 mb-2">
        Category: {tool.category}
      </p>

      <p className="mb-4">
        Pricing: {tool.pricing}
      </p>

      <p className="mb-6">
        {tool.description}
      </p>

      <a
        href={tool.website}
        target="_blank"
        className="text-blue-600 underline"
      >
        Visit Website
      </a>
    </div>
  )
}
