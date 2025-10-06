import Image from "next/image"
const WhatWeDo = () => {
  return (
    <section className="px-2 md:px-7 lg:px-20 xl:px-0" id="program">
    <section className="max-w-[1282px] mx-auto text-black space-y-[48px] max-[726px]:space-y-5">
        <div className="space-y-[12px]">
            <h2 className="text-5xl  max-[726px]:text-[24px] font-medium">What We Do</h2>
            <p className="text-[20px] max-[726px]:text-sm">We focus on four pillars that unlock possibility and dignity for every child and family.</p>
        </div>
        <div className="grid grid-cols-2 max-[1100px]:grid-cols-1 gap-4 w-full">
            <div className="w-full h-[200px] bg-[#B1E6F2] relative rounded-[16px] text-black">
                <div className="space-y-[20px] max-w-[359px] z-10 absolute left-6 top-6 max-[726px]:left-3 max-[726px]:top-3 max-[726px]:space-y-[10px]">
                    <h3 className="text-[28px] font-medium">Educate</h3>
                    <p className="max-[726px]:text-sm">We provide free school fees, build STEM labs, and deliver digital literacy programs so no child is left behind.</p>
                </div>

                <Image className="absolute right-4 min-[726px]:top-0 max-[1230px]:right-0 max-[726px]:bottom-0 bottom-0 min-[726px]:my-auto max-[603px]:w-[100px] max-[603px]:h-[100px] z-[5]" src="/assets/graduation-hat.png" alt="Graduation Hat" width={164} height={164} />
                <div className="absolute w-full h-full top-0 bg-[url('/assets/wavy-texture.png')] bg-cover bg-center"> </div>
            </div>

            <div className="w-full h-[200px] bg-[#FEE7B8] relative rounded-[16px] text-black">
                <div className="space-y-[20px] max-w-[359px] z-10 absolute left-6 top-6 max-[726px]:left-3 max-[726px]:top-3 max-[726px]:space-y-[10px]">
                    <h3 className="text-[28px] font-medium">Empower</h3>
                    <p className="max-[726px]:text-sm">We equip youth and women with entrepreneurship training, coding bootcamps, and mentorship — unlocking self-reliance and leadership.</p>
                </div>

                <Image className="absolute right-4 bottom-0 max-[603px]:w-[100px] max-[603px]:h-[100px] z-[5]" src="/assets/fly.png" alt="Graduation Hat" width={248} height={248} />
                <div className="absolute w-full h-full top-0 bg-[url('/assets/wavy-texture.png')] bg-cover bg-center"> </div>
            </div>

            <div className="w-full h-[200px] bg-[#F8B5D6] relative rounded-[16px] text-black">
                <div className="space-y-[20px] max-w-[359px] z-10 absolute left-6 top-6 max-[726px]:left-3 max-[726px]:top-3 max-[726px]:space-y-[10px]">
                    <h3 className="text-[28px] font-medium">Energize</h3>
                    <p className="max-[726px]:text-sm">We light up schools and communities with renewable energy, ensuring children can learn, dream, and achieve — even after sunset.</p>
                </div>

                <Image className="absolute right-4 bottom-0 max-[603px]:w-[100px] max-[603px]:h-[100px] z-[5]" src="/assets/energize.png" alt="Graduation Hat" width={184} height={257} />
                <div className="absolute w-full h-full top-0 bg-[url('/assets/wavy-texture.png')] bg-cover bg-center"> </div>
            </div>

            <div className="w-full h-[200px] bg-[#B5F0DA] relative rounded-[16px] text-black">
                <div className="space-y-[20px] max-w-[359px] z-10 absolute left-6 top-6 max-[726px]:left-3 max-[726px]:top-3 max-[726px]:space-y-[10px]">
                    <h3 className="text-[28px] font-medium">Elevate</h3>
                    <p className="max-[726px]:text-sm">Through technology, AI, and global partnerships, we connect communities to opportunities, breaking cycles of exclusion and creating cycles of possibility.</p>
                </div>

                <Image className="absolute right-4 bottom-0 max-[603px]:w-[100px] max-[603px]:h-[100px] z-[5]" src="/assets/elevate.png" alt="Graduation Hat" width={163} height={204} />
                <div className="absolute w-full h-full top-0 bg-[url('/assets/wavy-texture.png')] bg-cover bg-center"> </div>
            </div>
        </div>
    </section>
    </section>
  )
}

export default WhatWeDo