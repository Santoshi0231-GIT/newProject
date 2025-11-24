import React from 'react'
import { HiOutlineBell, HiOutlineSearch } from 'react-icons/hi'
import { IoSettingsOutline } from 'react-icons/io5'

const Navbar = () => {
    
  return (
    <div className='px-8 shadow-2xl mb-0 ml-2 rounded-2xl items-center bg-gray-100'>
    <div className='  justify-center p-2 px-6 mt-2  z-0 items-center flex rounded' >

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