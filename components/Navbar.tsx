import Link from 'next/link'
import React from 'react'
import Image from "next/image";

export default function Navbar() {
  return (
    <div className='w-full h-24 flex flex-row justify-between items-center px-64 font-roboto'>
        <div className='flex flex-row justify-between items-center gap-8'>
            <div>
                <div className='h-16 w-16 rounded-lg bg-gray-200'></div>
            </div>
            <div className='flex flex-row gap-4'>
                <Link className='hover:underline' href={""}>Get Started</Link>
                <Link className='hover:underline' href={""}>Sponsor</Link>

            </div>
        </div>
        <a target='__blank' href='https://github.com/mezotv/githubread.me' className='flex flex-row justify-center items-center cursor-pointer rounded-full  hover:bg-[#16D4D4] transition-colors'>
            <Image
            className="bg-transparent "
            src={"./github-mark.svg"}
            alt="github"
            width={40}
            height={40}/>
        </a>
    </div>
  )
}
