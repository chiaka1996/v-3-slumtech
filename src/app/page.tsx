import Footer from "@/components/LandingPage/Footer";
import Generosity from "@/components/LandingPage/Generosity";
import GetInvolved from "@/components/LandingPage/GetInvolved";
import Hero from "@/components/LandingPage/Hero";
import Illustration from "@/components/LandingPage/Illustration";
import OurImpact from "@/components/LandingPage/OurImpact";
import OurMission from "@/components/LandingPage/OurMission";
import OurPartner from "@/components/LandingPage/OurPartner";
import WhatWeDo from "@/components/LandingPage/WhatWeDo";

export default function LandingPage() {
  return(
    <main className="space-y-15">
      <Hero />
      <WhatWeDo />
      <Illustration />
      <OurMission />
      <OurImpact />
      <OurPartner />
      <GetInvolved />
      <Generosity />
      <Footer />
    </main>
  )
}