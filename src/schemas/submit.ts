import z from "zod";

export const submitFormSchema = z.object({
    teamId: z.string().trim().regex(/^T[0-9]{4}$/,"Please enter a valid Team ID"),
    category: z.enum(['edu','health','fin','game','combo']),
    repo: z.string().trim().min(1,"Please enter your repository link"),
    video: z.string().trim().min(8,"Please enter your video link"),
    comments: z.string()
  })

export type SubmitFormType =z.infer<typeof submitFormSchema>