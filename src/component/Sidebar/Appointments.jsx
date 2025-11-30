import React, { useState } from 'react'
import { FaBell, FaPlus } from 'react-icons/fa'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Appointments = () => {
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([
    {
      id: Date.now() + Math.random(),
      name: 'Mohammed Ali',
      date: 'August-13, 2025',
      time: '10:13 AM',
      status: 'Confirmed',
      avatar: 'https://ui-avatars.com/api/?name=Mohammed+Ali'
    },
    {
      id: Date.now() + Math.random(),
      name: 'Sarah Abdullah',
      date: 'August-12, 2025',
      time: '10:00 AM',
      status: 'Completed',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Abdullah'
    },
    {
      id: Date.now() + Math.random(),
      name: 'Bhawana Chhetri',
      date: 'August-11, 2025',
      time: '11:00 AM',
      status: 'Cancelled',
      avatar: 'https://ui-avatars.com/api/?name=Bhawana+Chhetri'
    }
  ]);

 
  const handleDelete = (id) => {
    const updated = appointments.filter(a => a.id !== id);
    setAppointments(updated);
  };

  return (
    <div className='flex min-h-screen bg-gray-100'>

      <div className='flex-1 p-6 cursor-pointer'>

        <div className='flex justify-between mb-4 items-center'>
          <h2 className='text-2xl font-semibold'>Appointment Schedule</h2>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-1'
            onClick={() => navigate("/add-appointment")}
          >
            <FaPlus /> Add Appointments
          </button>
        </div>

        <div className='bg-white shadow rounded-xl p-4'>
          <table className='w-full text-left'>
            <thead>
              <tr className='text-gray-600 border-b'>
                <th className='p-3'>Patient</th>
                <th className='p-3'>Date</th>
                <th className='p-3'>Time</th>
                <th className='p-3'>Status</th>
                <th className='p-3'>Action</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((a) => (
                <tr key={a.id} className='hover:bg-gray-50 border-b'>

                  
                  <td className='p-3 flex items-center gap-3'>
                    <img
                      src={a.avatar}
                      className='rounded-full h-10 w-10'
                      alt=''
                    />
                    <span className='font-bold'>{a.name}</span>
                  </td>

                 
                  <td className='p-3'>{a.date}</td>

                  <td className='p-3'>{a.time}</td>

                  <td className='p-3'>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        a.status === "Completed"
                          ? "bg-gray-200 text-gray-700"
                          : a.status === "Cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {a.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className='p-3 flex gap-3 text-xl'>
                    <button className='text-blue-500 hover:text-blue-700'>
                      <MdModeEdit />
                    </button>

                    <button
                      className='text-blue-500 hover:text-blue-700'
                      onClick={() => handleDelete(a.id)}
                    >
                      <MdDelete />
                    </button>

                    <button className='text-blue-500 hover:text-blue-700'>
                      <FaBell />
                    </button>
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

export default Appointments;
