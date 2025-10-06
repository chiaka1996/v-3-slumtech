import { LinkedIn, Twitter, Instagram, Facebook } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-[64px] lg:px-20 md:px-7 px-[16px] bg-[#F5F5F5] space-y-18 w-full">
      <div className="max-w-[1282px] mx-auto flex justify-between max-[682px]:flex-col max-[682px]:gap-4">
        <div className="space-y-4 ">
          <Image src="/assets/logo.png" alt="logo" width={111} height={44} />
          <p className="text-[#414651] leading-relaxed max-w-xs">
            We bridge the gap between poverty and possibility by bringing technology, education, and sustainable solutions to underserved communities worldwide.
          </p>
        </div>
        <div className="flex gap-[72px] flex-row max-[368px]:flex-col max-[368px]:gap-4">
          <div>
            <h3 className="font-semibold text-[#252B37] mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/#mission" className="text-[#414651] hover:text-black transition-colors">Mission</Link></li>
              <li><Link href="/#program" className="text-[#414651] hover:text-black transition-colors">Programs</Link></li>
              <li><Link href="/#impact" className="text-[#414651] hover:text-black transition-colors">Impact</Link></li>
              <li><Link href="#donate" className="text-[#414651] hover:text-black transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#252B37] mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-[#414651] ">
              <p>
                Email: <a href="mailto:contact@slumtech.org" className="hover:text-gray-900 transition-colors">contact@slumtech.org</a>
              </p>
              <p>Phone: +1 (888) 565-9222</p>
              <p className="leading-relaxed">
                Address: 9801 Westheimer<br />
                Rd Suite 300 Houston, Texas<br />
                77042
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="max-w-[1282px] mx-auto pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex flex-wrap items-center gap-4 text-sm text-[#414651] ">
          <span>© 2025 SlumTech Foundation. All rights reserved.</span>
          <a href="#terms" className="hover:text-gray-900 transition-colors">Terms</a>
          <a href="#privacy" className="hover:text-gray-900 transition-colors">Privacy</a>
          <a href="#cookies" className="hover:text-gray-900 transition-colors">Cookies</a>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/company/underserve/"
            aria-label="LinkedIn"
          >
            <LinkedIn />
          </Link>
          <Link href="https://www.facebook.com/share/17DAy9i7XC/?mibextid=wwXIfr">
          <Facebook aria-label="Facebook" />
          </Link>
          <Link
            href="https://x.com/slumtechfdt?s=11&t=HgFY3GVV5Pwv6N0cQBnBWQ"
            aria-label="Twitter"
          >
            <Twitter />
          </Link>
          <Link
            href="https://www.instagram.com/slumtechfoundation?igsh=MTNpNHgxeG5mZHI4Yg%3D%3D&utm_source=qr"
            aria-label="Instagram"
          >
            <Instagram />
          </Link>
        </div>
      </div>
    </footer>
  );
}