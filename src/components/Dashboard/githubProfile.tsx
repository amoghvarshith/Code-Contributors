import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GithubProfile() {
  return (
    <div className="bg-black p-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* GitHub Profile Section */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl text-white">GitHub Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Username Section */}
            <div>
              <label className="text-sm font-mono text-gray-400 uppercase tracking-wider">Username</label>
              <div className="mt-2 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white font-mono">
                octocat
              </div>
            </div>
            
            {/* Profile Stats Section */}
            <div>
              <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">Profile Stats</h3>
              <div className="flex flex-row gap-20">
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <span className="text-gray-300">Repositories:</span>
                  <span className="text-white font-mono">42</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <span className="text-gray-300">Contributions:</span>
                  <span className="text-white font-mono">1,247</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Followers</span>
                  <span className="text-white font-mono">156</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills & Interests Section */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Skills & Interests</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Primary Languages */}
            <div>
              <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">Primary Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "Python", "TypeScript", "Go", "Rust", "Java"].map((lang) => (
                  <span 
                    key={lang}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-mono"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Interest Areas */}
            <div>
              <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">Interest Areas</h3>
              <div className="flex flex-wrap gap-2">
                {["AI/ML", "Web Dev", "DevOps", "Security", "Blockchain"].map((area) => (
                  <span 
                    key={area}
                    className="px-3 py-1 bg-green-600 text-white text-sm rounded-full font-mono"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Discover Projects Button */}
            <div className="pt-4">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-mono py-3">
                DISCOVER PROJECTS
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}