import React from "react";
import { Card, CardTitle } from "./ui/card";
import { Github, Mail, Check } from "lucide-react";
import { Team } from "@/schemas/team";
import { SubmitFormType } from "@/schemas/submit";
import Link from "next/link";

interface TeamAdminProps extends React.HTMLAttributes<HTMLDivElement>{
  team: Team,
  repo: string|undefined,
  submission: SubmitFormType | undefined
}

const TeamAdminCard = React.forwardRef<HTMLDivElement, TeamAdminProps>(
  ({ className, team, repo, submission, ...props }, ref) => {
  return (
    <Card key={team.id} className="backdrop-blur-md bg-gray-900 p-6 flex justify-center flex-col min-w-72">
        <CardTitle className="text-xl text-yellow-300 flex justify-between">
            {team.name}
            <div className="flex gap-2">
                {repo && <a target="_blank" href={repo} rel="noopener noreferrer">
                    <Github className="text-black rounded-full bg-white p-1"/>
                </a>}
                {submission && <Link href={`/admin/submissions/${submission.teamId}`}>
                    <Check className="text-black rounded-full bg-green-300 p-1"/>
                </Link>}
                
            </div>
        </CardTitle>
        <div className=" rounded-sm ">
            {team.members.map((m,i)=><div className="border-[1px] rounded-sm border-white p-2 my-2 flex justify-between text-wrap" key={m.email} title={m.email}>
                <p>{i+1}. {m.name}</p>
                <a target="_blank" onClick={()=>navigator.clipboard.writeText(m.email)} className="hover:cursor-pointer" rel="noopener noreferrer">
                    <Mail/>
                </a>
            </div>)}
        </div>
        <div className="flex justify-between">
            <div className="bg-red-300 p-2 border-2 border-red-500 rounded-md text-black">{team.year}</div>
            <div className="bg-green-200 p-2 border-2 border-green-500 rounded-md text-black">{team.id}</div>
        </div>
    </Card>
  )
})
TeamAdminCard.displayName="TeamAdminCard"

export default TeamAdminCard