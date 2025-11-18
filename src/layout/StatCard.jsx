import React from 'react';
import { MdDoNotDisturbOnTotalSilence } from "react-icons/md";
import { FaFirstOrderAlt } from "react-icons/fa";
import { AiOutlineCustomerService } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";


const stats = [
  { title: 'Total Revenue', value: '$82,650', trend: '3%', icon: <MdDoNotDisturbOnTotalSilence />},
  { title: 'Total Order', value: '1645', trend: '12%', icon: <FaFirstOrderAlt /> },
  { title: 'Total Customer', value: '1,462', trend: '11%', icon: <AiOutlineCustomerService />},
  { title: 'Pending Delivery', value: '117', trend: '8%', icon: <CiDeliveryTruck />
 },
];

function StatCard() {
  return (
<>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-5 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm text-teal-600">{stat.title}</p>
              <p className="text-2xl font-bold ">{stat.value}</p>
              <span className="text-xs text-teal-600">{stat.trend}</span>
            </div>
            <span className="text-3xl">{stat.icon}</span>
          </div>
        ))}
      </div>

      

       
 

      
      
    
    </>
  );
}

export default StatCard;