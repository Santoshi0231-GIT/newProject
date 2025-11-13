import React from 'react'
import { useAuth } from '../../context/authContext'
import { Navigate,Outlet } from 'react-router-dom';

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


  return <Outlet/>;
}

export default ProtectedRoutes