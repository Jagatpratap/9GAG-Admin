import Image from 'next/image'
import React, { useState } from 'react'

function Posts() {

    const [posts, setPosts] = useState([
        {
            image: "post1.png",
            likes: "867.87K",
            comments: "5.208K",
            date: "Sep23, 2022",
            description: "berloapp NEW EBOOK! Leave a comment and we'll DM you the download link (but only if you like getting huyndreds of store visitors without paying a penny)"
        },
        {
            image: "post2.png",
            likes: "867.87K",
            comments: "5.208K",
            date: "Sep23, 2022",
            description: "berloapp NEW EBOOK! Leave a comment and we'll DM you the download link (but only if you like getting huyndreds of store visitors without paying a penny)"
        },
        {
            image: "post3.png",
            likes: "867.87K",
            comments: "5.208K",
            date: "Sep23, 2022",
            description: "berloapp NEW EBOOK! Leave a comment and we'll DM you the download link (but only if you like getting huyndreds of store visitors without paying a penny)"
        },
    ])

    return (
        <div className='bg-white w-full h-fit rounded-[10px] p-[30px] flex flex-col justify-center mx-auto hover:shadow-lg transition-shadow duration-300'>
            <h3 className='text-[18px] text-secondary5 px-2 flex flex-row mb-5'>
                <Image className='mr-2' src={"/post.svg"} height={24} width={24} />
                Popular Posts
            </h3>
            <div className="flex flex-col justify-between gap-2 lg:flex-row">
                {posts.map((post) => {
                    return (
                        <div key={post.image} className=" w-full lg:w-[32%] rounded-[10px] border border-secondary">
                            <img src={post.image} className="aspect-square" />
                            <div className='p-3 text-[14px] flex flex-col gap-1'>
                                <div className="flex flex-row justify-between ">
                                    <span className='flex flex-row text-secondary5 text-[14px] items-center gap-2'>

                                        <img src="/redlike.svg" className='w-[17px] h-[17px]' />
                                        {post.likes}
                                    </span>
                                    <span className='flex flex-row text-secondary5 text-[14px] items-center gap-2'>

                                        <img src="/comment.svg" className='w-[17px] h-[17px]' />
                                        {post.comments}
                                    </span>
                                </div>
                                <p className='text-secondary2'>
                                    {post.date}
                                </p>
                                <p className='text-secondary3'>
                                    {post.description}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button className='flex flex-row items-center gap-2 mx-auto mt-3 text-[14px] text-secondary4 '>

                View All <Image src={"/viewmore.svg"} width={9} height={9} />
            </button>
        </div>
    )
}

export default Posts