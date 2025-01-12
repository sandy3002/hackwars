import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
export interface Organizer{
  name: string;
  description: string;
  email: string;
  linkedin: string | null;
  github: string | null;
  image: string;
}

interface OrganizerProps extends React.HTMLAttributes<HTMLDivElement>{
  info: Organizer
}

const TeamCard = React.forwardRef<HTMLDivElement, OrganizerProps>(
  ({ className, info, ...props }, ref) => {
  return (
    <div className="w-[20rem] rounded-md bg-black hover:scale-105 hover:ease-in-out duration-100">
      <Image src={info.image}
        alt="Background"
        width={300}
        height={300}
        color="red"
        className="w-auto rounded-md"
      ></Image>
      <div className=" h-4 w-full bg-gradient-to-b from-transparent to-black relative top-[-1rem]"/>
      <div className="px-4 pb-4">
        <h1 className="font-['Starjedi']">{info.name}</h1>
        <p className=" italic">{info.description}<br/>{info.email}</p>
        <div className="h-4"></div>
        <div className="flex justify-center items-center w-full gap-4">
          {info.github && <a target="_blank" href={info.github} rel="noopener noreferrer">
            <Github color="black" className="bg-white p-1 rounded-full"></Github>
          </a>}
          {info.linkedin && <a target="_blank" href={info.linkedin} rel="noopener noreferrer">
            <Linkedin color="black" className="bg-white p-1 rounded-full"></Linkedin>
          </a>}
        </div>
      </div>
    </div>
  )
})

export default TeamCard