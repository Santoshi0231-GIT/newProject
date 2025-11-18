import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import SideBar from '../../layout/Sidebar'
import { IoIosLogOut } from 'react-icons/io'
import StatCard from '../../layout/StatCard'
import Navbar from '../../layout/Navbar'

const Dashboard = () => {

  const navigator=useNavigate()
  const {logout}=useAuth()
  const out=useCallback(async()=>{
    try{
      await logout()
      navigator('/',{replace:true})

    }
    catch(err){
      console.log(err.message)
    }
  },
[logout,navigator])
  return (


<div className='flex min-h-screen bg-gray-200'>
<div className='flex min-h-screen bg-gray-50 fixed w-64 top-0 h-full'>
  <SideBar />
  
</div>
  <div className='flex-1 ml-64 p-6 w-full'>


    <div className='flex justify-between items-center mb-8'>
   
   

      <div className='flex  gap-4 '>
        <h1 className='text-2xl font-semibold text-gray-700'>Dashboard Overview</h1>
           <Navbar />
      </div>
    </div>
        <StatCard/>
       <div>
       <div className=''>
           <button
          className='flex bg-red-500 hover:bg-red-700 text-white text-sm py-2 px-3 rounded items-center transition duration-150 ease-in-out '
          onClick={out}
        >
          <IoIosLogOut className='text-2xl mr-2 px-2 flex'/> Log Out
        </button></div>
       </div></div>
    </div>
  )
}

export default Dashboard