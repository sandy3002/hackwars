'use server';

import client from "@/lib/db";
import { RepoFormType } from "@/schemas/repo";
import { SubmitFormType } from "@/schemas/submit";
import { Team } from "@/schemas/team";

const SubmissionsCollection = client.db("hackwars").collection("Submissions");
const RepoCollection = client.db("hackwars").collection("Repositories");
const TeamsCollection = client.db("hackwars").collection("Teams");

export async function saveSubmission(submitFormType:SubmitFormType) : Promise<string | undefined>{
    if(submitFormType.repo.includes('sandy')) return 'Nope! Absolutely not! No spamming here please!'
    try{
        const teamExists = await TeamsCollection.findOne<Team>({id:submitFormType.teamId})
        if(!teamExists) return `Team with ID: ${submitFormType.teamId} does not exist.`
        submitFormType.teamName=teamExists.name
        submitFormType.year=teamExists.year
        const alreadySubmitted = await SubmissionsCollection.findOne({teamId:submitFormType.teamId})
        if(alreadySubmitted) return `Team with ID: ${submitFormType.teamId} has already submitted. If you want to change it, Contact us.`
        await SubmissionsCollection.insertOne(submitFormType)
    } catch (e){
        return "An unknown error occurred. 🥲🥲"
    }
}
export async function saveRepo(repoFormType:RepoFormType) : Promise<string | undefined>{
    try{
        if(repoFormType.repo.includes('sandy')) return 'Nice Try! Maybe you should ask Arnold Schwarzenegger!'
        const teamExists = await TeamsCollection.findOne<Team>({id:repoFormType.teamId})
        if(!teamExists) return `Team with ID: ${repoFormType.teamId} does not exist.`
        const alreadySubmitted = await RepoCollection.findOne({teamId:repoFormType.teamId})
        if(alreadySubmitted) return `Team with ID: ${repoFormType.teamId} has already submitted. If you want to change it, Contact us.`
        await RepoCollection.insertOne(repoFormType)
    } catch (e){
        return "An unknown error occurred. 🥲🥲"
    }
}