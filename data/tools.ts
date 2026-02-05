export type Tool = {
  slug: string
  name: string
  category: string
  pricing: string
  description: string
  website: string
}

export const tools: Tool[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "Chatbot",
    pricing: "Free / Paid",
    description: "AI chatbot developed by OpenAI for conversations and content generation.",
    website: "https://chat.openai.com"
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    category: "Image Generation",
    pricing: "Paid",
    description: "AI tool that generates images from text prompts.",
    website: "https://www.midjourney.com"
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    category: "Productivity",
    pricing: "Paid",
    description: "AI assistant built into Notion for writing and brainstorming.",
    website: "https://www.notion.so"
  }
]
