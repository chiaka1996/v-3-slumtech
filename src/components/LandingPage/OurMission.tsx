import Image from "next/image"

const OurMission = () => {
  return (
    <section className="lg:px-20 md:px-7 px-2 xl:px-0" id="mission">
    <section className="max-w-[1282px] mx-auto text-black flex flex-row max-[1210px]:flex-col max-[1210px]:gap-5 justify-between max-[852px]:items-start items-center">
        <div className="space-y-[32px] max-[726px]:space-y-[12px] w-[430px] max-[1210px]:w-[700px] max-[744px]:w-full">     
            <h2 className="text-[48px] max-[726px]:text-[24px] font-medium max-[1210px]:text-center max-[852px]:text-start">Our Mission</h2>
            <p className="flex flex-col gap-[32px] max-[726px]:gap-[14px] max-[726px]:text-sm max-[1210px]:text-center max-[852px]:text-start">
                <span>At SlumTech Foundation, we believe that poverty should not define a child&apos;s future. Talent and potential are everywhere, but access to opportunity is not. Our mission is simple yet powerful:</span>
                <span>To bridge the gap between poverty and possibility by bringing technology, education, and sustainable solutions to underserved communities worldwide.</span>
                <span>Through our work, we aim to educate, empower, energize, and elevate children, youth, and families in slums and underserved neighbourhoods across Africa, United States, North America, Europe, and Asia.</span>
            </p>
        </div>
        <Image src="/assets/mission.png" alt="Mission" className="max-[1210px]:w-full" width={602} height={582} />
    </section>
    </section>
  )
}

export default OurMission