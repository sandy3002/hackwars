'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calendar, Clock, Users, ScrollText, Send, Code } from 'lucide-react'
import logo from "../images/logo.png"
import { useRouter } from 'next/navigation'
export default function Home() {
  const r = useRouter();
  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const navLinks = document.querySelectorAll('nav a')

    const handleScroll = () => {
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop - 150 && window.scrollY < sectionTop + sectionHeight - 150) {
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${section.id}`) {
              link.classList.add('text-emerald-400')
            } else {
              link.classList.remove('text-emerald-400')
            }
          })
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          <Image
            src={logo}
            alt="Hack Wars Logo"
            width={300}
            height={300}
            className="mx-auto mb-8"
          />
          <h1 className="text-2xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-emerald-400 text-transparent bg-clip-text">
            Code. Create. Conquer.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            A Hackathon. Made for JGEC
          </p>
          <Button onClick={() => { r.push('/register') }} className="bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white px-8 py-6 text-lg">
            Register Now
          </Button>
        </div>
      </section>

      {/* ---------------------------------------------------------------ABOUT--------------------------------------------- */}

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">About The Event</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="z-40 backdrop-blur-lg border p-6 border-gray-800">
              <Card className="p-6 bg-gray-900/50 border-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">What is Hack Wars?</h3>
                <p className="text-gray-300">
                  HackWars 2025 is proudly the first intra-college
                  hackathon of Jalpaiguri Government Engineering
                  College (JGEC), a platform where innovation meets
                  implementation. <br /><br />


                  This event will bring together talented students to
                  brainstorm, collaborate, and develop technologydriven solutions to real-world problems. With a focus
                  on creativity, problem-solving and technical expertise, this hackathon is an opportunity to foster a
                  culture of innovation within our campus.



                </p>
              </Card>
            </div>
            <Card className="p-6 bg-gray-900/50 border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Why Participate?</h3>
              <ul className="space-y-11 text-gray-300">
                <li>🚀 Showcase your technical skills</li>
                <li>🤝 Network with fellow developers</li>
                <li>🏆 Win exciting prizes</li>
                <li>📚 Learn new technologies</li>
                <li>💼 Build your portfolio</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="timeline" className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Event Timeline</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { time: '25th january', event: 'Registration & Check-in', icon: Users },
              { time: '1st February', event: 'Submission Deadline', icon: Clock },
              { time: 'Mode', event: 'Online', icon: Code },
              // { time: '11:00 PM', event: 'Project Submission', icon: ScrollText },
              // { time: '12:00 PM', event: 'Closing Ceremony', icon: Send },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-400">{item.time}</h3>
                  <p className="text-gray-300">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Rules & Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 bg-gray-900/50 border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">General Rules</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Team size: 2-4 members</li>
                <li>• All team members must be from the same college</li>
                <li>• Use of third-party APIs is allowed</li>
                <li>• Project must be original work</li>
                <li>• Code must be submitted to GitHub</li>
              </ul>
            </Card>
            <Card className="p-6 bg-gray-900/50 border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Judging Criteria</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Innovation & Creativity (30%)</li>
                <li>• Technical Complexity (25%)</li>
                <li>• Practicality & Impact (25%)</li>
                <li>• Presentation (20%)</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="max-w-md mx-auto">
            <Card className="p-6 bg-gray-900/50 border-gray-800">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white">
                  Send Message
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

