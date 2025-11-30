import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa'
import { MdDelete, MdModeEdit } from 'react-icons/md'
const Staffs = () => {
  const [staffLists,setStaff]=useState([
    {id:Date.now()+Math.random(),
      name: "Dr. Suraj Thapa",
      role: "Cardiologist",
      department: "Cardiology",
      contact: "9801234567",
      status: "Active",
      avatar: "https://ui-avatars.com/api/?name=Suraj+Thapa",
    },
    {id:Date.now()+Math.random(),
      name: "Nisha Karki",
      role: "Nurse",
      department: "Emergency",
      contact: "9808765432",
      status: "On Leave",
      avatar: "https://ui-avatars.com/api/?name=Nisha+Karki",
    },
    {id:Date.now()+Math.random(),
      name: "Ravi Sharma",
      role: "Lab Technician",
      department: "Laboratory",
      contact: "9801122334",
      status: "Active",
      avatar: "https://ui-avatars.com/api/?name=Ravi+Sharma",
    },{id:Date.now()+Math.random(),
      name: "Anjali Rana",
      role: "Nurse",
      department: "ICU",
      contact: "9845123456",
      status: "Active",
      avatar: "https://ui-avatars.com/api/?name=Anjali+Rana",
    },
  ]);
  const handleDelete=(id)=>{
    const updatedList=staffLists.filter(staff=>staff.id!==id)
    setStaff(updatedList)
  }

  return (
    <div className='flex-1 p-6 cursor-pointer bg-gray-100 min-h-screen rounded-lg'>
      <div className='flex justify-between mb-6 items-center'>
        <h2 className='font-bold text-2xl'>Staff Management</h2>
      <div className='flex items-center space-x-1 rounded-lg bg-blue-500 cursor-pointer hover:bg-blue-700 px-4 text-white py-2'>  <FaPlus className=''/><button>Add Staff </button></div>
      </div>
<div className='shadow rounded-xl mb-4 '>
<div className='grid grid-cols-1 md:grid-cols-4 gap-4 sm:grid-cols-1'>
  <input type="text " placeholder='Search Staff..' className=' border p-2 rounded-lg ' />
  <select name="" id="" className='border p-2 rounded-lg cursor-pointer'>
    <option value="">All Roles</option>
    <option value="">Doctor</option>
    <option value="">Nurse</option>
    <option value="">Lab Technician</option>
    <option value="">Helper</option>
  </select>
  <select name="" id="" className='rounded-lg p-2 border'>
    <option value="">All Departments</option>
    <option>Cardiology</option>
    <option>ICU</option>
    <option>Emergency</option>
    <option>Laboratory</option>
    <option >Dialysis</option>
  </select>
   <select className="border p-2 rounded-lg">
    <option>All Status</option>
   <option>Active</option>
    <option>On Leave</option>
    </select>
</div>

</div>
<div className='bg-white rounded-xl p-4'>
    <table className="w-full text-left">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="p-3">Staff</th>
                <th className="p-3">Role</th>
                <th className="p-3">Department</th>
                <th className="p-3">Contact</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {staffLists.map((staff,i)=>(
                <tr key={i} className='hover:bg-gray-100 border-b'>
                  <td className='p-3'>
                    <div className='flex items-center gap-1'>
                      <img src={staff.avatar} alt="" className='rounded-full w-10 h-10 '/>
       <p className='font-semibold'>{staff.name}</p>
                    </div>
                  </td>
                  <td className='p-3'>{staff.role}</td>
                  <td className='p-3'>{staff.department}</td>
                  <td className='p-3'>{staff.contact}</td>
                  <td className='p-3'>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      staff.status==="Active"?"bg-green-100 text-green-700":"bg-yellow-600 text-red-100"
                    }`}>{staff.status}</span>
                  </td>
                  <td>
                    <div className='flex p-2 text-xl text-blue-500'>
                        <button className='mr-2 hover:text-blue-700 cursor-pointer '><MdModeEdit/></button>
                          <button className='mr-2 hover:text-blue-700 cursor-pointer'onClick={()=>handleDelete(staff.id)}><MdDelete/></button>
                          <button className='mr-2 hover:text-blue-700 cursor-pointer'><FaBell /></button>
                        </div>
                  </td>
                </tr>
              ))}
              </tbody></table>

</div>
    </div>
  )
}

export default Staffs