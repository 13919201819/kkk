"use client";

import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";

interface BusinessImpact {
  metric: string;
  description: string;
}

interface Solution {
  slug: string;
  title: string;
  description: string;
  bulletPoints: string[];
  keywords: string[];
  businessImpact: BusinessImpact[];
}

interface ServiceDetail {
  backToServices: string;
  businessImpactTitle: string;
  keyFeaturesTitle: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  solutions: Solution[];
}

const iconMap: { [key: string]: string } = {
  "agentic-ai": "🤖",
  "data-analytics-ml": "📊",
  "workflow-automation": "⚙️",
  "generative-ai-development": "⚡",
  "mcp-ai-orchestration": "🔄",
  "ui-ux-design": "🎨",
  "fine-tuned-llm": "🧠",
  "data-security": "🔒",
  "enterprise-web-dev": "🌐",
  "voice-agents": "🎤",
};

const validSlugs = [
  "agentic-ai",
  "data-analytics-ml",
  "data-security",
  "enterprise-web-dev",
  "fine-tuned-llm",
  "generative-ai-development",
  "mcp-ai-orchestration",
  "ui-ux-design",
  "voice-agents",
  "workflow-automation",
];

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsLoading(false);
    }
  }, [i18n.isInitialized]);

  // Validate slug
  if (!slug || !validSlugs.includes(slug)) {
    notFound();
  }

  if (isLoading) {
    return (
      <div className="min-h-screen w-full relative bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  const serviceDetail = t("serviceDetail", { returnObjects: true }) as ServiceDetail;
  const solution = serviceDetail.solutions.find((s) => s.slug === slug);

  if (!solution) {
    return (
      <div className="min-h-screen w-full relative bg-black flex items-center justify-center">
        <div className="text-white">Service not found</div>
      </div>
    );
  }

  const icon = iconMap[slug] || "🔧";

  return (
    <div className="min-h-screen w-full relative bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
        }}
      />

      <div className="relative z-10 pt-20 md:pt-24 lg:pt-28">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <Link
            href="/services"
            className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            {serviceDetail.backToServices}
          </Link>

          <div className="mb-20 text-center">
            <div className="mb-8">
              <div className="text-6xl mb-6">{icon}</div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{solution.title}</h1>
            </div>
            <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">{solution.description}</p>
          </div>

          <div className="mb-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-12">{serviceDetail.businessImpactTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {solution.businessImpact.map((impact, idx) => (
                <div
                  key={idx}
                  className="relative bg-white/[0.02] rounded-3xl p-16 backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.08] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] min-h-[300px] flex flex-col justify-center"
                >
                  <div
                    className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60px] z-0"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)",
                    }}
                  />
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight">{impact.metric}</h3>
                    <p className="text-white/80 leading-relaxed text-base md:text-lg">{impact.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20 text-center">
            <h2 className="text-2xl font-bold text-white mb-12">{serviceDetail.keyFeaturesTitle}</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {solution.bulletPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="relative bg-white/[0.02] rounded-3xl p-12 backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.08] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] min-h-[140px] flex items-center justify-center"
                >
                  <div
                    className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60px] z-0"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)",
                    }}
                  />
                  <p className="text-white/90 relative z-10 text-center text-lg leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20 text-center">
            <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
              {solution.keywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="px-8 py-4 bg-white/[0.05] rounded-full text-white/70 text-base border border-white/[0.1] backdrop-blur-sm hover:bg-white/[0.08] transition-colors"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="relative bg-white/[0.02] rounded-3xl p-16 backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.08] overflow-hidden text-center max-w-7xl mx-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <div
              className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60%] z-0"
              style={{
                background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)",
              }}
            />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{serviceDetail.ctaTitle}</h3>
              <div className="mb-10">
                <p className="text-xl text-white/80 leading-relaxed">
                  {serviceDetail.ctaDescription.replace('{service}', solution.title.toLowerCase())}
                </p>
              </div>
              <div className="flex justify-center">
                <a href="/contact" className="inline-block">
                  <Button text={serviceDetail.ctaButton} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}