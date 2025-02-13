import { getSubmissions } from "@/actions/getAll";
import Modal from "@/components/Modal"
import { Card, CardTitle } from "@/components/ui/card";
import { SubmitFormType } from "@/schemas/submit";
import Link from "next/link";

type Props= {
    params: Promise<{teamID:string}>
}

export default async function SubmissionModal(props:Props) {
  const params = await props.params;
  const {teamID} = params;
  const submitForm= (await getSubmissions()).find(m=>m.teamId==teamID) as SubmitFormType
  return (
    <Modal>
      <Card className="p-6">
        <CardTitle>{submitForm.teamName}</CardTitle>
        <Link href={submitForm.repo} className="mr-2">Repository</Link>
        <Link href={submitForm.video}>Video</Link>
        <div>Category: {submitForm.category}</div>
        <div>Message: {submitForm.comments}</div>
      </Card>
    </Modal>
  )
}