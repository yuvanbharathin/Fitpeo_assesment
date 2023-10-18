import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

export default function Header() {
  return (
    <div className='h-16 px-4 flex justify-between  items-center'>
      <div className='font-sans font-medium'>Hello shahrukh,</div>

      {/* search field */}
      <div className='relative'>
        <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'/>
        <input type="text" placeholder='Search...' className='text-sm focus:outline-none active:outline none h-10 w-[24rem] border border-gray-100 rounded-md shadow-xl pl-11 pr-4' />
      </div>
    </div>
  )
}
