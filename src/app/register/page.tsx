'use client'

import Image from 'next/image'
import logo from "../../images/logo.png"
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
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

            <section id="register" className="py-20 bg-gray-900/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-10 mt-10 text-center font-['Starjedi'] tracking-widest	 " >Register</h2>
                    <div className="max-w-xl mx-auto">
                        <Card className="p-6 bg-gray-900/50 border-gray-800">
                            <form className="space-y-10">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-3">Team Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>

                                <div className='grid grid-cols-2 gap-4'>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3">Member 1 Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3">Member 2 Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3">Member 3 Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        />
                                    </div>
                                </div>

                                <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white">
                                    Complete Registration
                                </Button>
                            </form>
                        </Card>
                    </div>
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

