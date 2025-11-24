import React from 'react'
import Dashboard from '../../pages/dashboard/Dashboard'
import SideBar from '../../layout/SideBar'
import { FaPlus } from 'react-icons/fa'


const Appointments = () => {
  const appointments=[
    {name:'Mohammed Ali',
      date:'August-13,2025',
      time:'10:13 AM',
      status:'Confirmed',
      avatar:'https://ui-avatars.com/api/?name=Mohammed+Ali'
    },
     {name:'Sarah Abdullah',
      date:'August-12,2025',
      time:'10:00 AM',
      status:'Completed',
    avatar:'https://ui-avatars.com/api/?name=Sarah+Abdullah'}
    , {name:'Bhawana Chhetri',
      date:'August-11,2025',
      time:'11:00 AM',
      status:"Cancelled",
    avatar:'https://ui-avatars.com/api/?name=Bhawana+Chhetri'},
    //  {name:,
    //   date:,
    //   time:,
    //   status:
    // },
  ]
  return (<div className='flex min-h-screen bg-gray-100'>

   <div className='flex-1  p-6 cursor-pointer'>
    <div className='flex justify-between mb-4 items-center'>
      <h2 className='text-2xl font-semibold'>Appointment Schedule</h2>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 flex items-center gap-1'><FaPlus/> Add Appointments</button>
    </div>
    <div className='bg-white shadow rounded-xl p-4'>
      <table className='w-full text-left'>
        <thead>
          <tr className='text-gray-600 border-b'>
            <th className='p-3'>Patient </th>
            <th className='p-3'>Date </th>
            <th className='p-3'>Time </th>
            <th className='p-3'>Status </th>
<th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a,i)=>(
            <tr key={i} className='hover:bg-gray-50 border-b  '>
            <td className='p-3 items-center flex'>
              <div className='items-center gap-2 flex'>
                <img src={a.avatar} alt="" className='rounded-full h-10 w-10'/>
                <span className='font-bold justify-between'>{a.name}</span>
              </div>
            </td>
            <td className='p-3 '>{a.date}</td>
              <td className='p-3'>{a.time}</td>
              <td className='p-3'><span className={`px-3 py-1 rounded-full text-sm ${
a.status === "Completed" ? "bg-gray-200 text-gray-700" : "bg-green-100 text-green-700"
}`}>
{a.status}
</span></td>
<td className='text-left p-3'><button className='px-3 py-1 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600'>View Profile</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
</div>
  )
}

export default Appointments