import React from 'react'

type Props= {
    params: {teamID:string}
}

export default function SubmissionPage({params:{teamID}}:Props) {
  return (
    <div>De {teamID}</div>
  )
}