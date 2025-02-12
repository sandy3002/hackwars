"use client";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { RepoFormType, repoSchema } from "@/schemas/repo";
import { getRepos, getSubmissions, getTeams } from "@/actions/getAll";
import { Team } from "@/schemas/team";
import { SubmitFormType } from "@/schemas/submit";

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
    <div className="flex min-h-screen md:mx-16 items-center">
      <div className="max-w-[500px] sm:w-[75%] w-[95%] mx-auto align-middle">
      <h1 className="sm:text-3xl text-xl font-bold mb-10 text-center font-['Starjedi'] tracking-widest text-white">
        Teams
      </h1>
      <div className="flex gap-6">
        {teams.map((e)=>{
          return <Card key={e.id} className="backdrop-blur-md bg-gray-900 p-6 min-w-[20rem]">
            <p>Team Name: {e.name}</p>
            <p>Team members:{e.members.map((m)=><div key={m.email}>{m.name}, {m.email}</div>)}</p>
            <p>Year: {e.year}</p>
            <p>ID: {e.id}</p>
          </Card>
        })}
      </div>
      <h1 className="sm:text-3xl text-xl font-bold mb-10 text-center font-['Starjedi'] tracking-widest text-white">
        Repositories
      </h1>
      <div className="flex gap-6">
        {repos.map((e)=>{
          return <Card key={e.repo} className="backdrop-blur-md bg-gray-900 p-6 min-w-[20rem]">
            <p>Team Name: {e.repo}</p>
            <p>ID: {e.teamId}</p>
          </Card>
        })}
      </div>
      <h1 className="sm:text-3xl text-xl font-bold mb-10 text-center font-['Starjedi'] tracking-widest text-white">
        Submissions
      </h1>
      <div className="flex gap-6">
        {submissions.map((e)=>{
          return <Card key={e.teamName} className="backdrop-blur-md bg-gray-900 p-6 min-w-[20rem]">
            <p>Team Name: {e.teamName}</p>
            <p>Year: {e.year}</p>
            <a href={e.repo} className="text-blue-300">Repository </a>
            <a href={e.video} className="text-blue-300">Video</a>
            <p>Comments: {e.comments}</p>
            <p>Year: {e.year}</p>
            <p>ID: {e.teamId}</p>
          </Card>
        })}
      </div>
      </div>
    </div>
  );
}