import React from 'react'
import ReactDOM from 'react-dom/client'
import {FormLogin} from './components/Login/LoginForm'
import {Dashboard} from './components/Dashboard/Dashboard'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import {NotFound} from './context/ApiContext'
import {AuthContextProvider} from './context/AuthContext'

import {UserView} from './components/Dashboard/Users'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <FormLogin />,
    errorElement: <NotFound />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <NotFound />,
  },
  {
    path: "/users",
    element: <UserView />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FormLogin /> */}
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
    
    
  </React.StrictMode>,
)
