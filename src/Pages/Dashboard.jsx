import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>This is dashBord</h1>
            <NavLink className='btn' to='/addmarathons'>Add Marathons</NavLink>
            <NavLink className='btn' to='/marathonspage'>All Marathons</NavLink>
            <NavLink className='btn' to='/mymarathonslist'>My Marathons List</NavLink>
            <NavLink className='btn' to='/myapply'>My Apply</NavLink>
            <NavLink className='btn' to='/myapplylist'>My Apply List</NavLink>
            
        </div>
    );
};

export default Dashboard;