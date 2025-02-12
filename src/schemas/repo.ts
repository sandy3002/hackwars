import z from "zod";

export const repoSchema = z.object({
    teamId: z.string().trim().regex(/^T[0-9]{4}$/,"Please enter a valid Team ID"),
    repo: z.string().trim().min(1,"Please enter your repository link")
  })

export type RepoFormType =z.infer<typeof repoSchema>