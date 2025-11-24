import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
import { MdPeopleOutline } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';



const stats = [
  { title: 'Total Patients', value: '3', icon: <MdPeopleOutline/>},
  { title: 'Total Appointments', value: '3', icon: <SlCalender /> },
  { title: 'New Reports', value: '3',  icon: <FaRegFileAlt />},
  { title: 'New Patients(30d)', value: '8',  icon: <IoPeople />
 },
];

function StatCard() {
  return (
<>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-8 shadow-sm flex items-center justify-between rounded-2xl">
            <div className='flex gap-4'>
                  <span className="items-center rounded-full mt-2 text-2xl text-blue-700">{stat.icon}</span>
                  <div className=''>
              <p className="text-xl text-gray-800">{stat.title}</p>
              <p className="text-2xl font-bold items-center">{stat.value}</p>
           </div>
            </div>
        
          </div>
        ))}
      </div>

      

       
 

      
      
    
    </>
  );
}

export default StatCard;