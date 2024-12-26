import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>This is dashBord</h1>
            <NavLink className='btn' to='/addmarathons'>Add Marathons</NavLink>
            
        </div>
    );
};

export default Dashboard;