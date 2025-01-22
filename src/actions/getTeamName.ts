'use server';

import client from "@/lib/db";
import { Team } from "@/schemas/team";

const TeamsCollection = client.db("hackwars").collection("Teams");

export async function getTeamName(teamId: string) : Promise<string>{
    try{
        const exists = await TeamsCollection.findOne<Team>({id:teamId})
        if(exists) return exists.name
    } catch (e){
    }
    return ""
}