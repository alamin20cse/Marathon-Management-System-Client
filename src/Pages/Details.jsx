import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
  const loadedData = useLoaderData();
  const {
    marathonTitle,
    marathonImage,
    location,
    startRegistrationDate,
    endRegistrationDate,
    _id,
    marathonStartDate,
    runningDistance,
    description,
    createdAt,
    totalRegistrationCount,
  } = loadedData;

  // Parse dates to compare
  const currentDate = new Date();
  const startDate = new Date(startRegistrationDate);
  const endDate = new Date(endRegistrationDate);

  // Check if registration is open
  const isRegistrationOpen = currentDate >= startDate && currentDate <= endDate;

  return (
    <div className="card bg-gray-200 w-full max-w-lg mx-auto shadow-xl">
      <figure className="h-[300px]">
        <img className="w-full h-full" src={marathonImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{marathonTitle}</h2>
        <p className="text-start font-bold">Location: {location}</p>

        <div>
          <p className="font-bold">Marathon Start Date: {marathonStartDate}</p>
          <p>Description: {description}</p>
          <p>{runningDistance}</p>
        </div>
        <div className="card-actions flex flex-col justify-start">
          <p>Start Registration Date: {startRegistrationDate}</p>
          <p>End Registration Date: {endRegistrationDate}</p>
          <p>Created At: {createdAt}</p>
        </div>
        <div>
          <p className="p-4 outline bg-lime-300 rounded-3xl">
            Total Registration Count: {totalRegistrationCount}
          </p>
        </div>
        <div>
          {isRegistrationOpen ? (
            <Link to={`/RegistrationMarathon/${_id}`}>
              <button className="btn bg-lime-200">Register to Marathon</button>
            </Link>
          ) : (
            <button className="btn bg-gray-400" disabled>
              Registration Closed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
