import './assets/wckit/css/wckit.css';
import './assets/wckit/css/style.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import {FormLogin} from './components/Login/LoginForm'
import {Home} from './components/Dashboard/Home'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import {NotFound} from './context/ApiContext'
import {AuthContextProvider} from './context/AuthContext'

import {UserView} from './components/Dashboard/Users'
import {GuaranteeView} from './components/Dashboard/Guarantee'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <FormLogin />,
    errorElement: <NotFound />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/users",
    element: <UserView />,
    errorElement: <NotFound />,
  },
  {
    path: "/guarantee",
    element: <GuaranteeView />,
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
