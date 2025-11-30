import React from 'react'
import { HiOutlineBell, HiOutlineSearch } from 'react-icons/hi'
import { IoSettingsOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
    
  return (
  <div className='bg-gray-100 shadow-2xl mb-0 p-2'>
     <div className='gap-2  px-2 py-2 text-blue-700'>
    <button className='text-xl m-2 font-semibold hover:underline 'onClick={()=>navigate("/doc-category")}>Doctor </button>
     <button className='text-xl m-2 font-semibold hover:underline'onClick={()=>navigate("/hos-category")}>Hospital </button>
   </div>
  </div>
  )
}

export default Navbar