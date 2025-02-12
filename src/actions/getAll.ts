'use server';

import client from "@/lib/db";
import { RepoFormType } from "@/schemas/repo";
import { SubmitFormType } from "@/schemas/submit";
import { Team } from "@/schemas/team";

const SubmissionsCollection = client.db("hackwars").collection("Submissions");
const RepoCollection = client.db("hackwars").collection("Repositories");
const TeamsCollection = client.db("hackwars").collection("Teams");


export async function getTeams() : Promise<Team[]>{
    try{
        const teams = await TeamsCollection.find<Team>({}).toArray()
        if(teams) return teams
    } catch (e){
    }
    return [];
}
export async function getRepos() : Promise<RepoFormType[]>{
    try{
        const repos = await RepoCollection.find<RepoFormType>({}).toArray()
        if(repos) return repos
    } catch (e){
    }
    return [];
}
export async function getSubmissions() : Promise<SubmitFormType[]>{
    try{
        const submissions = await SubmissionsCollection.find<SubmitFormType>({}).toArray()
        if(submissions) return submissions
    } catch (e){
    }
    return [];
}