import React from 'react';
import logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const link=<>
   <NavLink to='/'> <li><a>Home</a></li></NavLink>
   <NavLink to='/marathons'> <li><a>Marathons</a></li></NavLink>
   <NavLink to='/login'> <li><a>Login</a></li></NavLink>
   <NavLink to='/register'> <li><a>Register</a></li></NavLink>
     
    
    
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {link}

      
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img className='h-10 w-10 rounded-full' src={logo}></img></a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
{link}

    </ul>
  </div>
 
</div>
    );
};

export default Navbar;