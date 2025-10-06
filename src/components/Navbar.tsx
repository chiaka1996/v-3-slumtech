"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "@/utils/icons"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    const NAVS = [
        {
            title: "Founder",
            href: "/founder"
        }, 
        {
            title: "Missions",
            href: "/#mission"
        },
        {
            title: "Program",
            href: "/#program"
        },
        {
            title: "Impact",
            href: "/#impact"
        },
        {
            title: "Get Involved",
            href: "/#donate"
        }
    ]
    
    return (
        <section className="py-5 lg:px-20 md:px-7 px-2 xl:px-0 border-b border-[#E9EAEB]">
        <header className="max-w-[1282px] mx-auto ">  
            <div className="hidden md:flex items-center justify-between">
                <Image src="/assets/logo.png" alt="logo" width={111} height={44} />
                <nav>
                    <ul className="flex gap-4">
                        {NAVS.map((nav) => (
                            <li key={nav.title} className="text-black py-[6px] px-[10px]">
                                <Link href={nav.href}>{nav.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Link href="/#donate" className="bg-green rounded-xl font-semibold py-4 px-6 text-white">
                    Donate
                </Link>
            </div>

            <div className="md:hidden">
                <div className="flex items-center justify-between">
                    <Image src="/assets/logo.png" alt="logo" width={90} height={36} />
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-black p-2 relative z-50"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {isMenuOpen && (
                    <>
                        
                        <div 
                            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        
                        
                        <div className="fixed top-[88px] left-0 right-0 bg-white z-40 shadow-lg animate-slideDown">
                            <div className="px-5 py-6 space-y-4 max-h-[calc(100vh-88px)] overflow-y-auto">
                                <nav>
                                    <ul className="space-y-3">
                                        {NAVS.map((nav) => (
                                            <li key={nav.title} className="text-black">
                                                <Link 
                                                    href={nav.href}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="block py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors"
                                                >
                                                    {nav.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <Link 
                                    href="/#donate" 
                                    className="block bg-green rounded-xl font-semibold py-4 px-6 text-white text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Donate
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </header>
        </section>
    )
}

export default Navbar;