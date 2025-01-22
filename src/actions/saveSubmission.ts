'use server';

import client from "@/lib/db";
import { SubmitFormType } from "@/schemas/submit";

const SubmissionsCollection = client.db("hackwars").collection("Submissions");
const TeamsCollection = client.db("hackwars").collection("Teams");

export async function saveSubmission(submitFormType:SubmitFormType) : Promise<string | void>{
    try{
        const teamExists = await TeamsCollection.findOne({id:submitFormType.teamId})
        if(!teamExists) return `Team with ID: ${submitFormType.teamId} does not exist.`
        const alreadySubmitted = await SubmissionsCollection.findOne({teamId:submitFormType.teamId})
        if(alreadySubmitted) return `Team with ID: ${submitFormType.teamId} has already submitted. If you want to change it, Contact us.`
        await SubmissionsCollection.insertOne(submitFormType)
    } catch (e){
        return "An unknown error occurred. :("
    }
}