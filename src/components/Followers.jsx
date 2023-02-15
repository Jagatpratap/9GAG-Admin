"use client";

import Image from 'next/image';
import React, { useState } from 'react'

function Followers() {
    const [followers, setFollowers] = useState([
        {
            image: "/follower1.png",
            name:"Emily Cooper",
            followers:"175.914m",
        },
        {
            image: "/follower2.png",
            name:"Albert Flores",
            followers:"175.914m",
        },
        {
            image: "/follower3.png",
            name:"Eleanor Pena",
            followers:"175.914m",
        },
        {
            image: "/follower4.png",
            name:"Marvin McKinney",
            followers:"175.914m",
        },
        {
            image: "/follower5.png",
            name:"Dianne Russell",
            followers:"175.914m",
        },
        {
            image: "/follower6.png",
            name:"Jenny Wilson",
            followers:"175.914m",
        },
        {
            image: "/follower7.png",
            name:"Wade Warren",
            followers:"175.914m",
        },
        {
            image: "/follower8.png",
            name:"Kristin Watson",
            followers:"175.914m",
        },
    ])

    return (
        <div className='bg-white rounded-[10px] p-[20px] flex flex-col justify-center mx-auto w-full transition-shadow duration-300 hover:shadow-md'>
            <h3 className='text-[18px] text-secondary5 px-2 flex flex-row'>
                <Image className='mr-2' src={"/followers.svg"} height={24} width={24} />
                Notable Followers
            </h3>
            <div className="w-full flex-flex-col border-secondary2">
                {followers.map((follower)=>{
                    return(
                        <>
                        <div key={follower.name} className="group flex flex-row items-center px-3 py-1 my-1.5 hover:bg-secondary6 rounded-[4px] ">
                            
                            <Image className='pr-1' src={follower.image} width={40} height={40}/>
                            <div className="flex flex-col cursor-pointer grow">
                                <p className='text-[14px] font-bold text-secondary5'>{follower.name}</p>
                                <p className='text-[14px] font-semibold text-secondary4'>{follower.followers}</p>
                            </div>
                            <button className='px-3 border py-1 text-[14px] rounded-[4px] border-secondary2 hover:border-primary transition-colors duration-200 hover:text-white hover:bg-primary'>
                                View
                            </button>

                        </div>
                        <hr className='bg-secondary4 w-[85%] mx-auto' />
                        </>
                    )
                })}
                <button className='flex flex-row items-center gap-2 mx-auto mt-3 text-[14px] text-secondary4 '>

                    View All <Image src={"/viewmore.svg"} width={9} height={9} />
                </button>

            </div>
        </div>
    )
}

export default Followers