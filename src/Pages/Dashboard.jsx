import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {

     useEffect(()=>{
    
            document.title='Dashboard';
          })

          const link = (
            <>
           <li> <NavLink className={({ isActive }) => isActive ? "text-white bg-blue-500" : "hover:text-white"} to='/dashboard/addmarathons'>Add Marathons</NavLink></li>
           <li>  <NavLink className={({ isActive }) => isActive ? "text-white bg-blue-500" : "hover:text-white"} to='/dashboard/mymarathonslist'>My Marathons List</NavLink></li>
           <li>  <NavLink className={({ isActive }) => isActive ? "text-white bg-blue-500" : "hover:text-white"} to='/dashboard/myapply'>My Apply</NavLink></li>
           <li>    <NavLink className={({ isActive }) => isActive ? "text-white bg-blue-500" : "hover:text-white"} to='/dashboard/myapplylist'>My Apply List</NavLink></li>
             </>);
     return (
       <div className='pt-16' >
        <h1 className='py-4 font-bold'>Dashboard</h1>

<div className="flex flex-col lg:flex-row min-h-screen">
             
     
 
             {/* Navbar for Mobile */}
             <div className="navbar bg-base-100 lg:hidden">
                 <div className="navbar-start">
                     <div className="dropdown">
                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                             </svg>
                         </label>
                         <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                             {link}
                         </ul>
                     </div>
                     <a className="btn btn-ghost text-xl">Dashboard</a>
                 </div>
             </div>
 
             {/* Sidebar for Larger Screens */}
             <div className="hidden py-4 lg:block w-64 bg-blue-300 p-4">
                 <ul className="space-y-2 menu p-4">
                     {link}
                 </ul>
             </div>
 
             {/* Main Content */}
             <div className="flex flex-col w-full">
                 <div className="flex-1 p-4 bg-gray-50">
                  
                     <Outlet />
                 </div>
             </div>
         </div>
       </div>
    );
};

export default Dashboard;