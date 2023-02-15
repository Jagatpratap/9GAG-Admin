import Image from 'next/image'
import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: '75-90',
        female: 20,
    },
    {
        name: '64-75',
        female: 10,
    },
    {
        name: '45-64',
        female: 45,
    },
    {
        name: '35-44',
        female: 27,
    },
    {
        name: '25-34',
        female: 36,
    },
    {
        name: '18-24',
        female: 54,
    },
    {
        name: '13-17',
        female: 18,
    },
    {
        name: '0-13',
        female: 11,
    },

];


function AgeGroupChart() {
    return (
        <div className='hover:shadow-lg transition-shadow duration-300 bg-white w-full lg:w-3/5 h-fit rounded-[10px] p-[30px] flex flex-col justify-center mx-auto'>
            <div className='flex flex-row justify-between mb-2'>
                <h3 className='text-[18px] text-secondary5 px-2 flex flex-row '>
                    <Image className='mr-2' src={"/group.svg"} height={24} width={24} />
                    Gender By Age Group
                </h3>
                <div className='flex flex-row gap-2'>

                    <p className='text-[18px] text-secondary4 flex flx-row items-center'>
                        <div className='w-[12px] h-[12px] bg-primary2 rounded-full mr-2 border-white border-2 shadow-lg'></div>
                        Age Groups
                    </p>

                </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}

                >
                    <XAxis dataKey="name" type='category' />
                    <YAxis type='number' />
                    <Tooltip />
                    <Bar dataKey="female" fill="#FF9C66" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AgeGroupChart