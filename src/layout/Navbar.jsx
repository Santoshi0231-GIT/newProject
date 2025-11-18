import React from 'react'
import { HiOutlineBell, HiOutlineSearch } from 'react-icons/hi'
import { IoSettingsOutline } from 'react-icons/io5'

const Navbar = () => {
    
  return (
    <div className=''>
    <div className='w-full bg-white  shadow justify-center p-2 mt-2 ml-30 relative z-0 items-center flex' >

        <input type="text"
        placeholder='Search..'
        className='border border-gray-300 rounded-2xl px-8 py-2' />
          <div className="flex flex-row items-center gap-6 text-2xl m-4 text-gray-600">
        <HiOutlineSearch />
        <HiOutlineBell/>
        <IoSettingsOutline/>
      </div>
    </div></div>
  )
}

export default Navbar