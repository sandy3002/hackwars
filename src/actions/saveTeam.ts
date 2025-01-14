'use server';

import client from "@/lib/db";
import { Team } from "@/schemas/team";
import { mail } from "../lib/mailer";
import { headers } from "next/headers";

const TeamsCollection = client.db("hackwars").collection("Teams");
async function generateTeamID() : Promise<string> {
    let teamId: string ="";
    let isUnique = false;
    while (!isUnique) {
        // Generate random 4-digit number
        const randomId = Math.floor(1000 + Math.random() * 9000); // 1000-9999
        teamId = `T${randomId}`;

        // Check for uniqueness in the database
        const existingTeam = await TeamsCollection.findOne({ teamId });
        if (!existingTeam) {
        isUnique = true;
        }
    }
    return teamId
}

export async function saveTeam(team: Team) : Promise<string | void>{
    const host = (await headers()).get('host'); // Get the host dynamically
    const protocol = host?.includes('localhost') ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;
    try{
        const members = team.members
        if((new Set(members.map((e)=>e.email))).size <3) return "1 or more emails are same"
        for(let i=0;i<members.length;i++){

            const exists = await TeamsCollection.findOne({"members.email":members[i].email})
            if(exists) return `Participant with Mail: ${members[i].email} already exists.`
        }
        team.id = await generateTeamID()
        team.createdAt = Date.now()
        await TeamsCollection.insertOne(team)
        await mail(team)
    } catch (e){
        return "An unknown error occurred. :("
    }
}