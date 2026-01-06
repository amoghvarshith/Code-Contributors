import Nav from "@/components/ui/Nav";
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <div className="Home">
        <Nav/>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl">
            <h1 className="text-center font-medium ">Open Source Contribution, Start with Confidence</h1>
            <div className=" flex justify-center gap-6 m-8">
                <Button variant='secondary' className=" rounded-full ">Get Started</Button>
                <Button  className="rounded-full">Tech Docs <MoveRight/> </Button>
            </div> 
        </div>
    </div>
  )
}
