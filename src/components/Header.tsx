import Divider from "@/components/ui/Divider";

export default function Header() {
    return (
      <div className="bg-black">
            <div className="flex flex-col gap-3 py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-left leading-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">OpenSource Compass</h1>
              <p className="text-[10px] sm:text-[11px] md:text-[12px] font-mono tracking-widest text-white">INTELLIGENT PROJECT RECOMMENDATION SYSTEM</p>
            </div>
            <Divider className="" />
      </div>
    )
}