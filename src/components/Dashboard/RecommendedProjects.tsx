import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Static data for now - will be dynamic from backend later
const recommendedProjects = [
  {
    id: 1,
    title: "React Admin Dashboard",
    organization: "TechCorp",
    stars: 1234,
    issues: 45,
    description: "A modern, responsive admin dashboard built with React and TypeScript. Features real-time data updates and customizable widgets.",
    tags: ["React", "TypeScript", "Dashboard", "UI/UX"],
    suggestedContributions: "Frontend Development",
    matchPercentage: 92
  },
  {
    id: 2,
    title: "Machine Learning Pipeline",
    organization: "DataLab",
    stars: 892,
    issues: 23,
    description: "Scalable ML pipeline for data processing and model training. Supports multiple algorithms and distributed computing.",
    tags: ["Python", "TensorFlow", "ML", "Data Science"],
    suggestedContributions: "Algorithm Optimization",
    matchPercentage: 87
  },
  {
    id: 3,
    title: "Open Source API Gateway",
    organization: "DevTools Inc",
    stars: 2156,
    issues: 67,
    description: "High-performance API gateway with rate limiting, authentication, and monitoring capabilities.",
    tags: ["Go", "API", "Microservices", "DevOps"],
    suggestedContributions: "Performance Enhancement",
    matchPercentage: 78
  }
];

export default function RecommendedProjects() {
  return (
    <section className=" bg-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Recommended Projects</h2>
          <p className="text-gray-400">Based on your GitHub profile and contributions</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedProjects.map((project) => (
            <Card key={project.id} className="bg-gray-900 border-gray-800 relative">
              {/* Match Percentage Badge */}
              <div className="absolute top-4 right-4 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold">
                {project.matchPercentage}%
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-white pr-16">{project.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
                  <span>{project.organization}</span>
                  <span>•</span>
                  <span>⭐ {project.stars}</span>
                  <span>•</span>
                  <span>🔧 {project.issues} issues</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Suggested Contributions */}
                <div className="border-t border-gray-800 pt-4">
                  <p className="text-sm text-gray-400 mb-2">
                    <span className="font-semibold text-white">Suggested Contribution:</span> {project.suggestedContributions}
                  </p>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-mono">
                  VIEW PROJECT
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
