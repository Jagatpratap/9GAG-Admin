
import Image from 'next/image'
import React, { useState } from 'react'
import constant from '@/constant';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
function AccountInfo() {


    const [AccountInfo, setAccountInfo] = useState({
        name: "Go Fun The World",
        Followers: "58.2K",
        engagement: "0.461"
    })

    return (
        <div className='bg-white rounded-[10px] p-[30px] flex flex-col justify-center  hover:shadow-lg transition-shadow duration-300'>
            <div className="mx-auto mb-4 rounded-full p-10 flex justify-center items-center bg-[#D9D9D9]">
                <Image src={"/logo.svg"} height={116} width={116} />
            </div>
            <h3 className='mb-2 text-2xl font-bold text-secondary5'>9GAG: {AccountInfo.name}</h3>

            {/* followers and engagement rate */}
            <div className="flex flex-row w-full text-center border-b divide-x text-secondary4">
                <div className="w-1/2 py-2">
                    <p className="font-bold text-[22px]">
                        {AccountInfo.Followers}
                    </p>
                    <span className='break-words text-secondary4 text-[16px]'>
                        Followers
                    </span>
                </div>
                <div className="w-1/2 px-1 py-2">
                    <p className="font-bold text-[22px]">
                        {AccountInfo.engagement}%
                    </p>
                    <span className='break-words text-secondary4 text-[16px]'>
                        Engagement Rate
                    </span>
                </div>
            </div>

            <div className="flex flex-row py-4 items-top">
                <div className='flex flex-col w-1/2'>
                    <div className="h-[84px] w-[84px] mx-auto">
                        <CircularProgressbar styles={buildStyles(constant.barchartstyle)} value={75} text={"9.0"} />
                    </div>
                    <span className='break-words text-secondary5 font-semibold text-center text-[16px] py-2'>
                        SB Score
                    </span>
                </div>
                <div className='flex flex-col w-1/2'>
                    <div className="h-[84px] w-[84px] mx-auto">
                        <CircularProgressbar styles={buildStyles(constant.barchartstyle)} value={60} text={"8.2"} counterClockwise={true} />
                    </div>
                    <span className='break-words text-secondary5 font-semibold text-center text-[16px] py-2'>
                        Consistency Score
                    </span>
                </div>

            </div>

        </div>
    )
}

export default AccountInfo