import { mail } from "@/lib/mailer"
import { Team } from "@/schemas/team";

export async function POST(request: Request) {
    const body = await request.json() as Team
    await mail(body);
    return Response.json("Mail Sent!")
}