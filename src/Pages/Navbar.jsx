import React, { useContext } from "react";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { AuthContex } from "../Component/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContex);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "text-gray-700"
        }
      >
        <li className="px-3 py-2">Home</li>
      </NavLink>
      <NavLink
        to="/marathonspage"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "text-gray-700"
        }
      >
        <li className="px-3 py-2">Marathons Page</li>
      </NavLink>
      {user && user?.email && (
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-700"
          }
        >
          <li className="px-3 py-2">Dashboard</li>
        </NavLink>
      )}
    </>
  );

  return (
    <div className="navbar bg-blue-300  fixed  shadow-md z-10">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
            {user && user?.email ? (
              <li>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm btn-outline mt-2"
                >
                  Log Out
                </button>
              </li>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : "text-gray-700"
                  }
                >
                  <li className="px-3 py-2">Login</li>
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : "text-gray-700"
                  }
                >
                  <li className="px-3 py-2">Register</li>
                </NavLink>
              </>
            )}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          <img className="h-10 w-10 rounded-full" src={logo} alt="Site Logo" />
        </NavLink>
      </div>

      {/* Navbar End */}
      <div className="navbar-end hidden lg:flex gap-6">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
        {user && user?.email ? (
          <>
            <button
              onClick={handleLogOut}
              className="btn btn-sm btn-outline ml-4"
            >
              Log Out
            </button>
            {/* User Profile Picture */}
            <img
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500"
              src={user?.photoURL || "/default-avatar.png"}
              alt="User Profile"
            />
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-700"
              }
            >
              <li className="px-3 py-2">Login</li>
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-700"
              }
            >
              <li className="px-3 py-2">Register</li>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
