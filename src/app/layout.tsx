import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from 'next/image'
import logo from "../images/logo.png"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

//
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HackWars | JGEC",
  description: "A hackathon. Made by JGEC students, for JGEC students",
};

type NavType = {name:string, link:string}

const navLinks:NavType[]=[
  {
    name:"Home",
    link:"/#home"
  },
  {
    name:"About",
    link:"/#about"
  },
  {
    name:"Timeline",
    link:"/#timeline"
  },
  {
    name:"Rules",
    link:"/#rules"
  },
  {
    name:"Register",
    link:"/register"
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-repeat bg-[#0A1A1A]`}
      >
        <div className="bg-[url('../images/bg.png')] text-white">
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
                  {navLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      className="text-gray-300 hover:text-emerald-400 transition-colors capitalize"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
          <div className="min-h-screen ">
          {children}
          </div>
          <footer className="py-8 border-t border-gray-800 backdrop-blur-lg">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <p>© 2024 Hack Wars. All rights reserved.</p>
                </div>
            </footer>
        </div>
      </body>
    </html>
  );
}
