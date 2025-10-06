import Image from "next/image"

const OurPartner = () => {
    // const OURPARTNER = [
    //     "paypal",
    //     "canva",
    //     "meta",
    //     "adobe",
    //     "delarex",
    //     "google",
    //     "goodstack",
    //     "openai",
    //     "gofundme",
    //     "good-360"
    // ]
  return (
    <section className="w-full lg:px-20 md:px-7 px-2 xl:px-0" id="partner" >
    <section className="max-w-[1282px] mx-auto flex flex-col items-center max-[542px]:items-start">
        <h2 className="text-[48px] max-[542px]:text-[24px] max-[542px]:w-[200px] font-medium">Our Collaborative Partnerships</h2>

        <div className="grid grid-cols-5 max-[1146px]:grid-cols-4 max-[903px]:grid-cols-3 max-[611px]:grid-cols-2 max-[611px]:w-full max-[430px]:grid-cols-1 gap-4">
            <div className="bg-[#F5F5F5] border-[#E9EAEB] rounded-[16px] p-12">
                <Image src="/assets/paypal.png" alt="paypal" width={150} height={40} />
            </div>
            <div className="bg-[#F5F5F5] border-[#E9EAEB] rounded-[16px] p-12">
                <Image src="/assets/canva.png" alt="canva" width={119} height={38} />
            </div>
            <div className="bg-[#F5F5F5] border-[#E9EAEB] rounded-[16px] p-12">
                <Image src="/assets/meta.png" alt="meta" width={178} height={36} />
            </div>
            <div className="bg-[#F5F5F5] border-[#E9EAEB] rounded-[16px] p-12">
                <Image src="/assets/adobe.png" alt="adobe" width={139} height={36} />
            </div>
            <div className="bg-[#F5F5F5] border-[#E9EAEB] rounded-[16px] p-12">
                <Image src="/assets/delarex.png" alt="delarex" width={60} height={60} className="w-fit m-auto h-full" />
            </div>
            <div className="bg-[#F5F5F5] border-[#E9EAEB] rounded-[16px] p-12">
                <Image src="/assets/google.png" alt="google" width={200} height={38} />
            </div>
            <div className="bg-[#F5F5F5] border-[#E9EAEB] rounded-[16px] p-12">
                <Image src="/assets/goodstack.png" alt="goodstack" width={204} height={36} />
            </div>
            <div className="bg-[#F5F5F5] border-[#E9EAEB] rounded-[16px] p-12">
                <Image src="/assets/openai.png" alt="openai" width={147} height={40} />
            </div>
            <div className="bg-[#F5F5F5] border-[#E9EAEB] rounded-[16px] p-12">
                <Image src="/assets/gofundme.png" alt="gofundme" width={115} height={40} />
            </div>
            <div className="bg-[#F5F5F5] border-[#E9EAEB] rounded-[16px] p-12">
                <Image src="/assets/good-360.png" alt="good 360" width={154} height={40} />
            </div>
        </div>
        </section>
    </section>
  )
}

export default OurPartner