import Image from 'next/image'
import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: '45-64',
      male: 4000,
      female: 2400,
    },
    {
      name: '35-44',
      male: 3000,
      female: 1398,
    },
    {
      name: '25-34',
      male: 2000,
      female: 9800,
    },
    {
      name: '18-24',
      male: 2780,
      female: 3908,
    },
    {
      name: '13-17',
      male: 1890,
      female: 4800,
    },
    
  ];


function GenderChart() {
    return (
        <div className='hover:shadow-lg transition-shadow duration-300 bg-white w-full h-fit rounded-[10px] p-[30px] flex flex-col justify-center mx-auto'>
            <div className='flex flex-row justify-between mb-2'>
                <h3 className='text-[18px] text-secondary5 px-2 flex flex-row '>
                    <Image className='mr-2' src={"/person.svg"} height={24} width={24} />
                    Gender By Age Group
                </h3>
                <div className='flex flex-row gap-2'>
                    <p className='text-[18px] text-secondary4 flex flx-row items-center'>
                        <div className='w-[12px] h-[12px] bg-primary rounded-full mr-2 border-white border-2 shadow-lg'></div>
                        Male
                    </p>
                    <p className='text-[18px] text-secondary4 flex flx-row items-center'>
                        <div className='w-[12px] h-[12px] bg-primary2 rounded-full mr-2 border-white border-2 shadow-lg'></div>
                        Female
                    </p>

                </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    layout='vertical'
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
                    <XAxis type='number' />
                    <YAxis dataKey="name" type='category' />
                    <Tooltip />
                    <Bar layout='vertical' dataKey="male" fill="#FF5901" />
                    <Bar layout='vertical' dataKey="female" fill="#FF9C66" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GenderChart