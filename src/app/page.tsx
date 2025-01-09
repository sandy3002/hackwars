"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Users, ScrollText, Send, Code } from "lucide-react";
import logo from "../images/logo.png";
import { useRouter } from "next/navigation";

// import styles from './styles.css'

export default function Home() {
  const r = useRouter();
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    const handleScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 150 &&
          window.scrollY < sectionTop + sectionHeight - 150
        ) {
          navLinks.forEach((link) => {
            if (link.getAttribute("href") === `#${section.id}`) {
              link.classList.add("text-emerald-400");
            } else {
              link.classList.remove("text-emerald-400");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        id="home"
        className="min-h-screen  flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Image
            src={logo}
            alt="Hack Wars Logo"
            width={300}
            height={300}
            className="mx-auto mb-8"
          />
          <h1 className="btn-shine font-['Starjedi'] tracking-widest text-2xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-emerald-400 text-transparent bg-clip-text">
            CodE. CrEatE.
            <br /> ConquEr...
          </h1>
          <Button
            onClick={() => {
              r.push("/register");
            }}
            className="bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white px-8 py-6 text-lg"
          >
            Register Now
          </Button>
        </div>
      </section>

      {/* ---------------------------------------------------------------ABOUT--------------------------------------------- */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-['Starjedi'] tracking-widest text-5xl font-bold mb-12 text-center">
            About ThE EvEnt
          </h2>
          <div className="grid md:grid-cols-2 gap-8 ">
            <Card className="p-6 lg:max-w-xl card2 bg-gray-900/50 border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                What is Hack Wars?
              </h3>
              <p className="text-gray-300">
                HackWars 2025 is proudly the first intra-college hackathon of
                Jalpaiguri Government Engineering College (JGEC), a platform
                where innovation meets implementation. <br />
                <br />
                This event will bring together talented students to brainstorm,
                collaborate, and develop technologydriven solutions to
                real-world problems. With a focus on creativity, problem-solving
                and technical expertise, this hackathon is an opportunity to
                foster a culture of innovation within our campus.
              </p>
            </Card>
            <Card className="flex flex-col p-6 lg:max-w-xl card2 bg-gray-900/50 border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                Why Participate?
              </h3>
              <ul className="flex-1 flex-col flex text-gray-300">
                <li className="flex-1">🚀 Showcase your technical skills</li>
                <li className="flex-1">🤝 Network with fellow developers</li>
                <li className="flex-1">🏆 Win exciting prizes</li>
                <li className="flex-1">📚 Learn new technologies</li>
                <li className="flex-1">💼 Build your portfolio</li>
              </ul>
            </Card>
            {/* </div></main> */}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------TIMELINE--------------------------------------------- */}

      <section id="timeline" className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <h2 className="font-['Starjedi'] tracking-widest text-5xl font-bold mb-12 text-center">
            EvEnt TimElinE
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                time: "25th january",
                event: "Registration & Check-in",
                icon: Users,
              },
              {
                time: "1st February",
                event: "Submission Deadline",
                icon: Clock,
              },
              { time: "Mode", event: "Online", icon: Code },
              // { time: '11:00 PM', event: 'Project Submission', icon: ScrollText },
              // { time: '12:00 PM', event: 'Closing Ceremony', icon: Send },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-400">
                    {item.time}
                  </h3>
                  <p className="text-gray-300">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------RULES--------------------------------------------- */}

      <section id="rules" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-['Starjedi'] tracking-widest text-5xl font-bold mb-12 text-center">
            RulEs and GuidElinEs
          </h2>
          <div className="grid md:grid-cols-2 gap-8  mx-auto">
            <Card className="flex flex-col p-6 lg:max-w-xl card2 bg-gray-900/50 border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                General Rules
              </h3>
              <ul className="flex-1 flex flex-col  text-gray-300">
                <li className="flex-1">👥 Team size: 2-4 members</li>
                <li className="flex-1">🏫 All team members must be from the same college</li>
                <li className="flex-1">🔗 Use of third-party APIs is allowed</li>
                <li className="flex-1">📝 Project must be original work</li>
                <li className="flex-1">📂 Code must be submitted to GitHub</li>
              </ul>
            </Card>
            <Card className="flex flex-col p-6 lg:max-w-xl card2 bg-gray-900/50 border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                Judging Criteria
              </h3>
              <ul className="flex-1 flex flex-col text-gray-300">
                <li className="flex-1">💡 Innovation & Creativity (30%)</li>
                <li className="flex-1">🔧 Technical Complexity (25%)</li>
                <li className="flex-1">🌍 Practicality & Impact (25%)</li>
                <li className="flex-1">🗣️ Presentation (20%)</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
