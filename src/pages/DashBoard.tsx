import Header from "@/components/Header"
import GithubProfile from "@/components/Dashboard/githubProfile"
import Footer from "@/components/Footer"
import RecommendedProjects from "@/components/Dashboard/RecommendedProjects"

export default function DashBoard() {
    return (
        <div className="min-h-screen bg-black flex flex-col">
            <Header />
            <div className="flex-5 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6">
                <GithubProfile />
            </div>
            <div className="flex-5 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6">
            <RecommendedProjects/>
            </div>
            <Footer />
        </div>
    )
}