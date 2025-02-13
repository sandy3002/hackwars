
import Modal from "@/components/Modal"

type Props= {
    params: {teamID:string}
}

export default async function SubmissionPage({params:{teamID}}:Props) {
  return (
    <Modal>{teamID}</Modal>
  )
}