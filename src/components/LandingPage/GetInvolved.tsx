import { InfoIcon } from "@/utils/icons"
import Image from "next/image"

const GetInvolved = () => {
    const DONATIONS = [
        {
            title: "Custom Donation",
            amount: "Custom",
            content: "Enter Custom amount of your choice!",
        },
        {
            title: "School Support",
            amount: "$200",
            content: "Covers a child's school fees for a semester",
        },
        {
            title: "Digital Learning",
            amount: "$250",
            content: "Provides digital literacy training to a student",
        },
        {
            title: "Power a Classroom",
            amount: "$1,500",
            content: "Brings renewable energy to a classroom",
        },
        {
            title: "School Support",
            amount: "$7000",
            content: "Build STEM Lab",
        }
    ]
  return (
    <section className="lg:px-20 md:px-7 px-2 xl:px-0 w-full" id="donate">
    <section className="max-w-[1282px] mx-auto flex flex-col gap-[48px] items-center">
        <div className="text-black w-full flex flex-col items-center max-[542px]:items-start max-w-[835px] gap-[32px]">
            <h2 className="text-[48px] max-[542px]:text-[24px] font-medium">Get Involved</h2>
            <p className="text-[20px] max-[542px]:text-[16px] text-center max-[542px]:text-start">Your contribution directly impacts children and communities, creating lasting change through education, technology, and opportunity. Your $10 $20 $50 + is of great impact to our mission and projects across the globe</p>
        </div>
        <div className="grid grid-cols-5 max-[1211px]:grid-cols-4 max-[831px]:grid-cols-3 max-[652px]:grid-cols-2 max-[467px]:grid-cols-1 max-[542px]:w-full gap-4">
            {
                DONATIONS.map((donate, i)=> (
                    <div key={i} className="border border-[#E9EAEB] bg-[#FFFFFF] w-full h-[324px] flex flex-col justify-between p-4 rounded-[16px]">
                        <div>
                            <h3 className="font-semibold text-[#535862]">{donate.title}</h3>
                            <p className="text-[#181D27] font-semibold text-[48px]">{donate.amount}</p>
                            <p className="leading-[24px]">{donate.content}</p>
                        </div>
                        <button className="border border-green text-green font-semibold rounded-xl py-4 cursor-pointer hover:bg-green hover:text-white">Donate {donate.amount === "Custom" ? "" : donate.amount}</button>
                    </div>
                ))
            }
        </div>
        <div className="border border-[#F491C3] bg-[#FDE7F2] text-[#A50B58] w-fit flex items-center gap-2 py-[10px] px-4 rounded-[10px]">
          <InfoIcon />
          <p className="text-sm">We accept STEM material donations like Laptops, Desktops etc</p>
        </div>
        <div className="flex gap-2">
            <Image src="/assets/visa.png" alt="Visa" width={58} height={40} />
            <Image src="/assets/masterclass.png" alt="Visa" width={58} height={40} />
            <Image src="/assets/amex.png" alt="Visa" width={58} height={40} />
            <Image src="/assets/paypalIcon.png" alt="Visa" width={58} height={40} />
        </div>
    </section>
    </section>
  )
}

export default GetInvolved