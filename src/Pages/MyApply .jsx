import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../Component/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import MyApplyCard from './MyApplyCard';

const MyApply  = () => {
    const {loading,user}=useContext(AuthContex);
    const loadedApply=useLoaderData();
    const [regesteds,setregsteds]=useState([]);



     useEffect(() => {
            // Check if user is available and if the loaded data contains marathons for that email
            if (user?.email && Array.isArray(loadedApply)) {
              const userRegstion = loadedApply.filter(
                (reg) => reg.email === user.email // Filter based on user email
              );
              setregsteds (userRegstion); // Set filtered marathons
            } else {
              setregsteds([]); // Clear the list if no matching email
            }
          }, [user, loadedApply]); // Depend on both user and loadedMarathons





    if(loading)
        {
          return <span className="loading loading-spinner loading-lg"></span>;
        }

        const handleDelet=id=>{
            console.log(id);
        }



    return (
        <div>
            <h1>Tottal Registion : {regesteds.length}</h1>

            <div>
                {
                    regesteds.map(apply=><MyApplyCard key={loadedApply._id} apply={apply} ></MyApplyCard>)
                }
            </div>














            
        </div>
    );
};

export default MyApply ;