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
import MarathonsPage from './Pages/MarathonsPage.jsx';
import Details from './Pages/Details.jsx';
import RegistrationMarathon from './Pages/RegistrationMarathon.jsx';
import MyMarathonsList from './Pages/MyMarathonsList.jsx';
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
        element:<Dashboard></Dashboard>,
        children:[
          {

            
          }
        ]
      },
      {
        path:'/addmarathons',
        element:<AddMarathons></AddMarathons>
      },
      {
        path:'/marathonspage',
        element:<MarathonsPage></MarathonsPage>,
        loader:()=>fetch(`http://localhost:5000/marathons`)
      },
      {
        path: '/marathons/:id',
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/marathons/${params.id}`)
      },
      {
        path: '/RegistrationMarathon/:id',
        element: <RegistrationMarathon></RegistrationMarathon>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/RegistrationMarathon/${params.id}`)
      },
      {
        path:'/mymarathonslist',
        element:<MyMarathonsList></MyMarathonsList>,
        loader:()=>fetch(`http://localhost:5000/marathons`)
       
          
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
