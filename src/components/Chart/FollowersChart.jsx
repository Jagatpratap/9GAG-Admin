import Image from 'next/image'
import React from 'react'
import { AreaChart, XAxis, YAxis, CartesianGrid, Area, Tooltip, ResponsiveContainer } from 'recharts'
const data = [
    {
        "name": "2022-04",
        "uv": 1220,

    },
    {
        "name": "2022-05",
        "uv": 1500,

    },
    {
        "name": "2022-06",
        "uv": 2000,


    },
    {
        "name": "2022-07",
        "uv": 2780,



    },
    {
        "name": "2022-08",
        "uv": 3490,



    },
    {
        "name": "2022-09",
        "uv": 4000,



    },
    {
        "name": "2022-10",
        "uv": 3000,
    },
    {
        "name": "2022-11",
        "uv": 2000,
    },
    {
        "name": "2022-12",
        "uv": 2780,
    },
]


function FollowersChart() {
    return (
        <div className= 'hover:shadow-lg transition-shadow duration-300 bg-white w-full h-fit rounded-[10px] p-[30px] flex flex-col justify-center mx-auto'>
            <div className='flex flex-row justify-between mb-2'>
                <h3 className='text-[18px] text-secondary5 px-2 flex flex-row '>
                    <Image className='mr-2' src={"/followerschart.svg"} height={24} width={24} />
                    Followers Trend by Month
                </h3>
                <p className='text-[18px] text-secondary4 flex flx-row items-center'>
                    <div className='w-[12px] h-[12px] bg-primary rounded-full mr-2 border-white border-2 shadow-lg'></div>
                    Followers
                </p>
            </div>
            <ResponsiveContainer width={"100%"}  height={250}>

                <AreaChart className='text-secondary2'  height={250} data={data}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FF5901" stopOpacity={0.1} />
                            <stop offset="95%" stopColor="#FF5901" stopOpacity={0} />
                        </linearGradient>

                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis datakey="uv" />

                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#FF5901" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default FollowersChart