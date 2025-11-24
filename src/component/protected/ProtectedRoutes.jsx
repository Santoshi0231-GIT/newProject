import React from 'react'
import { useAuth } from '../../context/authContext'
import { Navigate,Outlet } from 'react-router-dom';
import SideBar from './../../layout/SideBar';
import Navbar from './../../layout/Navbar';


const ProtectedRoutes = () => {
  const {user,loading}=useAuth();

  if(loading){
    return(
      <div>
        <h1>Loading</h1>
      </div>
    )
  }
if(!user){
  return(<>
  

 <Navigate to ='/'replace/>
 
  </>)
}


  return (
    <div className="flex">
      <SideBar />

      <div className="flex-1">
        <Navbar />

        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProtectedRoutes