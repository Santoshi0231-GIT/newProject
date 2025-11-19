import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mon', income: 4000, expenses: 2400 },
  { name: 'Tue', income: 3000, expenses: 1398 },
  { name: 'Wed', income: 5000, expenses: 4300 },
  { name: 'Thu', income: 4500, expenses: 2000 },
  { name: 'Fri', income: 6000, expenses: 3800 },
  { name: 'Sat', income: 5200, expenses: 2500 },
  { name: 'Sun', income: 5800, expenses: 3200 },
];

const Analytics = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 w-full mt-3">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Sales Analytics</h3>

        <div className="flex items-center space-x-2 text-sm text-gray-500 border rounded-md px-2 py-1 cursor-pointer">
          <span>Sort By</span>
          <span className="font-medium text-gray-700">Jul 2023</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

  
      <div className="flex items-center space-x-6 mb-6 text-sm h-1 w-1 ">
        <div className="flex items-center space-x-1">
          <span className="text-gray-500">Income</span>
          <span className="text-green-600 font-semibold">23,262.00</span>
          <span className="bg-green-100 text-green-700 text-xs font-medium px-1.5 py-0.5 rounded-full">
            +4%
          </span>
        </div>

        <div className="flex items-center space-x-1">
          <span className="text-gray-500">Expenses</span>
          <span className="text-orange-500 font-semibold">11,135.00</span>
          <span className="bg-orange-100 text-orange-600 text-xs font-medium px-1.5 py-0.5 rounded-full">
            -3%
          </span>
        </div>

        <div className="flex items-center space-x-1">
          <span className="text-gray-500">Balance</span>
          <span className="text-gray-800 font-semibold">48,135.00</span>
        </div>
      </div>

     
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="incomeColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} />
            <YAxis stroke="#9CA3AF" fontSize={12} />

            <Tooltip
              contentStyle={{
                backgroundColor: '#111827',
                borderRadius: '6px',
                border: 'none',
              }}
              labelStyle={{ color: '#E5E7EB' }}
              itemStyle={{ color: '#F9FAFB' }}
            />

            <Area
              type="monotone"
              dataKey="income"
              stroke="#10B981"
              fill="url(#incomeColor)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
