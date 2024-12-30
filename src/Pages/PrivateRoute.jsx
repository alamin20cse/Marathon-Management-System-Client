import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../Component/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user,loading}=useContext(AuthContex);
    const loaction=useLocation();


    if(loading)
        {
          return <span className="loading loading-spinner loading-lg"></span>;
        }

    if(user && user?.email)
        {
            return children;
        }
        
        return <Navigate state={loaction.pathname} to='/login' > </Navigate>
       




    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;