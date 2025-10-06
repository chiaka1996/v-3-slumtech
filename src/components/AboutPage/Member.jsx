import Image from "next/image"

const Member = ({title, classname, img}) => {
    return (
    <div className="w-[167px] sm:w-[200px] h-full space-y-[15px] block">
        <div className="w-full h-[80px] sm:h-[171px] px-[48px] py-[16px] rounded-[16px] bg-[#F5F5F5] border border-[#F5F5F5] flex justify-center items-center">
            <div className={`${classname} relative`}>
             <Image src={img} fill alt="slum tech member" className="object-cover" />
            </div>      
        </div>
        <div className="font-[500] text-[14px] sm:text-[16px] leading-[144%] text-[#06192F] bg-[#00069] text-center">{title}</div>
    </div>
    )
}

export default Member;