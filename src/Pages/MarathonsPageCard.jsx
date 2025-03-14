import React from 'react';
import { NavLink } from 'react-router-dom';

const MarathonsPageCard = ({ marathon }) => {
    const {
        marathonStartDate,
        marathonTitle,
        marathonImage,
        location,
        startRegistrationDate,
        endRegistrationDate,
        totalRegistrationCount,
        _id,
    } = marathon;

    // Format dates using toLocaleDateString
    const formattedStartRegistrationDate = new Date(startRegistrationDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const formattedEndRegistrationDate = new Date(endRegistrationDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const formattedMarathonStartDate = new Date(marathonStartDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="card bg-gray-200 shadow-xl">
            <figure className="h-[200px]">
                <img className="w-full h-full" src={marathonImage} alt="Marathon" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{marathonTitle}</h2>
                <p className="text-start font-bold">Location: {location}</p>
                <div className="card-actions flex flex-col justify-start">
                    <p>Start Registration Date: {formattedStartRegistrationDate}</p>
                    <p>End Registration Date: {formattedEndRegistrationDate}</p>
                    <p>Total Registrations: {totalRegistrationCount}</p>
                    <p>Marathon Start Date: {formattedMarathonStartDate}</p>
                </div>
                <NavLink to={`/marathons/${_id}`}>
                    <button className="btn btn-primary">See Details</button>
                </NavLink>
            </div>
        </div>
    );
};

export default MarathonsPageCard;
