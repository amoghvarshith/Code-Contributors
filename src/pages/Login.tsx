import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Divider from "@/components/ui/Divider";
import  Github  from "../icons/github.svg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function Login() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <Divider className="my-10"/>
      <div className="flex-1 flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 min-h-[400px]">
      <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto text-center py-4 sm:py-6 md:py-8 lg:py-10">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Sign Up with GitHub</CardTitle>
          <CardDescription className="text-sm sm:text-md md:text-lg font-inter">join the developer community finding there next impact.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] py-4 sm:py-5 md:py-6 lg:py-7 font-mono font-bold text-sm sm:text-base md:text-lg lg:text-xl">
            <img src={Github} alt="" className="w-5 h-5" />
            Continue with GitHub
          </Button>
          <CardDescription className="text-xs sm:text-sm md:text-md my-4 sm:my-6 md:my-8 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto font-inter">Connect with your github account and analyze your contribution history, skills, and interests we use this data to find perfect open source project for you.</CardDescription>
        </CardContent>
        <Divider className="w-full mx-auto"/>
        <CardFooter className="flex justify-center">
          <CardDescription className="font-mono text-xs sm:text-sm">By signing up, you agree to our Terms of Service and Privacy Policy.</CardDescription>
        </CardFooter>
      </Card>
      </div>
      <Footer />
    </div>
  )
}
