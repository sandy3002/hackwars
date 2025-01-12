"use server";
import nodemailer from "nodemailer";
import { TeamMember } from "@/schemas/team";
import Mail from "nodemailer/lib/mailer";

const SUBJECT = "Welcome to HackWars 2025!"
function getBody(name: string, teamId:string){
    return `Dear ${name},

Congratulations on taking the first step towards becoming a better developer! 🎉 We're thrilled to have you join HackWars, where creativity meets innovation.

Your Team ID is ${teamId}.

To help you prepare for the event, I've attached the Rules and Guidelines document. Please take some time to review it carefully. It covers everything you need to know, including the schedule, judging criteria, and submission process.

Here are a few quick reminders:

Start Date: 10th February, 2025
Submission Date: 17st February, 2025 (Form closes at 6PM)
WhatsApp Group: https://chat.whatsapp.com/GtXUIuUqL6sLOyxnYuoGcl
Submission Link:  https://hackwars.jgec.tech/submit

We can't wait to see the amazing ideas you'll bring to life. Stay tuned for more updates and get ready to code your way to success! (Exciting prizes await! 😉)
If you have any questions or need clarification, feel free to reach out via email or in the WhatsApp group. We're here to help!

Follow and share this on Linkedin: https://www.linkedin.com/company/hackwars

Best regards,
Abhigyan Prakash Singh
Event Lead`
}

export async function mail(member: TeamMember, teamId: string){
    const adminMail = process.env.EMAIL
    const adminPass = process.env.EMAIL_PASS
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: adminMail,
            pass: adminPass,
        }
    });
    const mailOptions :Mail.Options = {
        from: adminMail,
        to: member.email,
        subject: SUBJECT,
        text: getBody(member.name,teamId),
        html:''
    }
    await transporter.sendMail(mailOptions)
}