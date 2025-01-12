"use server";
import nodemailer from "nodemailer";
import { Team, TeamMember } from "@/schemas/team";
import getMailContent from "@/lib/mailContent";
import Mail from "nodemailer/lib/mailer";

export async function mail(member: TeamMember,team: Team){
    const adminMail = process.env.EMAIL
    const adminPass = process.env.EMAIL_PASS
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: adminMail,
            pass: adminPass,
        },
    });
    const mailOptions :Mail.Options = {
        from: adminMail,
        to: member.email,
        ...getMailContent(member.name,team),
        attachments:[
            {
                filename:'Rules.pdf',
                path:'https://raw.github.com/Abhigyan103/Abhigyan103/main/Rules.pdf'
            },
            {
                filename:'Badge.png',
                path:'https://raw.github.com/Abhigyan103/Abhigyan103/main/Badge.png'
            },
        ]
    }
    await transporter.sendMail(mailOptions)
    return null;
}