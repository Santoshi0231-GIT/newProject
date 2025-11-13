import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import Sidebar from '../../layout/Sidebar'
import { IoIosLogOut } from 'react-icons/io'
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
    <div>
       <div className='text-2xl text-black font-semibold flex justify-center items-center '> Welcome to dashboard</div>
<div>
<Sidebar /></div>
       <button className='bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded' onClick={out}>
     <IoIosLogOut className='text-2xl'/>  Log Out
       </button>
       <div>
        
       </div>
    </div>
  )
}

export default Dashboard