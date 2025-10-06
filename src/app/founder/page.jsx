import Image from "next/image";
import Member from "../../components/AboutPage/Member";
import Generosity from "../../components/LandingPage/Generosity";
import Footer from "../../components/LandingPage/Footer";
import Link from "next/link";

const AboutPage = () => {
    return(
        <main>
        <main className="max-w-[1282px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[52px] md:pt-[72px] text-[#06192F]">
            <div className="space-y-[24px] text-center">
                <h1 className="font-[600] text-[42px] text-[#181D27] tracking-[-2%]">Our Founder</h1>
                <h5 className="text-[#535862] text-[20px]">Meet Olanrewaju Ogunleye</h5>
            </div>
             
             {/* banner image */}
             <div className="mt-[34px] md:mt-[57px] relative w-full h-[341px] md:h-[648px] rounded-[16px]">
            <Image src="https://res.cloudinary.com/chiaka/image/upload/v1759573865/Frame_37_o359d0.png" fill alt="tech foundation" className="object-cover object-center rounded-[16px]" />
             </div>

                {/* social media links */}
             <div className="mt-[34px] flex justify-center gap-x-[16px] items-end">
                <Link href="https://www.linkedin.com/in/olanrewaju-o-27400b1a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <div className="relative w-[24px] h-[24px] cursor-pointer">
                    <Image src="/icons/linkedin.png" fill alt="slumtech foundation linkedin" className="object-cover" />
                </div>
                </Link>
                <Link href="https://www.facebook.com/share/17DAy9i7XC/?mibextid=wwXIfr">
                <div className="relative w-[24px] h-[24px] cursor-pointer">
                    <Image src="/icons/facebook.png" fill alt="slumtech foundation linkedin" className="object-cover" />
                </div>
                </Link>
                <Link href="Instagram: https://www.instagram.com/iamolanrewajuogunleye?igsh=MW9uenJwcmx6OWtvdw%3D%3D&utm_source=qr">
                 <div className="relative w-[24px] h-[24px] cursor-pointer">
                    <Image src="/icons/instagram.png" fill alt="slumtech foundation linkedin" className="object-cover" />
                </div>
                </Link>
                <Link href="https://x.com/delarexone?s=11&t=HgFY3GVV5Pwv6N0cQBnBWQ">
                 <div className="relative w-[24px] h-[24px] cursor-pointer">
                    <Image src="/icons/x.png" fill alt="slumtech foundation linkedin" className="obect-cover" />
                </div>
                </Link>
                <Link href="Forbes: https://councils.forbes.com/profile/Olanrewaju-Ogunleye-Founder-%7C-C-E-O-Delarex-Technologies-Inc/e881e8cc-e356-4335-b643-f6ba554e4b98">
                 <div className="relative w-[69px] h-[17px] cursor-pointer">
                    <Image src="/icons/forbes.png" fill alt="slumtech foundation linkedin" className="object-cover" />
                </div>
                </Link>
             </div>

             <section className="mt-[32px] md:mt-[66px] max-w-[920px] mx-auto leading-[144%] tracking-0 text-[16px] sm:[18px] md:text-[20px] space-y-[32px]">
                <div>
                <p>
                The SlumTech Foundation was born from the vision of Olanrewaju Ogunleye, a tech entrepreneur and philanthropist who grew up believing that no child should be denied education because of poverty.
                </p>
                <p>Through his leadership, SlumTech has become more than a nonprofit — it is a movement to transform slums into centers of learning, innovation, and hope. His approach blends technology, compassion, and practical solutions to empower the most underserved.
                </p>
                </div>

                <div className="space-y-[26px]">
                    <h1 className="text-[24px] md:text-[32px] font-[600] text-[#181D27]">Honours and Recognition</h1>
                    <p>
                    Olanrewajuyou&#39;s work through SlumTech has not gone unnoticed. He has been formally recognized by 
                    <strong> U.S. Senator John Cornyn</strong> for his leadership in using technology for social good. 
                    The <strong>City of Austin</strong> and its Mayor also honored him and the Foundation for their contributions to 
                    underserved communities in Texas and around the world.
                    </p>
                    <p>
                    This recognition reflects not only the impact of SlumTech, but also the urgent need for solutions that bridge inequality with innovation.
                    </p>
                    <p>
                    He is an active member of the Forbes Technology Council, the World Economic Forum, the Institute of Electrical and Electronics Engineers (IEEE), the Project Management Institute (PMI), the Institute of Directors (UK), and Chatham House (UK).His thought leadership has been featured in several publications, including articles published on Forbes. 
                    </p>
                </div>

                  <div className="space-y-[26px]">
                    <h1 className="text-[24px] md:text-[32px] font-[600] text-[#181D27]">Looking Ahead</h1>
                    <p>
                   SlumTech continues to grow globally, expanding free school fees programs, launching renewable energy projects, 
                   and building STEM labs across underserved communities. With the support of donors, partners, and changemakers, 
                   we are proving that poverty is not destiny — opportunity changes everything.
                    </p>
                </div>
             </section>

             <section className="mt-[20px] md:pt-[80px] w-full">
                <h2 className="font-[500] text-[32px] leading-[144%] hidden md:block text-center w-full">Member</h2>

                <div className="flex justify-between flex-wrap mt-[38px]">
                <Member
                    img="/images/project.png"
                    classname="w-[46px] sm:w-[134px] h-[46px] sm:h-[141px]"
                    title="Project Management Institute"
                />

                <Member
                    img="/images/world.png"
                    classname="w-[53px] sm:w-[128px] h-[48px] sm:h-[114px]"
                    title="World Economic Forum"
                />

                <Member
                    img="/images/institute.png"
                    classname="w-[48px] sm:w-[114px] h-[48px] sm:h-[114px]"
                    title="Institute of Directors"
                />

                <Member
                    img="/images/electrical.png"
                    classname="w-[49px] sm:w-[116px] h-[48px] sm:h-[114px]"
                    title="Institute of Electrical and Electronics Engineers"
                />

                <Member
                    img="/images/chattam.png"
                    classname="w-[48px] sm:w-[110px] h-[48px] sm:h-[114px]"
                    title="Chatham House"
                />

                 <Member
                    img="/images/forbes.png"
                    classname="w-[48px] sm:w-[114px] h-[48px] sm:h-[114px]"
                    title="Forbes Technology Council"
                />
                </div>
             </section>
             <div className="my-[52px]">
              <Generosity />
              </div>
        </main>
         <Footer />
         </main>
    )
}

export default AboutPage;