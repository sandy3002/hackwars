
"use client";
import Image from "next/image"
import { useEffect, useState } from "react";

function randomPercent(): number{
    return Math.floor(Math.random()*100)
}
function Page() {
    const [percentage,setPercent] = useState(20);
    useEffect(()=>{
        setInterval(()=>{
            setPercent(randomPercent());
        },2500);
    },[]);
  return (
    <div className="font-['MicroSS'] w-full p-36">
        <div className="text-9xl">{":("}</div>
        <div className="flex py-10 flex-col-reverse md:flex-row">
            <div className="pr-10">
                <div className="text-3xl font-thin pb-10">
                Your PC ran into a problem and needs to chill out. We are just collecting some personal information, your IP address, location, incognito search data<br/> and then you can go.
                </div>
                <div className="text-3xl font-thin pt-10">
                {percentage}% Complete
                </div>
                <div className="flex pt-11">
                    <Image
                    src="/images/qr.png"
                    alt="QR"
                    width={150}
                    height={150}
                    className="pr-6"/>
                    <div className="text-sm h-[150] flex flex-col justify-between">
                    <div>For more information about this issue and possible fixes, visit <a className="text-blue-300" href="https://github.com/Abhigyan103">Here</a> or <a className="text-blue-300" href="https://github.com/sandy3002">Here</a> and follow.</div>
                    <div>If you call support person, give them this info<br/>Stop code: ERROR_404</div>
                    </div>
                </div>
            </div>
            <Image
                src="/images/windows.png"
                alt="Windows 10 logo"
                width={300}
                height={284}
                className="w-50 h-50 md:w-[300px] md:h-[284px]"
            />
        </div>
    </div>
  )
}

export default Page
