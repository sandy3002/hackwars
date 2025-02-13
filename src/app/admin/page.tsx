"use client";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { RepoFormType, repoSchema } from "@/schemas/repo";
import { getRepos, getSubmissions, getTeams } from "@/actions/getAll";
import { Team } from "@/schemas/team";
import { SubmitFormType } from "@/schemas/submit";
import TeamAdminCard from "@/components/TeamAdminCard";

export default function Register() {
  const [teams, setTeams]=useState<Team[]>([]);
  const [repos, setRepo]=useState<RepoFormType[]>([]);
  const [submissions, setSubmission]=useState<SubmitFormType[]>([]);
  useEffect(()=>{
    getTeams().then((t)=>{
      setTeams(t)
    })
    getRepos().then((r)=>{
      setRepo(r)
    })
    getSubmissions().then((s)=>{
      setSubmission(s)
    })
  },[]);
  return (
    <div className="flex min-h-screen md:mx-16 items-center py-6">
      <div className="sm:w-[75%] w-[95%] mx-auto align-middle">
      <h1 className="sm:text-3xl text-xl font-bold mb-10 text-center font-['Starjedi'] tracking-widest text-white">
        Teams
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {teams.sort((a,b)=>parseInt(a.year)-parseInt(b.year)).map((e)=>{
          return <TeamAdminCard team={e} repo={repos.find((v)=>v.teamId==e.id)?.repo} submission={submissions.find((v)=>v.teamId==e.id)}/>
        })}
      </div>
      </div>
    </div>
  );
}