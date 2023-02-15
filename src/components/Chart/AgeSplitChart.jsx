import Image from 'next/image'
import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const data = [
    { name: 'Female', value: 400 },
    { name: 'Male', value: 300 },
    
];

const COLORS = ['#FF5901', '#FF9C66'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

function AgeSplitChart() {
    return (
        <div className='hover:shadow-lg transition-shadow duration-300   bg-white w-full lg:w-[38%] h-fit rounded-[10px] p-[30px] flex flex-col justify-center mx-auto'>
            <div className='flex flex-row justify-between mb-2'>
                <h3 className='text-[18px] text-secondary5 px-2 flex flex-row '>
                    <Image className='mr-2' src={"/person.svg"} height={24} width={24} />
                    Gender By Age Group
                </h3>

            </div>
            <ResponsiveContainer width="100%" height={273}>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={100}
                        
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className='flex flex-row justify-center gap-2'>
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
    )
}

export default AgeSplitChart