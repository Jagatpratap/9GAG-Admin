
import constant from '@/constant';
import Image from 'next/image';
import React, { useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

function Audience() {

    const [audience, setAudience] = useState({
        comments: "1.403k",
        likes: "267.445k"
    })
    return (
        <div className='bg-white rounded-[10px] p-[30px] flex flex-col justify-center  hover:shadow-lg transition-shadow duration-300'>
            <h4 className=' text-[18px] font-bold'>Audience Credibility</h4>

            <div className='flex flex-row items-center py-4'>
                <div className="w-[84px]">
                    <CircularProgressbar styles={buildStyles(constant.barchartstyle)} value={75} text={"9.0"} />
                </div>
                <div className='w-[calc(100%-84px)]'>
                    <p className='text-secondary2 text-[14px] pl-2'>
                        This tells about how consistent you are with your content
                    </p>

                </div>
            </div>

            <div className="flex flex-row w-full text-center border-t divide-x text-secondary4">
                <div className="w-1/2 p-2 pt-5">
                    <Image className='mx-auto' src={"/comment.svg"} height={25} width={25} />
                    <p className="font-bold text-secondary5 text-[22px]">
                        {audience.comments}
                    </p>
                    <span className='break-words text-secondary4 text-[16px]'>
                        Avg. Comments
                    </span>
                </div>
                <div className="w-1/2 p-2 pt-5 break-words">
                    <Image className='mx-auto w-[25px] h-[25px]' src={"/like.svg"} height={25} width={25} />
                    <p className="font-bold text-secondary5 text-[22px]">
                        {audience.likes}
                    </p>
                    <span className='break-words text-secondary4 text-[16px]'>
                        Avg. Likes
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Audience