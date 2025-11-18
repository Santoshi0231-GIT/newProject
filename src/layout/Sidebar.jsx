import React from 'react'
import { Link } from 'react-router-dom';
import { GrAnalytics } from "react-icons/gr";
import { AiOutlineProduct } from 'react-icons/ai';
import { BiSolidOffer } from 'react-icons/bi';
import { FcSalesPerformance } from 'react-icons/fc';
import { FaRegEnvelope } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';
import { IoPersonAddSharp } from 'react-icons/io5';
import logo from '../assets/style/logo.webp'
    import { MdOutlineInventory } from 'react-icons/md';
import { CgShoppingBag } from 'react-icons/cg';


const SideBar = () => {
  const menuItems=[
    {label:"Analytics",
      icon:<GrAnalytics/>,
      link:"/"
    },
    {
      label:"Products",
      icon:<AiOutlineProduct/>,
      link:"/Products"
    },
     {label:"Offer",
      icon:<BiSolidOffer/>,
      link:"/Offer"
    },
     {label:"Inventory",
      icon:<MdOutlineInventory/>,
      link:"/Inventory"
    },
    { label: "Orders", icon: <CgShoppingBag />, link: "/Orders" },
    { label: "Sales", icon: <FcSalesPerformance />, link: "/Sales" },
    { label: "Customer", icon: <IoPersonAddSharp />, link: "/Customer" },
    { label: "Newsletter", icon: <FaRegEnvelope />, link: "/Newsletter" },
    { label: "Settings", icon: <VscSettings />, link: "/Settings" },
  ];
  return (
 <>
<div className='bg-teal-100 flex flex-col w-64 gap-2 h-screen ml-0 mt-0 relative z-0'>

  <h2 className='text-teal-700 text-3xl mb-3 mt-2  text-center font-bold'>Pixel Commerce</h2>
  {menuItems.map((item)=>(
    <Link 
    key={item.label}
    to={item.link}
    className='flex items-center gap-3 p-3 rounded hover:bg-teal-200'>
          {item.icon}
          {item.label}
    </Link>

  ))}

</div>
 </>
  )
}

export default SideBar