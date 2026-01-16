import { Search, SupportAgent } from '@mui/icons-material'
import React from 'react'

function Header() {
    return (
        <div className='bg-white sm:py-4 py-5 flex items-center gap-2 md:sticky fixed top-0 left-0 w-full z-10'>
            {/* Logo Section  */}
            <div className="md:hidden flex items-center relative">
                <span className="flex items-center w-full rounded-lg pl-4 text-[14px] font-extrabold text-[#1B7339] tracking-wide">
                    <span className='text-[#1B7339]  border-2 border-[#1B7339] rounded-full p-3 mr-1 w-7 h-7 flex items-center justify-center'>𝓢</span>
                    <p className="text-black  ">UG.</p>HUB
                </span>
            </div>
            <div className='flex md:flex-1/3 border border-gray-400 rounded-xl py-1 pl-1  resize min-w-2'> <input type="text" placeholder='Search...' className='flex flex-1 outline-none resize min-w-1 ' /> <span className='px-2 border-l border-gray-400 text-[#1B7339] '><Search fontSize='small' /></span></div>
            <div className='flex flex-1 items-center justify-end pr-4'><SupportAgent fontSize='small' /></div>
        </div>
    )
}

export default Header