import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../Component/AuthProvider';

const UpcomingMarathon = () => {
    const [marathons, setMarathons] = useState([]);
    const {loading}=useContext(AuthContex);

    useEffect(() => {
        fetch(`https://marathon-management-system-server-theta.vercel.app/marathonsupcoming`)
            .then(res => res.json())
            .then(data => {
                const today = new Date(); // Get current date
                today.setHours(0, 0, 0, 0); // Normalize to midnight for comparison

                // Filter marathons with start dates on or after today and sort them
                const upcomingMarathons = data
                    .filter(marathon => new Date(marathon.marathonStartDate) >= today)
                    .sort((a, b) => new Date(a.marathonStartDate) - new Date(b.marathonStartDate));

                // Limit to the first 6 items
                setMarathons(upcomingMarathons.slice(0, 6));
            });
    }, []);

    
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">
                Upcoming Marathons ({marathons.length})
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {marathons.map((marathon, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white shadow-md rounded-md border"
                    >

<figure className="h-[200px]">
                <img
                    className="w-full h-full"
                    src={marathon.marathonImage}
                    alt="Marathon"
                />
            </figure>
                        <h2 className="text-xl font-semibold mb-2">
                            {marathon.name || marathon.marathonTitle}
                        </h2>
                        <p className="text-gray-600">
                           Marathon Start Date:{" "}
                            {new Date(marathon.marathonStartDate).toLocaleDateString()}
                        </p>
                        <p className="text-gray-600">
                            Description: {marathon.description || "No description available."}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingMarathon;
