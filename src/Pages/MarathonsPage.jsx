import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MarathonsPageCard from './MarathonsPageCard';

const MarathonsPage = () => {
    const loadedMarathons=useLoaderData();

    const {marathonTitle}=loadedMarathons;
    return (
        <div>
            <h1>All Marathons : {loadedMarathons.length}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-2'>
                {
                    loadedMarathons.map(marathon=><MarathonsPageCard marathon={marathon}></MarathonsPageCard>)
                }
            </div>
            
        </div>
    );
};

export default MarathonsPage;