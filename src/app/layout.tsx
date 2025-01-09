import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from 'next/image'
import logo from "../images/logo.png"
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/Navbar";

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
    name:"Sponsors",
    link:"/#sponsors"
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
        <div className="bg-[url('../images/bg.png')] bg-fixed text-white">
         <Navbar/>
          <div className="min-h-screen ">
          {children}
          </div>
          <footer className="py-4 border-t border-gray-800 backdrop-blur-lg">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <p>© 2024 Hack Wars. All rights reserved.</p>
                </div>
            </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
