import z from "zod";


export const teamMemberSchema = z.object({
    name: z.string().min(1,"Must enter a name"),
    email: z.string().email("Must be a valid email"),
})
export const teamSchema = z.object({
    name: z.string().min(1,"Enter a team name").min(4,"Team name must be longer than 4 characters"),
    members:z.array(teamMemberSchema).length(3, "An error occurred"),
    id:z.string().length(5,"Error"),
    createdAt: z.number()
  })


export type Team =z.infer<typeof teamSchema>
export type TeamMember =z.infer<typeof teamMemberSchema>