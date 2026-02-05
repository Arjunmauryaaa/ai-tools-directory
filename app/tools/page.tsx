import { tools } from "@/data/tools"
import ToolCard from "@/components/ToolCard"

export const metadata = {
  title: "All AI Tools"
}

export default function ToolsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">All AI Tools</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {tools.map(tool => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </>
  )
}
