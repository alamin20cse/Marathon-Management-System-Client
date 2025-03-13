import React, { useContext } from 'react';
import { AuthContex } from '../Component/AuthProvider';

const DashboardHome = () => {
    const { user } = useContext(AuthContex);
    console.log(user);
    return (
        <div>
            <div className='w-[400px] h-[400px]  mx-auto'>
                <img className='w-full h-full rounded-full'  src={user?.photoURL || "/default-avatar.png"} alt="User Photo"  />

            </div>
            <div>
                <h1 className='text-2xl font-bold py-5'>{user?.displayName}</h1>
            </div>
            <div>
                <h1 className='text-2xl font-bold py-5'>{user?.email}</h1>
            </div>
            
        </div>
    );
};

export default DashboardHome;