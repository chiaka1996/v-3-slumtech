import { CheckIcon } from "@/utils/icons"

const OurImpact = () => {

    const IMPACT = [
        "Thousands of children supported through free school fees annually",
        "Renewable energy solutions installed in underserved schools",
        "Women and youth trained with future-ready skills",
        "Recognized by global leaders and U.S. officials for outstanding community impact"
    ]
  return (
    <section className=" pb-5 lg:px-20 md:px-7 px-2 xl:px-0" id="impact">
    <section className="max-w-[1282px] mx-auto lg:p-10 md:p-7 p-2  bg-[#FEE7B8] rounded-2xl flex gap-[16px] flex-row max-[1301px]:flex-col">
        <div className="space-y-[32px] max-[542px]:space-y-[20px] w-[636px] max-[701px]:w-full p-5 max-[542px]:p-4">
            <h2 className="text-[48px] max-[542px]:text-[24px] font-medium text-black">Our Impact</h2>
            <p className="text-[24px] max-[542px]:text-[16px] text-[#252B37]">We measure progress by lives transformed and opportunities created.</p>
            <div className="space-y-[12px]">
                {
                    IMPACT.map((i, index)=> (
                        <div key={index} className="flex gap-[10px]">
                            <div className="w-[22px] h-[22px]">
                                <CheckIcon />
                            </div>
                            <p className="max-[400px]:text-sm">{i}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="text-[#252B37] grid grid-cols-2 max-[542px]:flex max-[542px]:flex-col gap-4">
            <div className="bg-[#FFF7E8] rounded-2xl p-6 w-full">
                <h4 className="text-[44px] font-medium">5000+</h4>
                <p className="text-[21px]">children supported annually</p>

                {/* <div className="absolute z-10 w-full h-full top-0 bg-[url('/assets/wavy-texture.png')] bg-cover bg-center"> </div> */}
            </div>
            <div className="bg-[#FFF7E8] rounded-2xl p-6 w-full">
                <h4 className="text-[44px] font-medium">40+</h4>
                <p className="text-[21px]">Policy Reform Impact</p>
            </div>
            <div className="bg-[#FFF7E8] rounded-2xl p-6 w-full col-span-2">
                <h4 className="text-[44px] font-medium">1000+</h4>
                <p className="text-[21px]">Reduced Violations</p>
            </div>
        </div>
    </section>
    </section>
  )
}

export default OurImpact