"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Users, ScrollText, Send, Code } from "lucide-react";
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
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <Image
            src="/assets/logo.svg"
            alt="Hack Wars Logo"
            width={450}
            height={450}
            className="mx-auto mb-8"
          />
          <h1 className="btn-shine font-['Starjedi'] tracking-widest text-2xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-emerald-400 text-transparent bg-clip-text">
            CodE. CrEatE.
            <br /> ConquEr...
          </h1>
          <button
            onClick={() => {
              r.push("/register");
            }}
            className="box__link button-animation px-8 py-6 text-lg"
          >
            Register now!
          </button>
        </div>
      </section>

      {/* ---------------------------------------------------------------ABOUT--------------------------------------------- */}
      <section id="about" className="py-20 flex justify-center">
        <div className="container mx-auto px-4">
          <h2 className="font-['Starjedi'] tracking-widest text-5xl font-bold mb-12 text-center">
            About ThE EvEnt
          </h2>
          {/* <div className="card3 "> */}
          <div className="foot4 w-full md:w-3/4 mx-auto p-8">
            <div className="flex flex-col space-y-8 p-4">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                  What is Hack Wars?
                </h3>
                <p className="text-gray-300">
                  🚀 HackWars 2025 is proudly the first intra-college hackathon of
                  Jalpaiguri Government Engineering College (JGEC), a platform
                  where innovation meets implementation.
                </p>
                <p className="text-gray-300">
                  This event will bring together talented students to brainstorm🤯,
                  collaborate👥, and develop🔧 technology-driven solutions to
                  real-world problems. With a focus on creativity, problem-solving
                  and technical expertise, this hackathon is an opportunity to
                  foster a culture of innovation within our campus.✨
                </p>
              </div>
              <div>
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
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section >

      {/* ---------------------------------------------------------------TIMELINE--------------------------------------------- */}

      < section id="timeline" className="py-20 bg-gray-900/30" >
        <div className="container mx-auto px-4">
          <h2 className="font-['Starjedi'] tracking-widest text-5xl font-bold mb-12 text-center">
            EvEnt Details
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[{ time: "10th February", event: "Registration & Check-in", icon: Users },
            { time: "17th February", event: "Submission Deadline", icon: Clock },
            { time: "Mode", event: "Online", icon: Code }
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
      </section >

      {/* ---------------------------------------------------------------RULES--------------------------------------------- */}

      < section id="rules" className="py-20 px-4" >
        <div className="container mx-auto px-4">
          <h2 className="font-['Starjedi'] tracking-widest text-5xl font-bold mb-12 text-center">
            RulEs and GuidElinEs
          </h2>
          <div className="flex flex-col gap-10 md:flex-row justify-center">
            <Card className="flex flex-1 flex-col p-6 max-w-xl card2 bg-gray-900/50 border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                General Rules
              </h3>
              <ul className="flex-1 flex flex-col  text-gray-300">
                <li className="flex-1">👥 Team size: 3 members</li>
                <li className="flex-1">🏫 All team members must be from JGEC</li>
                <li className="flex-1">🔗 Use of third-party APIs is allowed</li>
                <li className="flex-1">📝 Project must be original work</li>
                <li className="flex-1">📂 Code must be submitted to GitHub / GitLab / SourceForge / Gitea</li>
              </ul>
            </Card>
            <Card className="flex flex-1 flex-col p-6 max-w-xl card2 bg-gray-900/50 border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Judging Criteria</h3>
              <ul className="flex-1 flex flex-col text-gray-300">
                <li className="flex-1">💻 User Interface (Design) - <span className="text-lime-400 font-bold">10 points</span></li>
                <li className="flex-1">🧠 User Experience (Intuitive) - <span className="text-lime-400 font-bold">10 points</span></li>
                <li className="flex-1">🧑🏻‍🤝‍🧑🏻 Synergy (Work with your teammate) - <span className="text-lime-400 font-bold">10 points</span></li>
                <li className="flex-1">🗣️ Presentation (Video) - <span className="text-lime-400 font-bold">10 points</span></li>
                <li className="flex-1">🌍 Usefulness - <span className="text-lime-400 font-bold">10 points</span></li>
                <li className="flex-1">🔧 Code quality - <span className="text-lime-400 font-bold">10 points</span></li>
              </ul>
            </Card>
          </div>
        </div>
      </section >

      {/* --------------------------------------------------------sponsors------------------------------------------- */}
      < section id="sponsors" className="py-20 px-4" >
        <div className="container mx-auto px-4">
          <h2 className="font-['Starjedi'] tracking-widest text-5xl font-bold mb-12 text-center">
            SPonSorS
          </h2>
          <div className="flex justify-center gap-10">
            <div className="card3 flex justify-center items-center rounded-md">
              <Image
                src={"/assets/xyz.svg"}
                alt="xyz Logo"
                width={160}
                height={100}
                className="bg-white p-4 rounded-md"
              />

            </div>
            <div className="card3 rounded-md">
              <Image
                src={"/images/g30.png"}
                alt="InterviewBuddy Logo"
                width={200}
                height={100}
                className="w-auto rounded-md"
              />

            </div>
          </div>
        </div>
      </section >
    </>
  );
}
