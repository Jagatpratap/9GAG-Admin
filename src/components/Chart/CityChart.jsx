import Image from 'next/image'
import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Mexico',
        male: 4000,
        female: 2400,
    },
    {
        name: 'London',
        male: 3000,
        female: 1398,
    },
    {
        name: 'Hong Kong',
        male: 2000,
        female: 9800,
    },
    {
        name: 'Istanbul',
        male: 2780,
        female: 3908,
    },
    {
        name: 'Jakarta',
        male: 1890,
        female: 4800,
    },

];


function CityChart() {
    return (
        <div className='bg-white w-full lg:w-[49%] h-fit rounded-[10px] p-[30px] flex flex-col justify-center transition-shadow duration-300 mx-auto hover:shadow-lg'>
            <div className='flex flex-row justify-between mb-2'>
                <h3 className='text-[18px] text-secondary5 px-2 flex flex-row '>
                    <Image className='mr-2' src={"/city.svg"} height={24} width={24} />
                    Audience By City
                </h3>
                
            </div>
            <ResponsiveContainer width="100%" height={200}>
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
                    <Bar layout='vertical' stackId="a" dataKey="male" fill="#FF5901" />
                    <Bar layout='vertical' stackId="a" dataKey="female" fill="#FF9C66" />
                </BarChart>
            </ResponsiveContainer>
            
        </div>
    )
}

export default CityChart