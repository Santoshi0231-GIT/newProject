import React from 'react'

const LabResults = () => {
  const labSummary=[
    {
      name:'Aarav Sharma',
      age: 40,
      tests:"CBC, Glucose",
      status:'Completed',
      lastUpdate:'August 12'
    },{
      name:'Khalid Al-Ghamdi',
      age:62 ,
      tests:"CBC",
      status:'Pending',
      lastUpdate:'August 04'
    },{
      name:'Ramesh Das',
      age: 29,
      tests:"CBC",
      status:'Critical',
      lastUpdate:'August 8'
    },{
      name:'Seema Pandey',
      age: 24,
      tests:"LFT, Electrolytes",
      status:'Pending',
      lastUpdate:'August 04'
    },
  ];
  const statusColor={
    Completed:"bg-green-100 text-green-700", 
    Pending: "bg-yellow-100 text-yellow-700",
    Critical: "bg-red-100 text-red-700",
  }
  return (
    <div className='flex min-h-screen bg-gray-100 cursor-pointer'>
      <div className='flex-1 p-6'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl font-semibold'>Lab Results Summary</h2>
          <button className='bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700 cursor-pointer'>Add Lab Record</button>
       
        </div>
        <div>
 {/* Table data */}
 <div className='bg-white rounded-xl p-4'>
  <table className='w-full text-left'>
 <thead>
  <tr className='border-b text-gray-600'>
<th className='p-3'>Name</th>
<th className='p-3'>Age</th>
<th className='p-3'>Tests Requested</th>
<th className='p-3'>Status</th>
<th className='p-3'>Last Update</th>
<th className='p-3 text-center'>Action</th>
  </tr>
 </thead>
 <tbody>
 {labSummary.map((p,i)=>(
  <tr key={i} className='border-b hover:bg-gray-50'>
    <td className='p-3 font-bold'>{p.name}</td>
    <td className='p-3'>{p.age}</td>
    <td className='p-3'>{p.tests}</td>
    <td className='p-3'>
      <span className={`px-3 py-1 rounded-md font-medium ${statusColor[p.status]}`}>{p.status}</span>
    </td>
    <td className='p-3'>{p.lastUpdate}</td>
    <td className='p-3 text-center'>
      <button className='rounded-lg bg-blue-500 cursor-pointer text-white hover:bg-blue-600 px-4 py-1'>View Result</button>
    </td>
  </tr>
 ))}
 </tbody>
  </table>
 </div>
        </div>
      </div>
    </div>
  )
}

export default LabResults