import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Custom Badge Component
const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${className}`}>
    {children}
  </span>
);

// Custom Progress Component
const Progress = ({ value, className }: { value: number; className?: string }) => (
  <div className={`w-full bg-gray-700 rounded-full h-2 ${className}`}>
    <div 
      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
      style={{ width: `${value}%` }}
    />
  </div>
);

// Custom Separator Component
const Separator = ({ className }: { className?: string }) => (
  <div className={`h-px bg-gray-700 ${className}`} />
);

export default function IndProject() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400">
          <span>RECOMMENDED PROJECTS</span>
          <span>/</span>
          <span className="text-white">REACT-NATIVE-SKIA</span>
        </nav>

        {/* Project Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">react-native-skia</h1>
            <p className="text-gray-300 max-w-3xl">
              React Native Skia is a high-performance 2D graphics library for React Native. 
              It provides a declarative API for drawing shapes, images, and text on a canvas, 
              enabling complex visualizations and animations.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-blue-600 text-white px-3 py-1">94% MATCH</Badge>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700 px-6 py-2">
            START CONTRIBUTING
          </Button>
          <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-6 py-2">
            STAR
          </Button>
          <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-6 py-2">
            FORK
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Why It Matches You */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-white">Why it matches you</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Your expertise in TypeScript and graphics rendering aligns perfectly with this project. 
                  The maintainers are looking for contributors who understand both React Native and 
                  performance optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-800 text-gray-300">#Graphics</Badge>
                  <Badge className="bg-gray-800 text-gray-300">#C++</Badge>
                  <Badge className="bg-gray-800 text-gray-300">#Performance</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Curated Issues for You */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-white">Curated Issues for You</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                
                {/* Easy Issues */}
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Easy</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div>
                        <p className="text-white font-medium">Fix animation interpolation</p>
                        <p className="text-gray-400 text-sm">~2 hours</p>
                      </div>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        CLAIM & OPEN
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div>
                        <p className="text-white font-medium">Update documentation</p>
                        <p className="text-gray-400 text-sm">~1 hour</p>
                      </div>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        CLAIM & OPEN
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Medium Issues */}
                <div>
                  <h4 className="text-yellow-400 font-semibold mb-3">Medium</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div>
                        <p className="text-white font-medium">Implement gradient support</p>
                        <p className="text-gray-400 text-sm">~6 hours</p>
                      </div>
                      <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                        CLAIM & OPEN
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Hard Issues */}
                <div>
                  <h4 className="text-red-400 font-semibold mb-3">Hard</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div>
                        <p className="text-white font-medium">Optimize rendering pipeline</p>
                        <p className="text-gray-400 text-sm">~12 hours</p>
                      </div>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        CLAIM & OPEN
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contribution Roadmap */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-white">Contribution Roadmap</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="text-green-400 font-semibold">LEVEL 1: ENTRY POINT</h4>
                      <p className="text-gray-300">Good First Issues</p>
                      <p className="text-gray-400 text-sm mt-1">
                        Start with documentation updates and simple bug fixes to understand the codebase.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="text-yellow-400 font-semibold">LEVEL 2: FEATURE REQUESTS</h4>
                      <p className="text-gray-300">Expand Functionality</p>
                      <p className="text-gray-400 text-sm mt-1">
                        Implement new features and improve existing functionality.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="text-red-400 font-semibold">LEVEL 3: CORE ARCHITECTURE</h4>
                      <p className="text-gray-300">Deep Dive</p>
                      <p className="text-gray-400 text-sm mt-1">
                        Work on core rendering engine and performance optimizations.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Links */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
                  Setup Guide
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
                  Code of Conduct
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
                  Join Discord
                </Button>
              </CardContent>
            </Card>

            {/* Maintainer Health */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">Maintainer Health</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">AVG. PR REVIEW</span>
                  <span className="text-white font-mono">2 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">ACCEPTANCE RATE</span>
                  <span className="text-white font-mono">85%</span>
                </div>
                <Separator className="bg-gray-700" />
                <div>
                  <p className="text-gray-300 text-sm mb-2">ACTIVE MENTORS</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">William C.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Christian F.</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Stack */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">Technical Stack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 text-sm">TYPESCRIPT</span>
                      <span className="text-white text-sm font-mono">45%</span>
                    </div>
                    <Progress value={45} className="bg-gray-700" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 text-sm">C++ / JSI</span>
                      <span className="text-white text-sm font-mono">35%</span>
                    </div>
                    <Progress value={35} className="bg-gray-700" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 text-sm">SKIA ENGINE</span>
                      <span className="text-white text-sm font-mono">20%</span>
                    </div>
                    <Progress value={20} className="bg-gray-700" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge className="bg-gray-800 text-gray-300 text-xs">React Native</Badge>
                  <Badge className="bg-gray-800 text-gray-300 text-xs">WebAssembly</Badge>
                  <Badge className="bg-gray-800 text-gray-300 text-xs">ShSL</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}