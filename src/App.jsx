import React from 'react'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'
import ProtectedRoutes from './component/protected/ProtectedRoutes'
import Dashboard from './pages/dashboard/Dashboard'
import NotFound from './pages/notFound/NotFound'
import { useRoutes } from 'react-router-dom'


const appRoutes=[
  //public routes
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
element:<ProtectedRoutes/>,
children:[
  {
    path:'/dashboard',
    element:<Dashboard/>
  }
]
  },
  {
    path:'*',
    element:<NotFound/>
  }



]



const App = () => {
  const routes=useRoutes(appRoutes);
  return (
    <div>
{routes}

    </div>
  )
}

export default App