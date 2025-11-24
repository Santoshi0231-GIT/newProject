import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

// Hospital Data
const data = [
  { name: 'Mon', patients: 120, admissions: 45, discharges: 30 },
  { name: 'Tue', patients: 140, admissions: 50, discharges: 35 },
  { name: 'Wed', patients: 160, admissions: 60, discharges: 40 },
  { name: 'Thu', patients: 180, admissions: 65, discharges: 55 },
  { name: 'Fri', patients: 200, admissions: 80, discharges: 70 },
  { name: 'Sat', patients: 175, admissions: 60, discharges: 45 },
  { name: 'Sun', patients: 150, admissions: 55, discharges: 50 },
];

const Analytics = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 w-full mt-3">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-blue-700">Hospital Analytics</h3>

        <div className="flex items-center space-x-2 text-sm text-gray-600 border rounded-md px-2 py-1 cursor-pointer">
          <span>Sort By</span>
          <span className="font-medium text-blue-700">This Week</span>
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

      {/* Stats */}
      <div className="flex items-center space-x-6 mb-6 text-sm">
        <div className="flex items-center space-x-1">
          <span className="text-gray-500">Total Patients</span>
          <span className="text-blue-600 font-semibold">1,125</span>
          <span className="bg-blue-100 text-blue-700 text-xs font-medium px-1.5 py-0.5 rounded-full">
            +5%
          </span>
        </div>

        <div className="flex items-center space-x-1">
          <span className="text-gray-500">Admissions</span>
          <span className="text-blue-500 font-semibold">415</span>
          <span className="bg-blue-100 text-blue-600 text-xs font-medium px-1.5 py-0.5 rounded-full">
            +3%
          </span>
        </div>

        <div className="flex items-center space-x-1">
          <span className="text-gray-500">Discharges</span>
          <span className="text-gray-800 font-semibold">325</span>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />

            <XAxis dataKey="name" stroke="#6B7280" fontSize={12} />
            <YAxis stroke="#6B7280" fontSize={12} />

            <Tooltip
              contentStyle={{
                backgroundColor: '#1E3A8A',
                borderRadius: '6px',
                border: 'none',
              }}
              labelStyle={{ color: '#E0E7FF' }}
              itemStyle={{ color: '#F1F5F9' }}
            />

            <Legend wrapperStyle={{ fontSize: 12 }} />

            <Bar dataKey="patients" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="admissions" fill="#60A5FA" radius={[4, 4, 0, 0]} />
            <Bar dataKey="discharges" fill="#93C5FD" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
