import { Speaker } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[url('/assets/hero-bg-pattern.png')] w-full lg:py-20 lg:px-20 md:px-7 px-2 xl:px-0 bg-cover bg-center">
    <section className="max-w-[1282px] mx-auto flex items-center justify-between flex-row max-[1204px]:flex-col max-[1204px]:gap-7">
        <div className="w-[597px] space-y-[32px] max-[1204px]:w-full max-[1204px]:flex max-[1204px]:flex-col max-[1204px]:items-center">
          <div className="space-y-[20px] max-[1204px]:flex max-[1204px]:flex-col max-[1204px]:items-center">
            <div className="space-y-4 max-[1204px]:flex max-[1204px]:flex-col max-[1204px]:items-center">
              <div className="border border-[#F491C3] bg-[#FDE7F2] text-[#A50B58] w-fit flex items-center gap-2 py-[10px] px-4 rounded-[10px]">
                <Speaker />
                <p className="text-sm">Recognized for global impact</p>
              </div>
              <p className="text-green italic text-[20px] max-[726px]:text-sm">501 (c)(3) Charity Organization EIN 99-1690760</p>
            </div>
              <h2 className="text-6xl max-[726px]:text-[25px] text-black max-[1204px]:text-center">Turning Slums into Centers of Hope, Innovation, and Opportunity</h2>
          </div>
         
          <p className="text-[20px] max-[726px]:text-sm text-black max-w-[480px] max-[1204px]:w-full max-[1204px]:text-center">At SlumTech Foundation, we use technology, education, and compassion to break the cycle of poverty and create pathways to possibility.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#mission" className="max-[434px]:w-full max-[434px]:text-center bg-green hover:bg-white hover:text-green rounded-xl font-semibold py-4 px-6 text-white">
              Join the Mission
            </Link>
            <Link href="/#donate" className="max-[434px]:w-full max-[434px]:text-center border-[1.5px] border-green hover:bg-green hover:text-white text-green rounded-xl font-semibold py-4 px-6">
              Supports a Child Today
            </Link>
          </div>
        </div>
        <div className="relative w-[613px] max-[726px]:w-full h-[702px] max-[726px]:h-[600px] max-[502px]:h-[500px] max-[376px]:h-[304px]">
          <Image src="/assets/hero-image.png" alt="Hero Image" fill />
        </div>
      </section>
      </section>
  )
}

export default Hero