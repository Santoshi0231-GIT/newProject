import React from 'react'
import { Link } from 'react-router-dom';
import { GrAnalytics } from "react-icons/gr";
import { AiOutlineProduct } from 'react-icons/ai';
import { BiSolidOffer } from 'react-icons/bi';
import { FcSalesPerformance } from 'react-icons/fc';
import { FaRegEnvelope } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';
import { IoPersonAddSharp } from 'react-icons/io5';

    import { MdOutlineInventory } from 'react-icons/md';
import { CgShoppingBag } from 'react-icons/cg';

const Sidebar = () => {
  return (
 <>
 <div className='bg-gray-300 w-55 h-screen ml-0 text-xl '>
    
    <Link to= '/'className='flex flex-row gap-2 p-3'><GrAnalytics/>Analytics</Link>
    <Link to='Products'className='flex flex-row gap-2  p-3'><AiOutlineProduct />Products</Link>
    <Link to ='Offers'className='flex flex-row  gap-2 p-3'><BiSolidOffer />Offer</Link>
    <Link to ='Inventory'className='flex flex-row  gap-2 p-3'><MdOutlineInventory />Inventory</Link>
    <Link to ='Orders'className='flex flex-row  gap-2 p-3'><CgShoppingBag />Orders</Link>
    <Link to ='Sales'className='flex flex-row  gap-2 p-3'><FcSalesPerformance/>Sales</Link>
    <Link to ='Customer'className='flex flex-row gap-2 p-3'><IoPersonAddSharp/>Customer</Link>
    <Link to= 'Newsletter'className='flex flex-row  gap-2 p-3'><FaRegEnvelope/>NewsLetter</Link>
    <Link to ='Settings'className='flex flex-row  gap-2 p-3'><VscSettings />Settings</Link>

</div>
 </>
  )
}

export default Sidebar