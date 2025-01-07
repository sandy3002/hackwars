'use client'

import Image from 'next/image'
import logo from "../../images/logo.png"
import { useRouter } from 'next/navigation'
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A1A1A] text-white">
      <nav className="fixed top-0 z-50 w-full backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Image
              src={logo}
              alt="Hack Wars Logo"
              width={40}
              height={40}
              className="w-auto h-8"
            />
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'timeline', 'rules', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-300 hover:text-emerald-400 transition-colors capitalize"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div>Register logic here</div>
        </div>
      </section>
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Hack Wars. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

