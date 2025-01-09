import z from "zod";


export const teamMemberSchema = z.object({
    name: z.string().min(2,"Must enter a valid name"),
    email: z.string().email("Must be a valid email").toLowerCase(),
})
export const teamSchema = z.object({
    name: z.string().min(1,"Enter a team name").min(4,"Team name must be longer than 4 characters"),
    members:z.array(teamMemberSchema),
    id:z.string(),
    createdAt: z.number()
  })


export type Team =z.infer<typeof teamSchema>
export type TeamMember =z.infer<typeof teamMemberSchema>