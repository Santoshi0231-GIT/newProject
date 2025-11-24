import React from 'react'
import { HiOutlineBell } from 'react-icons/hi'
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Patients = () => {
  const navigate=useNavigate();
  const patients=[
    {name:"Sarah Abdullah",
      age:45,
      id:'1098765432',
      gender:'Female',
      diagnosis:'Type-2 diabetes',
      avatar:'https://ui-avatars.com/api/?name=Sarah+Abdullah'
    },{
      name:'Khalid Al-Ghamdi',
      age:62,
      id:'1012345678',
      diagnosis:'Asthma',
      gender:'Male',
      avatar:'https://ui-avatars.com/api/?name=Khalid+Al+Ghamdi'
    },
    {
      name:'Bhawana Chhetri',
      age:22,
      id:'1012345678',
      gender:'Female',
      diagnosis:"Iron deficiency Anemia",
      avatar:'https://ui-avatars.com/api/?name=Bhawana+Chhetri'
    }
  ]
  return (
   <div className="flex min-h-screen bg-gray-100 cursor-pointer">

<div className="flex-1 p-6">
<div className="flex justify-between items-center mb-4">
<h2 className="text-2xl font-semibold">Patient List</h2>
<button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 flex items-center gap-1" 
onClick={()=>navigate("/add-patient")}> <FaPlus className=''/>  Add Patient</button>
</div>


<div className="bg-white shadow rounded-xl p-4 cursor-pointer">
<table className="w-full text-left">
<thead>
<tr className="text-gray-600 border-b">
<th className="p-3">Name</th>
<th className="p-3">Age</th>
<th className="p-3">Gender</th>
<th className="p-3">Primary Diagnosis</th>
<th className="p-3 text-right">Action</th>
</tr>
</thead>
<tbody>
{patients.map((p, i) => (
<tr key={i} className="border-b hover:bg-gray-50">
<td className="p-3 flex items-center gap-3">
<img src={p.avatar} className="w-10 h-10 rounded-full" />
<div>
<p className="font-bold">{p.name}</p>
<p className="text-sm text-gray-500">{p.id}</p>
</div>
</td>
<td className="p-3">{p.age}</td>
<td className="p-3">{p.gender}</td>
<td className="p-3">{p.diagnosis}</td>
<td className="p-3 text-right">
<button className="px-3 py-1 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"></button>
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
</div>
);
};

export default Patients