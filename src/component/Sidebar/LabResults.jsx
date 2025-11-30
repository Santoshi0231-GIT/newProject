import React, { useState } from 'react'
import { FaBell, FaPlus } from 'react-icons/fa'
import { MdDelete, MdModeEdit } from 'react-icons/md'

const LabResults = () => {
    const [labSummary, setLabSummary] = useState([
        {
            id: Date.now() + Math.random(),
            name: 'Aarav Sharma',
            age: 40,
            tests: "CBC, Glucose",
            status: 'Completed',
            lastUpdate: 'August 12',
        },
        {
            id: Date.now() + Math.random(),
            name: 'Khalid Al-Ghamdi',
            age: 62,
            tests: "CBC",
            status: 'Pending',
            lastUpdate: 'August 04'
        },
        {
            id: Date.now() + Math.random(),
            name: 'Ramesh Das',
            age: 29,
            tests: "CBC",
            status: 'Critical',
            lastUpdate: 'August 8'
        },
        {
            id: Date.now() + Math.random(),
            name: 'Seema Pandey',
            age: 24,
            tests: "LFT, Electrolytes",
            status: 'Pending',
            lastUpdate: 'August 04'
        },
    ]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentLab, setCurrentLab] = useState({
        id: null,
        name: '',
        age: '',
        tests: "",
        status: '',
        lastUpdate: ''
    })

   
    const handleEditClick = (labResult) => {
        setIsEditing(true);
        setCurrentLab(labResult)
    }

    const handleDelete = (id) => {
        const updatedList = labSummary.filter(p => p.id !== id);
        setLabSummary(updatedList);
    }

    
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setCurrentLab({ ...currentLab, [name]: value }); 
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedLab = labSummary.map((l) => l.id === currentLab.id ? currentLab : l);
        setLabSummary(updatedLab)
        setIsEditing(false)
    }

    const statusColor = {
        Completed: "bg-green-100 text-green-700",
        Pending: "bg-yellow-100 text-yellow-700",
        Critical: "bg-red-100 text-red-700",
    }

    return (
        <div className='flex min-h-screen bg-gray-100 cursor-pointer relative'>
            <div className='flex-1 p-6'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-2xl font-semibold'>Lab Results Summary</h2>
                    <button className='bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700 cursor-pointer flex items-center gap-2'>
                        <FaPlus />Add Lab Record
                    </button>
                </div>

                {/* Table */}
                <div className='bg-white rounded-xl p-4'>
                    <table className='w-full text-left'>
                        <thead>
                            <tr className='border-b text-gray-600'>
                                <th className='p-3'>Name</th>
                                <th className='p-3'>Age</th>
                                <th className='p-3'>Tests Requested</th>
                                <th className='p-3'>Status</th>
                                <th className='p-3'>Last Update</th>
                                <th className='p-3'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {labSummary.map((p) => (
                                <tr key={p.id} className='border-b hover:bg-gray-50'>
                                    <td className='p-3'>
                                        <p className='font-bold'>{p.name}</p>
                                    </td>
                                    <td className='p-3'>{p.age}</td>
                                    <td className='p-3'>{p.tests}</td>
                                    <td className='p-3'>
                                        <span className={`px-3 py-1 rounded-md font-medium ${statusColor[p.status]}`}>
                                            {p.status}
                                        </span>
                                    </td>
                                    <td className='p-3'>{p.lastUpdate}</td>
                                    <td className='p-3 text-center'>
                                        <div className='flex p-2 text-xl text-blue-500'>
                                           
                                            <button 
                                                className='mr-2 hover:text-blue-700 cursor-pointer' 
                                                onClick={() => handleEditClick(p)}
                                            >
                                                <MdModeEdit />
                                            </button>
                                            <button className='mr-2 hover:text-blue-700 cursor-pointer' onClick={() => handleDelete(p.id)}><MdDelete /></button>
                                            <button className='mr-2 hover:text-blue-700 cursor-pointer'><FaBell /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>

 
            {isEditing && currentLab && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-40">
                    <div className="bg-white p-6 rounded-xl shadow-2xl w-96 border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-700 mb-4 border-b border-gray-200 pb-2">Edit Lab Record</h3>

                        <form onSubmit={handleUpdate} className="flex flex-col gap-3">

                            <div>
                                <label className="text-sm text-gray-500 font-semibold">Patient Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={currentLab.name}
                                    onChange={handleEditChange}
                                    className="w-full p-2 border border-blue-200 rounded text-gray-700 focus:outline-none focus:border-blue-500 bg-gray-50"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-500 font-semibold">Tests Requested</label>
                                <input
                                    type="text"
                                    name="tests"
                                    value={currentLab.tests}
                                    onChange={handleEditChange}
                                    className="w-full p-2 border border-blue-200 rounded text-gray-700 focus:outline-none focus:border-blue-500 bg-gray-50"
                                    required
                                />
                            </div>
                            
                            <div className='flex gap-2'>
                                <div className='w-1/2'>
                                    <label className="text-sm text-gray-500 font-semibold">Status</label>
                                    <select
                                        name="status"
                                        value={currentLab.status}
                                        onChange={handleEditChange}
                                        className="w-full p-2 border border-blue-200 rounded text-gray-700 focus:outline-none focus:border-blue-500 bg-gray-50"
                                    >
                                        <option value="Completed">Completed</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Critical">Critical</option>
                                    </select>
                                </div>
                                <div className='w-1/2'>
                                    <label className="text-sm text-gray-500 font-semibold">Last Update</label>
                                    <input
                                        type="text"
                                        name="lastUpdate"
                                        value={currentLab.lastUpdate}
                                        onChange={handleEditChange}
                                        className="w-full p-2 border border-blue-200 rounded text-gray-700 focus:outline-none focus:border-blue-500 bg-gray-50"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="px-4 py-2 rounded text-gray-600 bg-gray-200 hover:bg-gray-300 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md"
                                >
                                    Save Changes
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}

        </div>
    )
}

export default LabResults