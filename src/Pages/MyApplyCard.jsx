import React from 'react';

const MyApplyCard = ({apply}) => {
    const {marathonTitle,email,marathonStartDate,firstName,lastName,contactNumber,additionalInfo}=apply
    return (
       <div className='m-4 p-4 bg-gray-200'>
        <h1 className='text-3xl font-bold'>{marathonTitle}</h1>
        <h1>Name:{firstName} {lastName}</h1>
        <p className='font-semibold'>Contact Number: {contactNumber}</p>
        <p>Email:{email}</p>
        <h1 className='text-2xl'>Additional Info :{additionalInfo}</h1>
        <h1 className='bg-lime-400 p-3 rounded-2xl'>Marathon Start Date: {marathonStartDate}</h1>

       </div>
    );
};

export default MyApplyCard;