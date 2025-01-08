'use server';

import client from "@/lib/db";
import { Team, TeamMember } from "@/schemas/team";

async function generateTeamID() : Promise<string> {
    let teamId: string ="";
    let isUnique = false;
    const teamsCollection = client.db("hackwars").collection("Teams");
    while (!isUnique) {
        // Generate random 4-digit number
        const randomId = Math.floor(1000 + Math.random() * 9000); // 1000-9999
        teamId = `T${randomId}`;

        // Check for uniqueness in the database
        const existingTeam = await teamsCollection.findOne({ teamId });
        if (!existingTeam) {
        isUnique = true;
        }
    }
    return teamId
}

export async function saveTeam(team: Team){
    team.id = await generateTeamID()
    team.createdAt = Date.now()
    await client.db("hackwars").collection("Teams").insertOne(team)
    await mailTeamMembers(team);
}

async function mailTeamMembers(team: Team){
    const members: TeamMember[] = team.members;
    for (let i = 0; i < members.length; i++) {
        await mail(members[i].email, team.id)
    }
}
async function mail(email: string, teamId: string){
    
    //TODO
}