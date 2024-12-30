import React, { useEffect, useState } from 'react';
import MarathonHomeCard from './MarathonHomeCard';

const MarathonHome = () => {

    const [marathons,setmarathons]=useState([]);

    useEffect(()=>{

        fetch(`http://localhost:5000/marathonslimit`)
        .then(res=>res.json())
        .then(data=>{
            setmarathons(data);
        })


    },[])




    return (
        <div>
            <h1 className='text-3xl'>Marathons Section :{marathons.length}</h1>
           
           <div  className='grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-2'>

           {
                marathons.map(marathon=><MarathonHomeCard key={marathon._id} marathon={marathon} ></MarathonHomeCard>)
            }
           </div>
 
            
        </div>
    );
};

export default MarathonHome;