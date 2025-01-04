import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

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
  const targetDate = new Date(marathonStartDate); // Use marathon start date as target

  useEffect(() => {
    document.title = 'Details';
  }, []);

  // Check if registration is open
  const isRegistrationOpen = currentDate >= startDate && currentDate <= endDate;

  // Calculate remaining time
  const calculateRemainingTime = () => {
    const remainingTimeInMilliseconds = targetDate - currentDate;
    const days = Math.floor(remainingTimeInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTimeInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTimeInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTimeInMilliseconds % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Clean up on unmount
  }, [targetDate]);

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

        {/* Countdown Timer */}
        <p>Time Left Until Marathon Starts:</p>
        <div className="text-xl font-bold">
          {remainingTime.days} days, {remainingTime.hours} hours, {remainingTime.minutes} minutes, {remainingTime.seconds} seconds
        </div>

        {/* Countdown Circle Timer */}
        <CountdownCircleTimer
          isPlaying
          duration={remainingTime.days * 24 * 60 * 60 + remainingTime.hours * 60 * 60 + remainingTime.minutes * 60 + remainingTime.seconds}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default Details;
