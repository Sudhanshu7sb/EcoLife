import React from 'react'
import { GoSearch } from 'react-icons/go'

const SearchDropDown = () => {
    return (
        <div className='flex ring-[#C0B07D] ring-2 outline-none rounded-full absolute top-28 -my-12 right-0 xl:right-[75%]  w-full  xl:w-[400px]'>

            <input className='rounded-full w-[80%] text-sm p-2 font-normal pl-4 outline-none' placeholder='Search...'/>
            <button className='w-[20%] outline-none border-0 rounded-full rounded-l-none bg-[#C0B07D]  hover:cursor-pointer flex justify-center items-center'><GoSearch className='text-white text-center'/></button>
        </div>
    )
}

export default SearchDropDown