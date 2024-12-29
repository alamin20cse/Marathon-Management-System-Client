import React from 'react';
import { NavLink } from 'react-router-dom';

const MarathonsPageCard = ({marathon}) => {

    const {marathonTitle,marathonImage,location,startRegistrationDate,endRegistrationDate,totalRegistrationCount,_id}=marathon;
    return (
        <div className="card bg-gray-200  shadow-xl">
  <figure className='h-[200px]'>
    <img className='w-full h-full'
      src={marathonImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {marathonTitle}
    
    </h2>
    <p className='text-start font-bold'>Location: {location}</p>
    <div className="card-actions  flex flex-col justify-start">
      <p>Start Registration Date: {startRegistrationDate}</p>
      <p>End Registration Date: {endRegistrationDate}</p>
      <p>totalRegistrationCount:{totalRegistrationCount} </p>
    </div>
    <NavLink to={`/marathons/${_id}`}>
          <button className="btn btn-primary">See Details</button>
        </NavLink>
  </div>
</div>
    );
};

export default MarathonsPageCard;