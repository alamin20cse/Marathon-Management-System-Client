import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeMain from './Pages/HomeMain.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Marathons from './Component/Marathons.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import AuthProvider from './Component/AuthProvider.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import MarathonDetails from './Pages/AddMarathons.jsx';
import AddMarathons from './Pages/AddMarathons.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeMain></HomeMain>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/marathons',
        element:<Marathons></Marathons>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/addmarathons',
        element:<AddMarathons></AddMarathons>
      }









    ]
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </StrictMode>,
)
