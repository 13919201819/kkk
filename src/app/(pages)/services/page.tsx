"use client";

// import SolutionCard from "@/components/SolutionCard";
import SolutionCard from "@/features/solutions/SolutionCard";
// import { solutions } from "@/data/solutionsData";
import { solutions } from "@/features/solutions/solutionData";

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Indigo Cosmos Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
        }}
      />
    
      {/* Content with proper spacing from header */}
      <div className="relative z-10 pt-20 md:pt-24 lg:pt-28">
        <section className="py-16 px-8 bg-transparent">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-white">
            Our Complete Range of Services
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {solutions.map((sol, idx) => (
              <SolutionCard
                key={idx}
                title={sol.title}
                description={sol.description}
                bulletPoints={sol.bulletPoints}
                icon={sol.icon}
                index={idx}
                variant="services"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}