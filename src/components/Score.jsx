import React from 'react'
import constant from '@/constant';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
function Score() {
    return (
        <div className='bg-white rounded-[10px] p-[20px] flex flex-col justify-center mx-auto hover:shadow-lg transition-shadow duration-300'>
            <div className="flex flex-col gap-4 px-2">
                <div className='flex flex-row gap-3'>
                    <div className="w-1/3 mx-auto">
                        <CircularProgressbar styles={buildStyles(constant.barchartstyle2)} value={23} text={"23"}  />
                    </div>
                    <div className='w-2/3'>
                        <span className=' text-secondary5 font-bold text-[18px]'>Paid Post Performance</span>
                        <p className='text-secondary2 text-[16px]'>
                            This tells about how consistent you are with your content
                        </p>
                    </div>
                </div>
                <div className='flex flex-row gap-3'>
                    <div className="w-1/3 ">
                        <CircularProgressbar styles={buildStyles(constant.barchartstyle2)} value={37} text={"3.0"}  />
                    </div>
                    <div className='w-2/3'>
                        <span className='text-secondary5 font-bold text-[18px]'>Acceptance Score</span>
                        <p className='text-secondary2 text-[16px]'>
                            This tells about how consistent you are with your content
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Score