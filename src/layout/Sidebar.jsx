import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { GiMedicines } from "react-icons/gi";
import {  StethoscopeIcon } from 'lucide-react';
import { LiaUserInjuredSolid } from 'react-icons/lia';
import { FaCalendarAlt, FaFlask, FaRegFolderOpen } from 'react-icons/fa';
import { MdDashboard, MdPeopleOutline } from 'react-icons/md';
import { IoIosLogOut } from 'react-icons/io';
import { AiTwotoneSetting } from "react-icons/ai";
import { FaUserDoctor } from 'react-icons/fa6';
const SideBar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  
  const out = useCallback(async () => {
    try {
      await logout();
      navigate('/', { replace: true });
    } catch (err) {
      console.log(err.message);
    }
  }, [logout, navigate]);

  const menuItems = [
    {label:"Dashboard",icon:<MdDashboard/>,link:"/dashboard"},
    { label: "Patients", icon: <LiaUserInjuredSolid />, link: "/patients" },
    { label: "Appointments", icon: <FaCalendarAlt />, link: "/Appointments" },
    { label: "Lab Results", icon: <FaFlask />, link: "/LabResults" },
  
    { label: "Reports", icon: <FaRegFolderOpen />, link: "/Reports" },
      {label:"Doctor",icon:<FaUserDoctor/>,link:"/doctor"},
    { label: "All Staffs", icon: <MdPeopleOutline />, link: "/Staffs" },
 
    {label:"Prescription",icon:<GiMedicines />}
  ];

  return (
    <>
      <div className=" flex flex-col w-64 gap-2 h-screen ml-0 mt-0 relative z-0 p-2">

        <h2 className="text-blue-700 text-xl mb-3 mt-3 ml-2 text-center font-bold flex items-center gap-2">
          <StethoscopeIcon className="text-blue-700" />
          Smart Hospital
        </h2>

        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.link}
            className="flex items-center gap-3 p-2 rounded hover:bg-blue-300 hover:text-blue-800"
          ><div className='"mb-4 w-12 h-12 hover:bg-blue-400 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white'>
            {item.icon}</div>
            {item.label}
          </Link>
        ))}

      
        <button
          onClick={out}
          className="mt-auto flex  gap-3 p-3 rounded items-center hover:bg-red-600 hover:text-white text-red-500 font-medium transition"
        >
          <IoIosLogOut className="text-xl" />
          Logout
        </button>
      </div>
    </>
  );
};

export default SideBar;
