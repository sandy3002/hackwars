import Image from "next/image"
function Page() {
  return (
    <div className=`w-full p-36 font-["MicroSS"]`>
        <div className="text-9xl">{":("}</div>
        <div className="flex py-10 flex-col-reverse md:flex-row">
            <div className="pr-10">
                <div className="text-3xl font-thin pb-10">
                Your PC ran into a problem and needs to chill out. We're just collecting some personal information info, and then you can go.
                </div>
                <div className="text-3xl font-thin pt-10">
                20% Complete
                </div>
                <div className="flex pt-11">
                    <Image
                    src="/assets/qr.svg"
                    alt="Windows 10 logo"
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
                src="/images/windows 10.png"
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