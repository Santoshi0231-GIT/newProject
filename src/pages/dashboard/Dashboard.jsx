import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import SideBar from '../../layout/SideBar'

import DailySchedule from '../../layout/Sub/DailySchedule'
import Navbar from '../../layout/Navbar'
import Analytics from './../../layout/Sub/Analytics';
import StatCard from './../../layout/Sub/StatCard';



const Dashboard = ({children}) => {

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


<div className='flex min-h-screen bg-gray-100'>

  <div className='flex-1 p-6 w-full'>


    <div className='flex justify-between items-center mb-8'>
   
   

      <div className='flex  gap-4 '>
        <h1 className='text-2xl font-semibold text-gray-700 '>Dashboard Overview</h1>
       
      </div>
    </div>
    {children}
       <div>
       {/* <div className=''>
           <button
          className='flex bg-red-500 hover:bg-red-700 text-white text-sm py-2 px-3 rounded items-center transition duration-150 ease-in-out '
          onClick={out}
        >
          <IoIosLogOut className='text-2xl mr-2 px-2 flex'/> Log Out
        </button></div> */}
         <div>

      <StatCard />
      <div className='grid grid-cols-2 mt-2'>
        <Analytics /><DailySchedule />
      </div>
    </div>
       </div></div>
    </div>
  )
}

export default Dashboard