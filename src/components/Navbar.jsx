import Image from 'next/image'
import React from 'react'

function Navbar() {
    return (
        <nav className='w-full bg-white h-[70px] flex flex-row items-center'>
            <div className="flex flex-row w-full px-[50px] mx-auto">
                <h1 className='w-full text-2xl md:w-1/5 text-secondary5'>9GAG Inc.</h1>
                <div className="flex-row hidden w-3/5 md:flex">
                    <Image src={"/instagram.svg"} width={27} height={27} />
                    <input className='ml-2 border-0 focus:border-b focus:border-primary focus:ring-0' type="text" name="search" id="search" placeholder='Search Instagram' />
                </div>
                <div className='flex flex-row justify-end w-full m-auto divide-x md:w-1/5'>
                    <span className='px-3 cursor-pointer'>
                        <Image className='hover:fill-secondary3' src={"/notification.svg"} width={25} height={25} />
                    </span>
                    <span className='px-3 cursor-pointer'>
                        <Image className='hover:fill-secondary3' src={"/profile.svg"} width={25} height={25} />
                    </span>
                    <span className='px-3 cursor-pointer'>
                        <Image className='hover:fill-secondary3' src={"/setting.svg"} width={25} height={25} />
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
