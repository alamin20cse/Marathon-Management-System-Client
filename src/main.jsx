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
import UpdateMarathon from './Pages/UpdateMarathon.jsx';
import MyApply from './Pages/MyApply .jsx';
import MyApplyList from './Pages/MyApplyList.jsx';
import UpdateRegistrationMarathon from './Pages/UpdateRegistrationMarathon.jsx';
import PrivateRoute from './Pages/PrivateRoute.jsx';
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
        element:<PrivateRoute><AddMarathons></AddMarathons></PrivateRoute>,
      },
      {
        path:'/marathonspage',
        element:<PrivateRoute><MarathonsPage></MarathonsPage></PrivateRoute>,
        loader:()=>fetch(`http://localhost:5000/marathons`)
      },
      {
        path: '/marathons/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
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
        element:<PrivateRoute><MyMarathonsList></MyMarathonsList></PrivateRoute>,
        loader:()=>fetch(`http://localhost:5000/marathons`)
       
          
      },
      {
        path:'/updatemarathon/:id',
        element:<UpdateMarathon></UpdateMarathon>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/marathons/${params.id}`)
      },
      {
        path:'/myapply',
        element:<PrivateRoute><MyApply></MyApply></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/marathonsreg')
      },
      
      {
        path:'/myapplylist',
        element:<MyApplyList></MyApplyList>,
        loader:()=>fetch('http://localhost:5000/marathonsreg')
      },
      {
        path:'/updateregistrationmarathon/:id',
        element:<UpdateRegistrationMarathon></UpdateRegistrationMarathon>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/marathonsreg/${params.id}`)
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
