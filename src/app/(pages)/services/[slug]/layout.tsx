export async function generateStaticParams() {
  return [
    { slug: "agentic-ai" },
    { slug: "data-analytics-ml" },
    { slug: "data-security" },
    { slug: "enterprise-web-dev" },
    { slug: "fine-tuned-llm" },
    { slug: "generative-ai-development" },
    { slug: "mcp-ai-orchestration" },
    { slug: "ui-ux-design" },
    { slug: "voice-agents" },
    { slug: "workflow-automation" },
  ];
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}