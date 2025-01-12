
import { Team } from "@/schemas/team";
import Mail from "nodemailer/lib/mailer";

export default function getMailContent(name: string,team: Team){
    const SUBJECT = "Welcome to HackWars 2025!"
    const html= `Dear <strong>${name}</strong>,

Congratulations on taking the first step towards becoming a better developer! 🎉 We're thrilled to have team <strong>${team.name}</strong> join <strong>HackWars 2025</strong>, where creativity meets innovation.
<br><br>
Your Team ID is <strong>${team.id}</strong>.
<br>
To help you prepare for the event, I've attached the <strong>Rules and Guidelines</strong> document and a <strong>Registration badge</strong> to show-off on your linkedin!. Please take some time to review it carefully. It covers everything you need to know, including the schedule, judging criteria, and submission process.
<br>
Here are a few quick reminders:
<br>
<ol>
<li><strong>Start Date</strong>: 10th February, 2025</li>
<li><strong>Submission Date</strong>: 17st February, 2025 (Form closes at 6PM)</li>
<li><strong>WhatsApp Group</strong>: https://chat.whatsapp.com/GtXUIuUqL6sLOyxnYuoGcl</li>
<li><strong>Submission Link</strong>:  https://hackwars.jgec.tech/submit (Only 1 person should submit)</li>
</ol>
<br>
We can't wait to see the amazing ideas you'll bring to life. Stay tuned for more updates and get ready to code your way to success! (Exciting prizes await! 😉)
If you have any questions or need clarification, feel free to reach out via email or in the WhatsApp group. We're here to help!
<br>
Follow and share this on Linkedin: https://www.linkedin.com/company/hackwars
<br><br>
Best regards,<br>
Abhigyan Prakash Singh<br>
Event Lead`
return {
    subject: SUBJECT,
    html:html
}
}