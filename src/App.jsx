import React from 'react'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'
import ProtectedRoutes from './component/protected/ProtectedRoutes'


import { useRoutes } from 'react-router-dom'

import Analytics from './layout/Sub/Analytics'
import Patients from './component/Sidebar/Patients';

import Dashboard from './Pages/Dashboard/Dashboard'
import Appointments from './component/Sidebar/Appointments';

import LabResults from './component/Sidebar/LabResults';
import Reports from './component/Sidebar/Reports';
import Staffs from './component/Sidebar/Staffs';
import Settings from './Navbar/Settings';
import Doctor from './component/Sidebar/Doctor'
import DoctorForm from './pages/Form/DoctorForm'
import PatientForm from './pages/Form/PatientForm'
// import Doctors from './pages/Form/Doctors';
import AppointmentForm from './pages/Form/AppointmentForm';
import Doctors from './component/Sidebar/Doctor'
import DoctorCategoryPage from './Navbar/DoctorCategoryPage'
import HospitalCategories from './Navbar/HospitalCategories';


const appRoutes=[
  
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/forgot-password',
    element:<ForgotPassword/>
  },



  //protected route
 {
        path: "/dashboard",
        element: <ProtectedRoutes/>,//The parent layout component

        children:[
          {index:true,element:<Dashboard/>}
        ]
      },
      {
        path:'/patients',
        element:<ProtectedRoutes/>,
        children:[
          {index:true,element:<Patients/>}
        ]
      },
      {
        path:'/appointments',
        element:<ProtectedRoutes/>,
        children:[
          {index:true,element:<Appointments/>}
        ]

      }, {
        path:'/LabResults',
        element:<ProtectedRoutes/>,
        children:[
          {index:true,element:<LabResults/>}
        ]

      }, {
        path:'/Reports',
        element:<ProtectedRoutes/>,
        children:[
          {index:true,element:<Reports/>}
        ]

      },{
        path:'/Staffs',
        element:<ProtectedRoutes/>,
        children:[
          {index:true,element:<Staffs/>}
        ]
      },
      {
        path:'/Settings',
        element:<ProtectedRoutes/>,
        children:[
          {index:true,element:<Settings/>}
        ]
      }
      ,{
        path:'/doctor',
        element:<ProtectedRoutes/>,
        children:[
          {index:true,element:<Doctor/>}
        ] },
      ,{
        path:'/add-doctor',
        element:<ProtectedRoutes/>,
        children:[
          {index:true,element:<DoctorForm/>}
        ]
      },
  {
        path:'/add-patient',
        element:<ProtectedRoutes/>,
        children:[
          {index:true,element:<PatientForm/>}
        ]
      },
        {
        path:'/add-doctor',
        element:<ProtectedRoutes/>,
        children:[
          {index:true,element:<Doctors/>}
        ]
      },
       {
        path:'/add-appointment',
        element:<ProtectedRoutes/>,
        children:[
          {index:true,element:<AppointmentForm/>}
        ]
      },{
        path:'/doc-category',
        element:<ProtectedRoutes/>,
        children:[
          {index:true,element:<DoctorCategoryPage/>}
        ]
      },{
        path:'/hos-category',
        element:<ProtectedRoutes/>,
        children:[
          {index:true,element:<HospitalCategories/>}
        ]
      },

      

];
 
    
const App = () => {
  const routes=useRoutes(appRoutes);
  return (
    <div>
{routes}

    </div>
  )
}

export default App